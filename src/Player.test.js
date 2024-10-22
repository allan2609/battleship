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

test("player has a gameboard", () => {
  const player = new Player("human");
  expect(player.gameboard).toBeDefined();
});

test("player's gameboard is of correct size", () => {
  const player = new Player("human");
  expect(player.gameboard.size).toBe(10);
});
