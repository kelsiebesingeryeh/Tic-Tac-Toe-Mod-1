class Player {
  constructor(id, token, turn) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.turn = turn;
    this.winner = false;
  }


  saveWinsToStorage() {
    debugger
    localStorage.setItem('wins', JSON.stringify(this));
  }

  retrieveWinsFromStorage() {
    var retrieveWins = localStorage.getItem('wins')
    JSON.parse(retrieveWins);
  }
}
