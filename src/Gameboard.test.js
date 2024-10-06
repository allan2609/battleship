import Ship from "./Ship";
import Gameboard from "./Gameboard";

test("placeShip places a ship on the gameboard at specified coordinates", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2);
  
  expect(gameboard.getShipAt(2, 2)).toBe(ship);
});

test("receiveAttack sends the hit function to the correct ship", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2);
  gameboard.receiveAttack(2, 2);
  expect(ship.hitsTaken).toEqual(1);
});

test("receiveAttack records the coordinates of a missed shot", () => {
  const gameboard = new Gameboard(10);
  gameboard.receiveAttack(5, 5);
  expect(gameboard.missedShots).toContainEqual([5, 5]);
});

test("receiveAttack does not allow duplicate attacks on the same coordinate", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(2, 2);
  expect(ship.hitsTaken).toEqual(1);
  expect(gameboard.missedShots.length).toEqual(0);
});

test("receiveAttack throws an error if the coordinates are out of bounds", () => {
  const gameboard = new Gameboard(10);
  expect(() => gameboard.receiveAttack(11, 5)).toThrow("Coordinates are out of bounds");
});
