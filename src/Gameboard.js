class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size).fill(null).map(() => Array(size).fill(null));
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(ship, x, y) {
    // Assuming ships are placed horizontally for simplicity.
    if (x + ship.length > this.size) {
      throw new Error("Ship cannot be placed out of bounds");
    }

    for (let i = 0; i < ship.length; i++) {
      if (this.board[y][x + i] !== null) {
        throw new Error("Cannot place ship, position already occupied");
      }
    }

    for (let i = 0; i < ship.length; i++) {
      this.board[y][x + i] = ship;
    }

    this.ships.push(ship);
  }

  getShipAt(x, y) {
    return this.board[y][x];
  }
}

export default Gameboard;
