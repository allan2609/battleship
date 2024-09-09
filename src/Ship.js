class Ship {
  constructor(length) {
    this.length = length;
    this.hitsTaken = 0;
    this.sunk = false;
  }

  hit() {
    if (!this.sunk) {
      this.hitsTaken++;
      this.isSunk();
    }
  }

  isSunk() {
    this.sunk = this.hitsTaken >= this.length;
    return this.sunk;
  }
}

export default Ship;
