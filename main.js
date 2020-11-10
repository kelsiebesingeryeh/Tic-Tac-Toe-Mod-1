var allBoxes = document.querySelectorAll('.box');
var boardWrapper = document.querySelector('.board-wrap');
var playerDisplayText = document.querySelector('.display-player');
var player1Wins = document.querySelector('.display-winner-one');
var player2Wins = document.querySelector('.display-winner-two');
var currentGame;

window.onload = startGame();

boardWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('box')) {
    playGame(event);
  }
})

function startGame() {
  currentGame = new Game();
  currentGame.player1.turn = true;
  currentGame.retrieveWinsFromStorage();
  displayWinnerCount();
}

function playGame(event) {
  handleEvents(event);
  currentGame.switchPlayerTurn();
  updateDisplayPlayerTurn();
  currentGame.checkWins();
  gameOver();
}

function handleEvents(event) {
  toggleToken(event);
  addMoves(event);
}

function displayWinnerCount() {
  player1Wins.innerText = `${currentGame.player1.wins} wins`;
  player2Wins.innerText = `${currentGame.player2.wins} wins`;
}

function displayWinner() {
  if (currentGame.gameWon === true && currentGame.player1.turn === false) {
    playerDisplayText.innerText = `🚕 won!`;
  } else if (currentGame.gameWon === true && currentGame.player2.turn === false) {
    playerDisplayText.innerText = `🍕 won!`;
  }
}

function displayDraw() {
  if (currentGame.clickCounter === 9 && currentGame.tie === true) {
    playerDisplayText.innerText = `It's a draw!`;
  }
}

function addMoves(event) {
  var boxIndex = event.target.id;
  currentGame.addMovesToBoardData(boxIndex);

  if (event.target.innerText === '🚕' || '🍕') {
    event.target.classList.add('avoid-clicks')
  }
}

function toggleToken(event) {
  if (currentGame.player1.turn) {
    event.target.innerText = `🚕`;
  } else if (currentGame.player2.turn) {
    event.target.innerText = `🍕`;
  }
}

function updateDisplayPlayerTurn() {
  if (currentGame.player1.turn) {
    playerDisplayText.innerHTML = `It's 🚕's turn`;
  } else if (currentGame.player2.turn) {
    playerDisplayText.innerHTML = `It's 🍕's turn`;
  }
}

function gameOver() {
  if (currentGame.gameWon === true || currentGame.tie === true) {
    displayWinner();
    displayDraw();
    currentGame.saveWin();
    currentGame.resetBoard();
    startNewGame();
  }
}

function startNewGame(event) {
  return setTimeout(function() {
    clearBoard();
    updateDisplayPlayerTurn();
    displayWinnerCount();
  }, 500)
}

function clearBoard() {
  for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].innerText = '';
    allBoxes[i].classList.remove('avoid-clicks');
  }
}