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
  defaultDisplay();
  displayWinnerCount();
}

function playGame(event) {
  toggleToken(event);
  addMoves(event);
  currentGame.switchPlayerTurn();
  updateDisplayPlayerTurn();
  disableClicks(event);
  currentGame.checkWins();
  displayWinnerCount();
  gameOver();
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

function disableClicks(event) {
  for (var i = 0; i < allBoxes.length; i++) {
    if (currentGame.clickCounter === 9 || currentGame.gameWon === true) {
      allBoxes[i].classList.add('avoid-clicks');
    }
  }
  if (event.target.innerText !== '') {
    event.target.classList.add('avoid-clicks');
  }
}

function addMoves(event) {
  var boxIndex = event.target.id;
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

function startNewGame() {
  window.setTimeout(clearBoard, 2*1000);
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
