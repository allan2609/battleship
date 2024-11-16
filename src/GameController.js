import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

class GameController {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.currentTurn = "player";
  }

  handleAttack(row, column) {
    if (this.currentTurn !== "player") return;

    const result = this.computer.gameboard.receiveAttack(row, column);

    const cell = document.querySelector(`.computer-board [data-row="${row}"][data-column="${column}"]`);
    if (cell) cell.classList.add(result);

    renderPlayerBoard();
    renderComputerBoard();

    this.switchTurn();
    this.computerMove();
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
  }

  computerMove() {
    if (this.currentTurn !== "computer") return;

    let row, column;
    do {
      row = Math.floor(Math.random() * this.player.gameboard.size);
      column = Math.floor(Math.random() * this.player.gameboard.size);
    } while (this.player.gameboard.attackedPositions.some(pos => pos.row === row && pos.column === column));

    const result = this.player.gameboard.receiveAttack(row, column);

    const cell = document.querySelector(`.player-board [data-row="${row}"][data-column="${column}"]`);
    if (cell) cell.classList.add(result);

    renderPlayerBoard();
    renderComputerBoard();

    this.switchTurn();
  }
}

export default GameController;
