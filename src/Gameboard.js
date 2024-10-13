class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size).fill(null).map(() => Array(size).fill(null));
    this.ships = [];
    this.attackedPositions = [];
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
    if (this.attackedPositions.some(pos => pos.row === row && pos.column === column)) {
      throw new Error("Position has already been attacked");
    }

    const target = this.getShipAt(row, column);

    if (target) {
      target.hit();
      this.attackedPositions.push({ row, column, hit: true });
      return "hit";
    } else {
      this.attackedPositions.push({ row, column, hit: false });
      return "miss";
    }
  }
  
}

export default Gameboard;
