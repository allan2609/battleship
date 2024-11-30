import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

class GameController {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.currentTurn = "player";
  }

  handleAttack(row, column) {
    this.computer.gameboard.receiveAttack(row, column);
    renderComputerBoard();
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
  }

  computerMove() {
    if (this.currentTurn !== "computer" || this.isGameOver) return;
  
    let row, column;
    do {
      row = Math.floor(Math.random() * this.player.gameboard.size);
      column = Math.floor(Math.random() * this.player.gameboard.size);
    } while (this.player.gameboard.attackedPositions.some(pos => pos.row === row && pos.column === column));
  
    this.player.gameboard.receiveAttack(row, column);
    renderPlayerBoard();
    this.checkGameOver();
    this.switchTurn();
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
