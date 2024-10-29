import "./styles.css";
import Player from "./Player";
import Ship from "./Ship";

export function initializeGame() {
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

  return { player, computer };
}
