import Ship from "./Ship";
import Gameboard from "./Gameboard";

test("placeShip places a ship on the gameboard at specified coordinates", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2);
  
  expect(gameboard.getShipAt(2, 2)).toBe(ship);
});
