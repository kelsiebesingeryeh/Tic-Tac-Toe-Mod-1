var box0 = document.querySelector('#box-0');
var box1 = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');
var box3 = document.querySelector('#box-3');
var box4 = document.querySelector('#box-4');
var box5 = document.querySelector('#box-5');
var box6 = document.querySelector('#box-6');
var box7 = document.querySelector('#box-7');
var box8 = document.querySelector('#box-8');
var allBoxes = document.querySelectorAll('.box');
var turnDisplay = document.querySelector('.turn-display');
var taxiToken = document.querySelector('.taxi');
var pizzaToken = document.querySelector('.pizza');
var gameWrapper = document.querySelector('.container-wrapper');
var boardWrapper = document.querySelector('.board-wrap');
var currentGame;
var playerDisplayText = document.querySelector('.display-player');


window.onload = startGame();

//currentGame.player1.turn .token - calling currentGame - everytime you are referencing that class

boardWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('box')) {
    toggleToken(event);
    currentGame.switchPlayerTurn();
    updatePlayerTurn();
    disableClicks(event);
    currentGame.checkWins();
    addMoves(event);
  }
})

function startGame() {
  currentGame = new Game(); //in that function is where you are defining it. every time you call game, you are referencing that current game variable
  currentGame.player1.turn = true;
  displayPlayerTurn()
}

function disableClicks(event) {
  for (var i = 0; i < allBoxes.length; i++) {
    if (currentGame.clickCounter === 9) {
      allBoxes[i].classList.add('avoid-clicks');
    }
    if (event.target.innerText !== '') {
      event.target.classList.add('avoid-clicks');
    }
  }
}

function addMoves(event) {
  boxIndex = event.target.id;
  currentGame.addMovesToBoard(boxIndex);
  console.log(currentGame.boardData);
}

function toggleToken(event) {
  if (currentGame.player1.turn === true) {
    event.target.innerText = `${currentGame.player1.token}`
  } else if (currentGame.player2.turn === true) {
    event.target.innerText = `${currentGame.player2.token}`
  }
}

function displayPlayerTurn() {
  if (currentGame.player1.turn === true) {
    playerDisplayText.innerText = `It's ${currentGame.player1.token}'s turn`;
  }
}

function updatePlayerTurn() {
  if (currentGame.player1.turn === true) {
    playerDisplayText.innerHTML = `It's ${currentGame.player1.token} turn`;
  } else if (currentGame.player2.turn === true) {
    playerDisplayText.innerHTML = `It's ${currentGame.player2.token} turn`;
  }
}

function clearBoard() {
  currentGame.resetBoard();
  //clear innerText
}

/*
QUESTIONS - NEED HELP
1. need to be able to turn the token text into an icon
2. need to connect board data to the win conditions to check and see who won
3. need to add the win count to the side of the board - connect the data there to count the winners
4. being able to match the indivudla index of the boardData to the win conditions



Pseudocode:
1. What data do I think I will need?
  - each box needs an // id and we will need to match the ID to that specific position on the board

2. What functions do I think I will need?
  - toggle between plays and shows whos turn it is
    - need to update the innerText
  - toggle between the taxi and pizza icon
      set default to taxi - player1. always starting when you reset the board
    - probably tied to an event listener
  - reset to refresh the board
  - redraw the board once it refreshes
  - find the index of the array


3. Game clas? What should go inside of my game class?
4. Player class? What should go inside of my player class?
*/


/*

Connect ID from player JS to Game js (one or two to the game) - who are we worreid about
- which player is playing
- array to store data from the Game
-zero means nothing is in that placement
-1 is a taxi
-2 is a pizza
var newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
manipulating the DOM and push into innerText


Operation Process of Tic-Tac-Toe
1. Inner text display tells user whos turn it is it switches
2. Player 1 clicks into empty box and heart token appears
3. Game board updates and tells player 2 to go (this switches)
4. Player 2 clicks into game board and star token appears
5. game board switches again and tells player 1 to go
6. repeat process again until someone wins
7. when someone wins - game board updates and says (player 1 or player 2 won)
8. if no one wins (AKA they didn't hit the win combination) then its a draw

DATA:
Winning Combination Array = holds all winning combinations
arrays for winning vs draw - who is winning when

*/
