class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size).fill(null).map(() => Array(size).fill(null));
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(ship, row, column) {
    // Assuming ships are placed horizontally for simplicity.
    if (column + ship.length > this.size) {
      throw new Error("Ship cannot be placed out of bounds");
    }
  
    for (let i = 0; i < ship.length; i++) {
      if (this.board[row][column + i] !== null) {
        throw new Error("Cannot place ship, position already occupied");
      }
    }
  
    for (let i = 0; i < ship.length; i++) {
      this.board[row][column + i] = ship;
    }
  
    this.ships.push(ship);
  }

  getShipAt(row, column) {
    return this.board[row][column];
  }

  receiveAttack(row, column) {
    if (this.missedShots.some(([r, c]) => r === row && c === column)) {
      throw new Error("Position has already been attacked");
    }
  
    const target = this.getShipAt(row, column);
  
    if (target) {
      target.hit();
    } else {
      this.missedShots.push([row, column]);
    }
  }
  
}

export default Gameboard;
