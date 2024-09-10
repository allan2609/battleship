import Ship from "./Ship";

test("calling hit() increments hitsTaken property", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.hitsTaken).toEqual(2);
});
