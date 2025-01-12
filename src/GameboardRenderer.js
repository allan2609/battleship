import { player, computer } from "./index";

let draggedShipData = null;

function renderPlayerBoard() {
  const playerBoardElement = document.querySelector(".player-board");
  const playerBoard = player.gameboard.board;
  playerBoardElement.innerHTML = "";

  playerBoardElement.addEventListener("dragover", handleDragOver);
  playerBoardElement.addEventListener("drop", handleDrop);

  playerBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.row = rowIndex;
      cellElement.dataset.column = colIndex;

      if (cell === "hit") {
        cellElement.classList.add("hit");
      } else if (cell === "miss") {
        cellElement.classList.add("miss");
      } else if (cell !== null) {
        cellElement.classList.add("ship");
      }
      
      playerBoardElement.appendChild(cellElement);
    });
  });

  const shipPositions = findShipPositions(playerBoard);
  shipPositions.forEach(shipData => {
    const shipElement = createShipElement(shipData);
    playerBoardElement.appendChild(shipElement);
  });
}

function findShipPositions(board) {
  const positions = [];
  const processed = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const cell = board[row][col];
      const key = `${row},${col}`;

      if (cell && cell !== "hit" && cell !== "miss" && !processed.has(key)) {
        let isVertical = false;
        let length = 1;

        if (row + 1 < board.length && board[row + 1][col] === cell) {
          isVertical = true;
          while (row + length < board.length && board[row + length][col] === cell) {
            processed.add(`${row + length},${col}`);
            length++;
          }
        } 
        else if (col + 1 < board[row].length && board[row][col + 1] === cell) {
          while (col + length < board[row].length && board[row][col + length] === cell) {
            processed.add(`${row},${col + length}`);
            length++;
          }
        }

        positions.push({
          ship: cell,
          row,
          column: col,
          length,
          isVertical
        });

        processed.add(key);
      }
    }
  }

  return positions;
}

function createShipElement(shipData) {
  const { row, column, length, isVertical } = shipData;
  
  const shipElement = document.createElement("div");
  shipElement.classList.add("ship-container");
  shipElement.draggable = true;
  
  shipElement.style.gridRowStart = row + 1;
  shipElement.style.gridColumnStart = column + 1;
  shipElement.style.gridRowEnd = isVertical ? row + length + 1 : row + 2;
  shipElement.style.gridColumnEnd = isVertical ? column + 2 : column + length + 1;
  
  shipElement.dataset.shipLength = length;
  shipElement.dataset.isVertical = isVertical;
  shipElement.dataset.originalRow = row;
  shipElement.dataset.originalColumn = column;

  shipElement.addEventListener("dragstart", handleDragStart);
  shipElement.addEventListener("dragend", handleDragEnd);

  return shipElement;
}

function handleDragStart(e) {
  const shipElement = e.target;
  shipElement.classList.add("dragging");
  
  draggedShipData = {
    length: parseInt(shipElement.dataset.shipLength),
    isVertical: shipElement.dataset.isVertical === "true",
    originalRow: parseInt(shipElement.dataset.originalRow),
    originalColumn: parseInt(shipElement.dataset.originalColumn)
  };
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
  draggedShipData = null;
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function handleDrop(e) {
  e.preventDefault();
  
  if (!draggedShipData) return;

  const cell = e.target.closest(".cell");
  if (!cell) return;

  const row = parseInt(cell.dataset.row);
  const column = parseInt(cell.dataset.column);

  if (isNaN(row) || isNaN(column)) return;

  try {
    const ship = player.gameboard.getShipAt(
      draggedShipData.originalRow,
      draggedShipData.originalColumn
    );

    if (!ship) return;

    clearShipPosition(
      draggedShipData.originalRow,
      draggedShipData.originalColumn,
      draggedShipData.length,
      draggedShipData.isVertical
    );

    if (player.gameboard.canPlaceShip(ship, row, column, draggedShipData.isVertical)) {
      player.gameboard.placeShip(ship, row, column, draggedShipData.isVertical);
    } else {
      player.gameboard.placeShip(
        ship,
        draggedShipData.originalRow,
        draggedShipData.originalColumn,
        draggedShipData.isVertical
      );
    }
  } catch (error) {
    console.error("Error moving ship:", error);
  }

  renderPlayerBoard();
}

function clearShipPosition(row, column, length, isVertical) {
  for (let i = 0; i < length; i++) {
    if (isVertical) {
      player.gameboard.board[row + i][column] = null;
    } else {
      player.gameboard.board[row][column + i] = null;
    }
  }
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

      if (cell === "hit") {
        cellElement.classList.add("hit");
      } else if (cell === "miss") {
        cellElement.classList.add("miss");
      }
      
      computerBoardElement.appendChild(cellElement);
    });
  });
}

function highlightCell(row, column) {
  const cells = document.querySelectorAll(".player-board .cell");
  const targetCell = Array.from(cells).find(
    cell => 
      parseInt(cell.dataset.row) === row && 
      parseInt(cell.dataset.column) === column
  );

  if (targetCell) {
    targetCell.classList.add("targeting");
    setTimeout(() => {
      targetCell.classList.remove("targeting");
    }, 500);
  }
}

export { renderPlayerBoard, renderComputerBoard, highlightCell };
