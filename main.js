var allBoxes = document.querySelectorAll('.box');
var boardWrapper = document.querySelector('.board-wrap');
var displayPlayer = document.querySelector('.display-player');
var player1Wins = document.querySelector('.display-player-one');
var player2Wins = document.querySelector('.display-player-two');
var currentGame;

window.onload = startGame();

boardWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('box')) {
    playGame(event);
  }
})

function startGame() {
  currentGame = new Game();
  currentGame.retrieveWinsFromStorage();
  displayWinnerCount();
}

function playGame(event) {
  handleBoardMoveEvents(event);
  currentGame.switchPlayerTurn();
  updateDisplayPlayerTurn();
  currentGame.checkWins();
  gameOver();
}

function handleBoardMoveEvents(event) {
  toggleToken(event);
  addMoves(event);
}

function displayWinnerCount() {
  player1Wins.innerText = `${currentGame.player1.wins} wins`;
  player2Wins.innerText = `${currentGame.player2.wins} wins`;
}

function displayWinner() {
  if (currentGame.gameWon && !currentGame.player1.turn) {
    displayPlayer.innerText = `🌊 won!`;
  } else if (currentGame.gameWon && !currentGame.player2.turn) {
    displayPlayer.innerText = `🌴 won!`;
  }
}

function displayDraw() {
  if (currentGame.clickCounter === 9 && currentGame.tie) {
    displayPlayer.innerText = `It's a draw!`;
  }
}

function addMoves(event) {
  var boxIndex = event.target.id;
  currentGame.addMovesToBoardData(boxIndex);

  if (event.target.innerText === '🌊' || '🌴') {
    event.target.classList.add('avoid-clicks');
  }
}

function toggleToken(event) {
  if (currentGame.player1.turn) {
    event.target.innerText = `🌊`;
  } else if (currentGame.player2.turn) {
    event.target.innerText = `🌴`;
  }
}

function updateDisplayPlayerTurn() {
  if (currentGame.player1.turn) {
    displayPlayer.innerHTML = `It's 🌊's turn`;
  } else if (currentGame.player2.turn) {
    displayPlayer.innerHTML = `It's 🌴's turn`;
  }
}

function gameOver() {
  if (currentGame.gameWon || currentGame.tie) {
    displayWinner();
    displayDraw();
    currentGame.saveWin();
    currentGame.resetBoard();
    startNewGame();
  }
}

function startNewGame() {
  return setTimeout(function() {
    clearBoard();
    updateDisplayPlayerTurn();
    displayWinnerCount();
  }, 1000);
}

function clearBoard() {
  for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].innerText = '';
    allBoxes[i].classList.remove('avoid-clicks');
  }
}
