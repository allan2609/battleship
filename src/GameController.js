import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";

class GameController {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.currentTurn = "player";
    this.isGameOver = false;
    this.computerAI = {
      huntMode: false,
      firstHit: null,
      lastHit: null,
      direction: null,
      triedDirections: new Set()
    };
  }

  handleAttack(row, column) {
    if (this.isGameOver || this.currentTurn !== "player") return;

    const attackResult = this.computer.gameboard.receiveAttack(row, column);
    renderComputerBoard();
    
    this.checkGameOver();

    if (!this.isGameOver) {
      this.switchTurn();
    }
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
    
    if (this.currentTurn === "computer") {
      this.computerMove();
    }
  }

  computerMove() {
    if (this.isGameOver || this.currentTurn !== "computer") return;

    const target = this.getComputerTarget();
    if (!target) {
      this.isGameOver = true;
      return;
    }

    const attackResult = this.player.gameboard.receiveAttack(target.row, target.column);
    this.updateComputerAI(attackResult);
    
    renderPlayerBoard();
    
    this.checkGameOver();

    if (!this.isGameOver) {
      this.currentTurn = "player";
    }
  }

  getComputerTarget() {
    return this.computerAI.huntMode ? 
      this.getHuntModeTarget() : 
      this.getRandomTarget();
  }

  getHuntModeTarget() {
    const { firstHit, lastHit, direction, triedDirections } = this.computerAI;
    const currentHit = lastHit || firstHit;
    
    if (direction) {
      const target = this.getNextTargetInDirection(currentHit, direction);
      if (target && this.isValidTarget(target)) {
        return target;
      }
      const oppositeTarget = this.getNextTargetInDirection(firstHit, this.getOppositeDirection(direction));
      if (oppositeTarget && this.isValidTarget(oppositeTarget)) {
        return oppositeTarget;
      }
    }

    const directions = ["north", "south", "east", "west"];
    for (const dir of directions) {
      if (!triedDirections.has(dir)) {
        const target = this.getNextTargetInDirection(firstHit, dir);
        if (target && this.isValidTarget(target)) {
          triedDirections.add(dir);
          return target;
        }
      }
    }

    this.resetComputerAI();
    return this.getRandomTarget();
  }

  getNextTargetInDirection(position, direction) {
    const directionMap = {
      north: { row: -1, column: 0 },
      south: { row: 1, column: 0 },
      east: { row: 0, column: 1 },
      west: { row: 0, column: -1 }
    };

    const offset = directionMap[direction];
    return {
      row: position.row + offset.row,
      column: position.column + offset.column
    };
  }

  getOppositeDirection(direction) {
    const opposites = {
      north: "south",
      south: "north",
      east: "west",
      west: "east"
    };
    return opposites[direction];
  }

  getRandomTarget() {
    const unattackedCells = [];
    for (let row = 0; row < this.player.gameboard.size; row++) {
      for (let col = 0; col < this.player.gameboard.size; col++) {
        if (this.isValidTarget({ row, column: col })) {
          unattackedCells.push({ row, column: col });
        }
      }
    }
    
    return unattackedCells.length > 0 ? 
      unattackedCells[Math.floor(Math.random() * unattackedCells.length)] : 
      null;
  }

  isValidTarget(target) {
    const { row, column } = target;
    const isWithinBounds =
      row >= 0 &&
      row < this.player.gameboard.size &&
      column >= 0 &&
      column < this.player.gameboard.size;

    const isNotAttacked = !this.player.gameboard.attackedPositions.some(
      pos => pos.row === row && pos.column === column
    );

    return isWithinBounds && isNotAttacked;
  }

  updateComputerAI(attackResult) {
    const { result, row, column } = attackResult;
    
    if (result === "hit") {
      if (!this.computerAI.huntMode) {
        this.computerAI.huntMode = true;
        this.computerAI.firstHit = { row, column };
        this.computerAI.lastHit = { row, column };
      } else if (!this.computerAI.direction) {
        const isVertical = this.computerAI.firstHit.row !== row;
        this.computerAI.direction = isVertical ? 
          (row > this.computerAI.firstHit.row ? "south" : "north") :
          (column > this.computerAI.firstHit.column ? "east" : "west");
        this.computerAI.lastHit = { row, column };
      } else {
        this.computerAI.lastHit = { row, column };
      }

      const hitPositions = this.findConnectedHits(row, column);
      if (this.isConnectedHitsFormCompleteSink(hitPositions)) {
        this.resetComputerAI();
      }
    }
  }

  findConnectedHits(startRow, startCol) {
    const connected = new Set();
    const toCheck = [{row: startRow, column: startCol}];
    
    while (toCheck.length > 0) {
      const current = toCheck.pop();
      const key = `${current.row},${current.column}`;
      
      if (connected.has(key)) continue;
      
      if (this.player.gameboard.board[current.row][current.column] === "hit") {
        connected.add(key);
        
        const adjacent = [
          {row: current.row - 1, column: current.column},
          {row: current.row + 1, column: current.column},
          {row: current.row, column: current.column - 1},
          {row: current.row, column: current.column + 1}
        ];
        
        for (const pos of adjacent) {
          if (this.isValidBoardPosition(pos.row, pos.column)) {
            toCheck.push(pos);
          }
        }
      }
    }
    
    return Array.from(connected).map(key => {
      const [row, col] = key.split(",").map(Number);
      return {row, column: col};
    });
  }

  isConnectedHitsFormCompleteSink(hitPositions) {
    for (const pos of hitPositions) {
      const adjacent = [
        {row: pos.row - 1, column: pos.column},
        {row: pos.row + 1, column: pos.column},
        {row: pos.row, column: pos.column - 1},
        {row: pos.row, column: pos.column + 1}
      ];
      
      for (const adjPos of adjacent) {
        if (this.isValidBoardPosition(adjPos.row, adjPos.column)) {
          const cell = this.player.gameboard.board[adjPos.row][adjPos.column];
          if (cell !== null && cell !== "hit" && cell !== "miss") {
            return false;
          }
        }
      }
    }
    
    return true;
  }

  isValidBoardPosition(row, column) {
    return row >= 0 && 
           row < this.player.gameboard.size && 
           column >= 0 && 
           column < this.player.gameboard.size;
  }

  resetComputerAI() {
    this.computerAI = {
      huntMode: false,
      firstHit: null,
      lastHit: null,
      direction: null,
      triedDirections: new Set()
    };
  }

  checkGameOver() {
    if (this.player.gameboard.areAllShipsSunk()) {
      alert("Computer wins!");
      this.isGameOver = true;
    } else if (this.computer.gameboard.areAllShipsSunk()) {
      alert("Player wins!");
      this.isGameOver = true;
    }
  }
}

export default GameController;
