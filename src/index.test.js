import { initializeGame } from "./index";

test("initializeGame sets up players with correctly placed ships", () => {
  const { player, computer } = initializeGame();

  expect(player.type).toBe("human");
  expect(computer.type).toBe("computer");

  expect(player.gameboard.getShipAt(2, 2)).toBeDefined();
  expect(player.gameboard.getShipAt(5, 5)).toBeDefined();

  expect(computer.gameboard.getShipAt(1, 1)).toBeDefined();
  expect(computer.gameboard.getShipAt(6, 3)).toBeDefined();
});
