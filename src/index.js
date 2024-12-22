import "./styles.css";
import Player from "./Player";
import Ship from "./Ship";
import GameController from "./GameController";
import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

const player = new Player("human");
const computer = new Player("computer");
const playerShip1 = new Ship(3);
const playerShip2 = new Ship(4);
const computerShip1 = new Ship(3);
const computerShip2 = new Ship(4);

player.gameboard.placeShip(playerShip1, 2, 2, false);
player.gameboard.placeShip(playerShip2, 5, 5, true);
computer.gameboard.placeShip(computerShip1, 1, 1, false);
computer.gameboard.placeShip(computerShip2, 6, 3, true);

const gameController = new GameController(player, computer);
renderPlayerBoard();
renderComputerBoard();

document.querySelector(".computer-board").addEventListener("click", (e) => {
  const row = parseInt(e.target.dataset.row, 10);
  const column = parseInt(e.target.dataset.column, 10);
  if (gameController.currentTurn === "player" && !isNaN(row) && !isNaN(column)) {
    gameController.handleAttack(row, column);
  }
});

export { player, computer };
