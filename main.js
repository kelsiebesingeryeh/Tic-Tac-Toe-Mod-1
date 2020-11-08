var allBoxes = document.querySelectorAll('.box');
var boardWrapper = document.querySelector('.board-wrap');
var playerDisplayText = document.querySelector('.display-player');
var player1Wins = document.querySelector('.display-winner-one');
var player2Wins = document.querySelector('.display-winner-two');
var currentGame;

window.onload = startGame();

boardWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('box')) {
    playGame();
  }
});

function startGame() {
  currentGame = new Game();
  currentGame.player1.turn = true;
  console.log('start game', currentGame.player1.turn)
  defaultDisplay();
  displayWinnerCount();
}

function playGame() {
  toggleToken(event);
  currentGame.switchPlayerTurn();
  updateDisplayPlayerTurn();
  disableClicks(event);
  addMoves(event);
  currentGame.checkWins();
  displayWinner();
  displayDraw();
  displayWinnerCount()
}

function displayWinnerCount() {
  currentGame.saveWins()
  player1Wins.innerText = `${currentGame.player1.wins} wins`;
  player2Wins.innerText = `${currentGame.player2.wins} wins`;
}

function displayWinner() {
  // currentGame.player1.token = '🚕';
  // currentGame.player2.token = '🍕';
  if (currentGame.gameWon === true && currentGame.player1.turn === false) {
    playerDisplayText.innerText = `${currentGame.player1.token} won!`;
  } else if (currentGame.gameWon === true && currentGame.player2.turn === false) {
    playerDisplayText.innerText = `${currentGame.player2.token} won!`;
  }
}

function displayDraw() {
  if (currentGame.clickCounter === 9 && currentGame.gameWon === false) {
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
  boxIndex = event.target.id;
  currentGame.addMovesToBoardData(boxIndex);
  console.log(currentGame.boardData);
}

function toggleToken(event) {
  // currentGame.player1.token = '🚕';
  // currentGame.player2.token = '🍕';
  if (currentGame.player1.turn === true) {
    event.target.innerText = `${currentGame.player1.token}`
    console.log('player1', currentGame.player1.turn)
  } else if (currentGame.player2.turn === true) {
    event.target.innerText = `${currentGame.player2.token}`
    console.log('player2', currentGame.player2.turn)
  }
}

function defaultDisplay() {
  if (currentGame.player1.turn === true) {
    console.log('player1', currentGame.player1.turn)
    playerDisplayText.innerText = `It's ${currentGame.player1.token}'s turn`;
  }
}

function updateDisplayPlayerTurn() {
  // currentGame.player1.token = '🚕';
  // currentGame.player2.token = '🍕';
  if (currentGame.player1.turn === true) {
    console.log('player1', currentGame.player1.turn)
    playerDisplayText.innerHTML = `It's ${currentGame.player1.token}'s turn`;
  } else if (currentGame.player2.turn === true) {
    console.log('player2', currentGame.player2.turn)
    playerDisplayText.innerHTML = `It's ${currentGame.player2.token}'s turn`;
  }
}

function clearBoard() {
  for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i] = '';
    }
    //add timeout here
  currentGame.resetBoard();
}

/*
QUESTIONS - NEED HELP
1. need to be able to turn the token text into an icon
2. need to add the win count to the side of the board - connect the data there to count the winners
3. timeout - need to set a timeout to clear the board after game ends. redraw board once it refreshes
4. localStorage!!!

//currentGame.player1.turn .token - calling currentGame - everytime you are referencing that class

Connect ID from player JS to Game js (one or two to the game) - who are we worreid about
- which player is playing
- array to store data from the Game
-zero means nothing is in that placement
-1 is a taxi
-2 is a pizza
var newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
manipulating the DOM and push into innerText
*/
