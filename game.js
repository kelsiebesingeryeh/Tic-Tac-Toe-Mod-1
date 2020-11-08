
class Game {
  constructor() {
    this.player1 = new Player(1, 'X', true);
    this.player2 = new Player(2, 'O', false);
    this.boardData = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    this.winConditions = [
      [0, 1, 2], //row winning
      [3, 4, 5], //row winning
      [6, 7, 8], //row winning
      [0, 3, 6], //column winning
      [1, 4, 7], //column winning
      [2, 5, 8], //column winning
      [0, 4, 8], //diagonal winning
      [2, 4, 6], //diagonal winning
    ];
    this.drawConditions //need to come up with draw conditions here
    this.gameWon = false;
    this.clickCounter = 0;
  }

  addMovesToBoard(boxIndex) {
    var newIndex = boxIndex.split('-');
    newIndex = parseInt(newIndex[1]);
    if (this.player1.turn === true) {
      this.boardData.splice(newIndex, 1, this.player2.token);
    } else if (this.player2.turn === true) {
      this.boardData.splice(newIndex, 1, this.player1.token);
    }
  }

  switchPlayerTurn() {
    this.clickCounter++;
    this.player1.turn = !this.player1.turn;
    this.player2.turn = !this.player2.turn;
  }

  checkWins() {
    if (this.clickCounter > 5) {
      for (var i = 0; i < this.winConditions.length; i++) {
        if (this.winConditions[i] === this.boardData) {
          return this.gameWon = true;
        } else {
          //do nothing
        }
    }
   }
  }

  resetBoard() {
    //if statement - when the game is over, reset the board data and clear inner text
        this.boardData = [];
      }
}

//after every turn, we want to check the wins to see if a player has won
// this.boardData[boxIndex] //exactly where in the array to manipulate

  // check win conditions?- loop through win conditions and compare to board DATA. if/else stricly compare to win conditions
  // winning conditions can match board data (loop through winning conditions through board data). same as draw conditions as well.
  // compare board conditions to winning conditions on every turn to see if the game is over

// number of boxes in hTML is the same number of zeros in board data, based on which one is clicked, there is a number assoicated with switchPlayerTurn
// event.target is 1, take in 1, change first index,
// function needs to take an argument of a number, number that represents an index in board DATA

// FUNCTION?!
// keep track of data for game board after player turn


// detect when game is a draw - need to figure out draw conditions and every time a player goes, it checks draw conditions
// save winning game board to correct players win array - do this last. saving wins to local storage
// reset game to clear board - clear out board data. reset to what it is when its instantiated. []


// how to create the board within the game class and reassign the values in each space
