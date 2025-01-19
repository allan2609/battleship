class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size).fill(null).map(() => Array(size).fill(null));
    this.ships = [];
    this.attackedPositions = [];
  }

  placeShip(ship, row, column, isVertical = false) {
    if (isVertical) {
      if (row + ship.length > this.size) {
        throw new Error("Ship cannot be placed out of bounds");
      }
    } else {
      if (column + ship.length > this.size) {
        throw new Error("Ship cannot be placed out of bounds");
      }
    }
  
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        if (this.board[row + i][column] !== null) {
          throw new Error("Cannot place ship, position already occupied");
        }
      } else {
        if (this.board[row][column + i] !== null) {
          throw new Error("Cannot place ship, position already occupied");
        }
      }
    }
  
    for (let i = 0; i < ship.length; i++) {
      if (isVertical) {
        this.board[row + i][column] = ship;
      } else {
        this.board[row][column + i] = ship;
      }
    }
  
    this.ships.push(ship);
  }  

  getShipAt(row, column) {
    return this.board[row][column];
  }

  receiveAttack(row, column) {
    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {
      throw new Error("Coordinates are out of bounds");
    }
  
    if (this.attackedPositions.some(pos => pos.row === row && pos.column === column)) {
      throw new Error("Position has already been attacked");
    }
  
    const target = this.getShipAt(row, column);
    const result = target ? "hit" : "miss";
  
    if (target) {
      target.hit();
      this.board[row][column] = "hit";
    } else {
      this.board[row][column] = "miss";
    }
  
    this.attackedPositions.push({ row, column, hit: result === "hit" });
    return { result, row, column };
  }

  areAllShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }

  initializeBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill(null));
  }

  clear() {
    this.board = this.initializeBoard();
    this.ships = [];
  }

  canPlaceShip(ship, row, column, isVertical) {
    if (isVertical) {
      if (row + ship.length > this.size) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][column] !== null) return false;
      }
    } else {
      if (column + ship.length > this.size) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][column + i] !== null) return false;
      }
    }
    return true;
  }  

  randomizeShips(ships) {
    const directions = [true, false];
    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * this.size);
        const column = Math.floor(Math.random() * this.size);
        const horizontal = directions[Math.floor(Math.random() * directions.length)];
        if (this.canPlaceShip(ship, row, column, horizontal)) {
          this.placeShip(ship, row, column, horizontal);
          placed = true;
        }
      }
    });
  }
  
  clear() {
    this.board = this.initializeBoard();
    this.ships = [];
    this.attackedPositions = [];
  }
}

export default Gameboard;
