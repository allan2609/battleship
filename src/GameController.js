class GameController {
  constructor(player, computer) {
      this.player = player;
      this.computer = computer;
      this.currentTurn = "player";
  }

  handleAttack(row, column) {
      const targetBoard = this.currentTurn === "player" ? this.computer.gameboard : this.player.gameboard;
      const result = targetBoard.receiveAttack(row, column);

      const cell = document.querySelector(`.computer-board [data-row="${row}"][data-column="${column}"]`);
      if (cell) cell.classList.add(result);

      this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
      return result;
  }
}

export default GameController;
