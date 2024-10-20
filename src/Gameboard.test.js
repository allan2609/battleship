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
  expect(gameboard.attackedPositions).toContainEqual({ row: 5, column: 5, hit: false });
});

test("receiveAttack does not allow duplicate attacks on the same coordinate", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2);
  gameboard.receiveAttack(2, 2);
  expect(() => gameboard.receiveAttack(2, 2)).toThrow("Position has already been attacked");
});

test("receiveAttack throws an error if the coordinates are out of bounds", () => {
  const gameboard = new Gameboard(10);
  expect(() => gameboard.receiveAttack(11, 5)).toThrow("Coordinates are out of bounds");
});

test("receiveAttack throws an error if the coordinates are negative", () => {
  const gameboard = new Gameboard(10);
  expect(() => gameboard.receiveAttack(-1, -5)).toThrow("Coordinates are out of bounds");
});

test("placeShip places a ship vertically on the gameboard", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2, true); // "true" means vertical, horizontal by default
  expect(gameboard.getShipAt(2, 2)).toBe(ship);
  expect(gameboard.getShipAt(3, 2)).toBe(ship);
  expect(gameboard.getShipAt(4, 2)).toBe(ship);
});

test("placeShip throws an error if part of a horizontal ship goes out of bounds", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  expect(() => gameboard.placeShip(ship, 2, 10)).toThrow("Cannot place ship out of bounds");
});

test("placeShip throws an error if part of a vertical ship goes out of bounds", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  expect(() => gameboard.placeShip(ship, 10, 2, true)).toThrow("Cannot place ship out of bounds");
});

test("placeShip places a horizontal ship at the rightmost edge without error", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  expect(() => gameboard.placeShip(ship, 2, 7)).not.toThrow();
});

test("placeShip places a vertical ship at the bottom edge without error", () => {
  const gameboard = new Gameboard(10);
  const ship = new Ship(3);
  expect(() => gameboard.placeShip(ship, 7, 2, true)).not.toThrow();
});
