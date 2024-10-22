import Player from "./Player";
import Gameboard from "./Gameboard";

test("creates a human player", () => {
  const player = new Player("human");
  expect(player.type).toBe("human");
});

test("creates a computer player", () => {
  const player = new Player("computer");
  expect(player.type).toBe("computer");
});
