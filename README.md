# battleship

Live solution:

https://allan2609.github.io/battleship/

This is an assignment from The Odin Project.

The aim of the exercise is to practice test driven development by implementing the classic game Battleship.

I started the assignment by creating the initial classes Ship, Gameboard, and Player. For each class, I first wrote a test, then made it pass.

Ship.js:

Represents individual ships with core tracking and damage mechanics.

Ships are objects that include their length, the number of times they’ve been hit and whether or not they've been sunk.

Ships have a hit() function that increases the number of hits on a ship. isSunk() is a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.

length: Total ship size
hitsTaken: Number of times the ship has been hit
sunk: Boolean indicating ship's destruction status

Gameboard.js:

- Manages 10x10 grid board state
- Supports ship placement in multiple orientations
- Tracks and validates attacks
- Determines game progress

This module manages board logic, ship placement, and attack tracking. Gameboards place ships at specific coordinates by calling the ship factory or class.

Gameboards have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the hit function to the correct ship, or records the coordinates of the missed shot.

Gameboards keep track of missed attacks so they can display them properly. Gameboards can report whether or not all of their ships have been sunk.

class Gameboard {
  placeShip(ship, row, column, isVertical) {
    // Validates and places ship on board
    // Checks for out-of-bounds and overlapping ships
  }

  receiveAttack(row, column) {
    // Handles attack on a specific board position
    // Returns "hit" or "miss" 
    // Tracks attacked positions
  }

  randomizeShips(ships) {
    // Automatically places ships randomly
    // Ensures no ship overlaps
  }
}

Player.js:

There are two types of players: "player" and "computer". Each player has its own gameboard.

GameController.js:

Manages overall game flow and computer AI logic. Key responsibilities include turn management, game state tracking, and computer move strategy. It's also responsible for random targeting and hunt mode, which is activated once computer hits a player's ship. In hunt mode, the computer attempts to sink detected ships by systematically exploring adjacent cells.

computerMove() {
  // Implements computer's attack logic
  // Switches between targeting strategies
}

getComputerTarget() {
  // Selects next attack position
  // Considers current game state
}

GameboardRenderer.js:

Converts game state to visual representation.

Rendering responsibilities:

- Create board DOM elements
- Display ship positions
- Show attack results (hit/miss)
- Manage board interactivity

renderPlayerBoard() {
  // Updates player board display
  // Renders ships and attack states
}

renderComputerBoard() {
  // Updates computer board visualization
  // Shows attack outcomes
}

index.js:

Drives the game using event listeners to interact with objects.

Core Responsibilities:

- Game setup
- Event listener management
- Player and computer initialization

Key Interactions:

- Ship placement
- Attack event handling
- Game reset functionality

Game Mechanics Overview:

Ship Placement:

- Manual drag-and-drop
- Randomize option
- Orientation selection (double click to rotate)


Gameplay:

- Player attacks computer board
- Computer counterattacks
- Turn-based interaction
- Randomize button also acts as a reset button


Win Condition:

- Sink all opponent's ships
- First to complete wins
