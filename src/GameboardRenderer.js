import { player, computer } from "./index";

function renderPlayerBoard() {
  const playerBoardElement = document.querySelector(".player-board");
  const playerBoard = player.gameboard.board;

  playerBoardElement.innerHTML = "";

  playerBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.row = rowIndex;
      cellElement.dataset.column = colIndex;

      if (cell === "hit") cellElement.classList.add("hit");
      else if (cell === "miss") cellElement.classList.add("miss");
      else if (cell !== null) cellElement.classList.add("ship");

      playerBoardElement.appendChild(cellElement);
    });
  });
}

function renderComputerBoard() {
  const computerBoardElement = document.querySelector(".computer-board");
  const computerBoard = computer.gameboard.board;

  computerBoardElement.innerHTML = "";

  computerBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.row = rowIndex;
      cellElement.dataset.column = colIndex;

      if (cell === "hit") cellElement.classList.add("hit");
      else if (cell === "miss") cellElement.classList.add("miss");

      computerBoardElement.appendChild(cellElement);
    });
  });
}

export { renderPlayerBoard, renderComputerBoard };
