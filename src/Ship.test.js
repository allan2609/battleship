import Ship from "./Ship";

test("calling hit() increments hitsTaken property", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.hitsTaken).toEqual(2);
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
