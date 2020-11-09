var allBoxes = document.querySelectorAll('.box');
var boardWrapper = document.querySelector('.board-wrap');
var playerDisplayText = document.querySelector('.display-player');
var player1Wins = document.querySelector('.display-winner-one');
var player2Wins = document.querySelector('.display-winner-two');
var currentGame;
var timer;

window.onload = startGame();

boardWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('box')) {
    playGame();
  }
})

function startGame() {
  currentGame = new Game();
  currentGame.player1.turn = true;
  defaultDisplay();
  displayWinnerCount();
}

function playGame() {
  toggleToken(event);
  addMoves(event);
  currentGame.switchPlayerTurn();
  updateDisplayPlayerTurn();
  disableClicks(event);
  currentGame.checkWins();
  currentGame.saveWin();
  // saveToLocalStorage();
  displayWinner();
  displayDraw();
  displayWinnerCount();
  setInterval(clearBoard, 5000);
}

function saveToLocalStorage() {
  currentGame.player1.saveWinsToStorage();
  currentGame.player2.saveWinsToStorage();
  // currentGame.player1.retrieveWinsFromStorage();
  // currentGame.player2.retrieveWinsFromStorage();
  //something here for local storage;
}

function displayWinnerCount() {
  player1Wins.innerText = `${currentGame.player1.wins} wins`;
  player2Wins.innerText = `${currentGame.player2.wins} wins`;
}

function displayWinner() {
  if (currentGame.gameWon && currentGame.player1.turn === false) {
    playerDisplayText.innerText = `🚕 won!`;
  } else if (currentGame.gameWon && !currentGame.player2.turn) {
    playerDisplayText.innerText = `🍕 won!`;
  }
}

function displayDraw() {
  if (currentGame.clickCounter === 9 && currentGame.tie) {
    playerDisplayText.innerText = `It's a draw!`;
  }
}

function disableClicks(event) {
  for (var i = 0; i < allBoxes.length; i++) {
    if (currentGame.clickCounter === 9 || currentGame.gameWon) {
      allBoxes[i].classList.add('avoid-clicks');
    }
  }
  if (event.target.innerText !== '') {
    event.target.classList.add('avoid-clicks');
  }
}

function addMoves(event) {
  boxIndex = event.target.id;
  currentGame.addMovesToBoardData(boxIndex);
}

function toggleToken(event) {
  if (currentGame.player1.turn) {
    event.target.innerText = `🚕`;
  } else if (currentGame.player2.turn) {
    event.target.innerText = `🍕`;
  }
}

function defaultDisplay() {
  if (currentGame.player1.turn) {
    playerDisplayText.innerText = `It's 🚕's turn`;
  }
}

function updateDisplayPlayerTurn() {
  if (currentGame.player1.turn === true) {
    playerDisplayText.innerHTML = `It's 🚕's turn`;
  } else if (currentGame.player2.turn === true) {
    playerDisplayText.innerHTML = `It's 🍕's turn`;
  }
}

function gameOver() {
  currentGame.resetBoard();
  clearBoard();
}

function clearBoard() {
  if (currentGame.gameWon === true || currentGame.tie === true) {
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = '';
        allBoxes[i].classList.remove('avoid-clicks');
      }
  }
}

//ISSUE - disable clicks, lets you keep clicking when you aren't supposed to
//

/*
QUESTIONS - NEED HELP
3. timeout - need to set a timeout to clear the board after game ends. redraw board once it refreshes
4. localStorage!!!

*/
