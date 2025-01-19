import "./styles.css";
import Player from "./Player";
import Ship from "./Ship";
import GameController from "./GameController";
import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

const player = new Player("human");
const computer = new Player("computer");
const gameController = new GameController(player, computer);

function createShips() {
  return [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];
}

function initializeGame() {
  gameController.resetGame();
  
  const playerShips = createShips();
  const computerShips = createShips();
  
  player.gameboard.randomizeShips(playerShips);
  computer.gameboard.randomizeShips(computerShips);
  
  renderPlayerBoard();
  renderComputerBoard();
}

initializeGame();

document.querySelector(".computer-board").addEventListener("click", (e) => {
  const row = parseInt(e.target.dataset.row, 10);
  const column = parseInt(e.target.dataset.column, 10);
  if (gameController.currentTurn === "player" && !isNaN(row) && !isNaN(column)) {
    gameController.handleAttack(row, column);
  }
});

document.querySelector(".randomize-button").addEventListener("click", initializeGame);

export { player, computer };
