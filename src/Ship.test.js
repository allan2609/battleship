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
