// Suggestion 1: Evolve the Story Across Levels
const levelEras = ['Medieval', '19th Century', 'Early 20th', 'Stonewall', '1980s', '1990s', '2000s', 'Future'];
function onLevelStart(depth) {
  const era = levelEras[depth - 1] || 'Unknown Era';
  addMessage(`Entering ${era}...`, 'special');
}

// Suggestion 2: Side Quests & NPC Interactions
const sideQuests = {
  deliverLetter: {
    giver: 'charley',
    target: 'marsha',
    item: 'letter',
    complete: false
  }
};
function beginSideQuest(key) {
  const q = sideQuests[key];
  addMessage(`${HISTORICAL_FIGURES[q.giver].name} asks you to deliver a letter to ${HISTORICAL_FIGURES[q.target].name}.`, 'special');
  q.active = true;
}
function completeSideQuest(key) {
  const q = sideQuests[key];
  q.complete = true;
  addMessage('Quest complete! You are rewarded.', 'special');
}

// Suggestion 3: Unlockable Abilities
function grantAbility(name) {
  game.abilities[name] = true;
  addMessage(`Ability unlocked: ${name}`, 'special');
}

// Example ability usage inside tryMove
function tryMoveWithAbilities(dx, dy) {
  const steps = game.abilities.doubleMove ? 2 : 1;
  for (let i = 0; i < steps; i++) {
    tryMove(dx, dy);
  }
}

// Suggestion 4: Community Hub or Safe Space
function openCommunityHub() {
  document.getElementById('hub-screen').style.display = 'flex';
}
function closeCommunityHub() {
  document.getElementById('hub-screen').style.display = 'none';
}

// Suggestion 5: Refined Enemy Behavior
const TROLL_TYPES = {
  drone: { char: 'd', color: '#CC3333', range: 3 },
  boss: { char: 'B', color: '#880000', health: 3 }
};
function spawnDrone(x, y) {
  game.trolls.push({ x, y, char: TROLL_TYPES.drone.char, color: TROLL_TYPES.drone.color, trollType: 'drone' });
}

// Suggestion 6: Dynamic Events
function maybeSpawnFriendly() {
  if (Math.random() < 0.1) {
    const room = rooms[Math.floor(Math.random() * rooms.length)];
    const x = room.x + 1;
    const y = room.y + 1;
    game.npcs.push({ x, y, char: '♥', color: '#5BCEFA', type: 'ally' });
    addMessage('A friendly activist appears!', 'special');
  }
}

// Suggestion 7: Accessibility and Presentation
function toggleColorScheme() {
  document.body.classList.toggle('alt-colors');
}

// Suggestion 8: Celebratory Finale
function spawnFinalBoss() {
  game.trolls.push({ x: game.player.x + 2, y: game.player.y, char: '☠', color: '#FF4444', trollType: 'finalBoss' });
  addMessage('The final boss emerges!', 'special');
}
function checkForFinale() {
  if (game.zines >= 19 && game.historicalFigures >= 9) {
    spawnFinalBoss();
  }
}
