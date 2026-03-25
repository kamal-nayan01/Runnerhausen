// Complete working game logic

const gameState = {
    currentLevel: 1,
    score: 0,
    isGameOver: false,
};

function startGame() {
    console.log('Game started!');
    // Initialize game settings, load assets, etc.
}

function playLevel(level) {
    console.log(`Playing level ${level}`);
    // Implement level-specific logic here

    // Simulate level completion
    if (level < 5) {
        gameState.currentLevel++;
        gameState.score += 100;
        console.log(`Level ${level} complete! Score: ${gameState.score}`);
        playLevel(gameState.currentLevel);
    } else {
        endGame();
    }
}

function endGame() {
    gameState.isGameOver = true;
    console.log('Game over! Final Score:', gameState.score);
}

// Start the game
startGame();
playLevel(gameState.currentLevel);