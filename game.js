class Game {
  constructor() {
    this.player1 = new Player(1, 'X', true, false);
    this.player2 = new Player(2, 'O', false, false);
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
    this.gameWon = false;
    this.clickCounter = 0;
    this.tie = false;
  }

  addMovesToBoardData(boxIndex) {
    var newIndex = boxIndex.split('-');
    newIndex = parseInt(newIndex[1]);
    if (this.player1.turn === true) {
      this.boardData.splice(newIndex, 1, this.player1.token);
    } else if (this.player2.turn === true) {
      this.boardData.splice(newIndex, 1, this.player2.token);
    }
  }

  switchPlayerTurn() {
    this.clickCounter++;
    this.player1.turn = !this.player1.turn;
    this.player2.turn = !this.player2.turn;
  }

  checkWins() {
    var xArray = [];
    var oArray = [];
    var xCount;
    var oCount;
    for (var i = 0; i < this.boardData.length; i++) {
      if (this.boardData[i] === "X") {
        xArray.push(i);
      } else if (this.boardData[i] === "O") {
        oArray.push(i);
      }
    }

    for (var i = 0; i < this.winConditions.length; i++) {
      xCount = 0;
      oCount = 0;
      for (var k = 0; k < xArray.length; k++) {
        if (this.winConditions[i].includes(xArray[k])) {
          xCount++;
        }
      }
      for (var j = 0; j < oArray.length; j++) {
        if (this.winConditions[i].includes(oArray[j])) {
          oCount++;
        }
      }
      if (xCount === 3) {
        this.player1.winner = true;
        return this.gameWon = true;
      } else if (oCount === 3) {
        this.player2.winner = true;
        return this.gameWon = true;
      }
    }
    if (this.clickCounter === 9) {
      this.tie = true;
      return this.gameWon = false;
    }
  }

  saveWin() {
    if (this.player1.winner) {
      this.player1.wins++;
      this.saveToLocalStorage();
      this.retrieveWinsFromStorage();
    } else if (this.player2.winner) {
      this.player2.wins++;
      this.saveToLocalStorage();
      this.retrieveWinsFromStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('player1WinCount', JSON.stringify(this.player1.wins));
    localStorage.setItem('player2WinCount', JSON.stringify(this.player2.wins));
  }

  retrieveWinsFromStorage() {
    var getPlayer1Wins = localStorage.getItem('player1WinCount');
    var getPlayer2Wins = localStorage.getItem('player2WinCount');
    JSON.parse(getPlayer1Wins);
    JSON.parse(getPlayer2Wins);
  }

  resetBoard() {
    this.player1.turn = true;
    this.player2.turn = false;
    this.boardData = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    this.gameWon = false;
    this.clickCounter = 0;
    this.tie = false;
    this.player1.winner = false;
    this.player2.winner = false;
  }
}
