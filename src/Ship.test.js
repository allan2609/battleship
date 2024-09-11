import Ship from "./Ship";

test("calling hit() increments hitsTaken property", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.hitsTaken).toEqual(2);
});

test("ship of length 1 sinks after one hit", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  expect(ship.sunk).toBe(true);
});

test("sunk status is updated correctly after each hit", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  expect(ship.sunk).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  expect(ship.sunk).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
  expect(ship.sunk).toBe(true);
});

test("calling hit() doesn't increment hitsTaken if the ship is already sunk", () => {
  const ship = new Ship(1);
  ship.hit();
  ship.hit();
  expect(ship.hitsTaken).toEqual(1);
});

test("isSunk() returns false when the ship hasn't taken enough hits", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("isSunk() returns true when the ship has taken hits equal to its length", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("isSunk() updates the sunk property when the ship is sunk", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBe(true);
});

test("sunk property is initially false", () => {
  const ship = new Ship(2);
  expect(ship.sunk).toBe(false);
});

test("calling hit() after ship is sunk doesn't change its state", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hitsTaken).toEqual(2);
  expect(ship.sunk).toBe(true);
});

test("ship with zero or negative length behaves correctly", () => {
  const zeroLengthShip = new Ship(0);
  expect(zeroLengthShip.isSunk()).toBe(true);
  const negativeLengthShip = new Ship(-1);
  expect(negativeLengthShip.isSunk()).toBe(true);
});
