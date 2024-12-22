import { renderPlayerBoard, renderComputerBoard } from "./GameboardRenderer";
import Ship from "./Ship";

class GameController {
  constructor(player, computer) {
    this.player = player;
    this.computer = computer;
    this.currentTurn = "player";
    this.lastHit = null;
    this.targetQueue = [];
    this.direction = null;
    this.previousHit = null;
    this.isGameOver = false;
  }

  handleAttack(row, column) {
    if (this.isGameOver || this.currentTurn !== "player") return;

    const attackResult = this.computer.gameboard.receiveAttack(row, column);
    renderComputerBoard();

    console.log("Player's attack result:", attackResult);

    if (attackResult.result === "hit") {
      console.log("Player hit!");
    } else {
      console.log("Player missed!");
    }

    this.checkGameOver();

    if (!this.isGameOver) {
      this.switchTurn();
    }
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === "player" ? "computer" : "player";
    console.log(`Switching turn. Current turn: ${this.currentTurn}`);

    if (this.currentTurn === "computer") {
      this.computerMove();
    }
  }

  computerMove() {
    if (this.isGameOver || this.currentTurn !== "computer") return;
  
    console.log("Computer's turn. Target Queue:", this.targetQueue);
  
    let target;
    
    if (this.direction && this.lastHit) {
      const alignedTargets = this.targetQueue.filter(cell => 
        this.direction === "horizontal" ? 
          cell.row === this.lastHit.row : 
          cell.column === this.lastHit.column
      );
      
      if (alignedTargets.length > 0) {
        target = alignedTargets[0];
        this.targetQueue = this.targetQueue.filter(cell => 
          !(cell.row === target.row && cell.column === target.column)
        );
        console.log("Attacking aligned target:", target);
      }
    }
    
    if (!target && this.targetQueue.length > 0) {
      target = this.targetQueue.shift();
      console.log("Attacking from target queue:", target);
    }
    
    if (!target) {
      do {
        const row = Math.floor(Math.random() * this.player.gameboard.size);
        const column = Math.floor(Math.random() * this.player.gameboard.size);
        target = { row, column };
      } while (
        this.player.gameboard.attackedPositions.some(
          pos => pos.row === target.row && pos.column === target.column
        )
      );
      console.log("Random attack at:", target);
    }
    
    const attackResult = this.player.gameboard.receiveAttack(target.row, target.column);
    console.log("Attack result:", attackResult);
    
    if (attackResult.result === "hit") {
      if (this.lastHit && !this.direction) {
        this.direction = this.lastHit.row === target.row ? "horizontal" : "vertical";
        console.log("New direction determined:", this.direction);
      }
      
      this.previousHit = this.lastHit;
      this.lastHit = target;
      
      if (this.direction) {
        this.addDirectionalTargets(target);
      } else {
        this.addAdjacentTargets(target);
      }
      
      if (this.checkShipSunk(target)) {
        console.log("Ship sunk! Resetting attack pattern.");
        this.resetAttackPattern();
      }
    }
    
    renderPlayerBoard();
    
    this.checkGameOver();
    
    if (!this.isGameOver) {
      this.currentTurn = "player";
      console.log("Computer's turn ended. Current turn:", this.currentTurn);
    }
  }

  addDirectionalTargets({ row, column }) {
    let potentialTargets = [];
    
    if (this.direction === "horizontal") {
      potentialTargets = [
        { row, column: column - 1 },
        { row, column: column + 1 }
      ];
    } else if (this.direction === "vertical") {
      potentialTargets = [
        { row: row - 1, column },
        { row: row + 1, column }
      ];
    }
    
    const validTargets = potentialTargets.filter(target => {
      const isWithinBounds =
        target.row >= 0 &&
        target.row < this.player.gameboard.size &&
        target.column >= 0 &&
        target.column < this.player.gameboard.size;
        
      const isNotAttacked = !this.player.gameboard.attackedPositions.some(
        pos => pos.row === target.row && pos.column === target.column
      );
      
      return isWithinBounds && isNotAttacked;
    });
    
    this.targetQueue.push(...validTargets);
  }

  getDirection(firstHit, secondHit) {
    if (firstHit.row === secondHit.row) return "horizontal";
    if (firstHit.column === secondHit.column) return "vertical";
    return null;
  }

  isAligned(cell, direction) {
    if (direction === "horizontal") return cell.row === this.lastHit.row;
    if (direction === "vertical") return cell.column === this.lastHit.column;
    return true;
  }

  addAdjacentTargets({ row, column }) {
    const potentialTargets = [
      { row: row - 1, column },
      { row: row + 1, column },
      { row, column: column - 1 },
      { row, column: column + 1 },
    ];

    const filteredTargets = potentialTargets.filter(target => {
      const isWithinBounds =
        target.row >= 0 &&
        target.row < this.player.gameboard.size &&
        target.column >= 0 &&
        target.column < this.player.gameboard.size;

      const isAlreadyAttacked = this.player.gameboard.attackedPositions.some(
        pos => pos.row === target.row && pos.column === target.column
      );

      if (!isWithinBounds || isAlreadyAttacked) return false;

      if (this.direction === "horizontal") {
        return target.row === this.lastHit.row;
      } else if (this.direction === "vertical") {
        return target.column === this.lastHit.column;
      }

      return true;
    });

    this.targetQueue.push(...filteredTargets);
  }

  checkShipSunk(target) {
    const ship = this.player.gameboard.getShipAt(target.row, target.column);
    console.log("Ship at target:", ship);

    if (ship && ship instanceof Ship) {
      return ship.isSunk();
    }

    return false;
  }

  resetAttackPattern() {
    this.direction = null;
    this.previousHit = null;
    this.targetQueue = [];
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
