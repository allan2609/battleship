import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

class GameController {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.currentTurn = "player";
    this.lastHit = null;
    this.targetQueue = [];
  }

  handleAttack(row, column) {
    this.computer.gameboard.receiveAttack(row, column);
    renderComputerBoard();
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
  }

  computerMove() {
    if (this.currentTurn !== "computer") return;
    let target;

    if (this.targetQueue.length > 0) {
      target = this.targetQueue.shift();
    } else {
      do {
        const row = Math.floor(Math.random() * this.player.gameboard.size);
        const column = Math.floor(Math.random() * this.player.gameboard.size);
        target = { row, column };
      } while (
        this.player.gameboard.attackedPositions.some(
          pos => pos.row === target.row && pos.column === target.column
        )
      );
    }

    const attackResult = this.player.gameboard.receiveAttack(target.row, target.column);
    
    if (attackResult.result === "hit") {
      this.lastHit = target;
      this.addAdjacentTargets(target);
    }

    renderPlayerBoard();
    renderComputerBoard();

    this.switchTurn();
  }

  addAdjacentTargets({ row, column }) {
    const potentialTargets = [
      { row: row - 1, column },
      { row: row + 1, column },
      { row, column: column - 1 },
      { row, column: column + 1 },
    ];

    potentialTargets.forEach(target => {
      const isWithinBounds =
        target.row >= 0 &&
        target.row < this.player.gameboard.size &&
        target.column >= 0 &&
        target.column < this.player.gameboard.size;

      const isAlreadyAttacked = this.player.gameboard.attackedPositions.some(
        pos => pos.row === target.row && pos.column === target.column
      );

      if (isWithinBounds && !isAlreadyAttacked) {
        this.targetQueue.push(target);
      }
    });
  }

  checkGameOver() {
    if (this.player.gameboard.areAllShipsSunk()) {
      alert("Computer wins!");
      this.isGameOver = true;
      this.endGame();
    } else if (this.computer.gameboard.areAllShipsSunk()) {
      alert("Player wins!");
      this.isGameOver = true;
      this.endGame();
    }
  }
  
  endGame() {
    document.querySelector(".computer-board").removeEventListener("click", this.handleAttack);
  }
  
}

export default GameController;
