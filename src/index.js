import "./styles.css";
import Player from "./Player";
import Ship from "./Ship";
import GameController from "./GameController";
import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

const player = new Player("human");
const computer = new Player("computer");
let gameController;

function createShips() {
  return [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];
}

window.initializeGame = function initializeGame() {
  if (gameController) {
    gameController.resetGame();
  }
  const playerShips = createShips();
  const computerShips = createShips();
  player.gameboard.randomizeShips(playerShips);
  computer.gameboard.randomizeShips(computerShips);
  renderPlayerBoard();
  renderComputerBoard();
};

document.addEventListener("DOMContentLoaded", () => {
  gameController = new GameController(player, computer);

  const computerBoard = document.querySelector(".computer-board");
  const randomizeButton = document.querySelector(".randomize-button");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalButton = document.querySelector(".modal-button");

  computerBoard.addEventListener("click", (e) => {
    const row = parseInt(e.target.dataset.row, 10);
    const column = parseInt(e.target.dataset.column, 10);
    if (gameController.currentTurn === "player" && !isNaN(row) && !isNaN(column)) {
      gameController.handleAttack(row, column);
    }
  });

  randomizeButton.addEventListener("click", window.initializeGame);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      gameController.hideModal();
      window.initializeGame();
    }
  });

  modalButton.addEventListener("click", (e) => {
    e.stopPropagation();
    gameController.hideModal();
    window.initializeGame();
  });

  window.initializeGame();
});

export { player, computer };
