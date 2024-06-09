import React, { useState } from "react";
import { BOARD_ARR } from "./gameInfo";

const Player1GameView = ({ setPlayer1Turn, player2Cells, setPlayer2Cells }) => {
  // Function that handles onClick takes in the rowIndex and cellIndex
  // Loop through player 2 cells:
  // COnditional to check if player2Cells rowIndex and cellIndex equal to the rowIndex and cellIndex.
  // If it does hit remove it from the player2Cells and update its state and return true
  // If it doesn't return false

  function handleAttack(rowIndex, cellIndex) {
    let hit = false;
    for (const coordinates of player2Cells) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        console.log("Hit");
        hit = true;
        console.log(coordinates);
        const updatedCoordinates = player2Cells.filter(
          (location) => location !== coordinates
        );
        console.log(updatedCoordinates);
        setPlayer2Cells(updatedCoordinates);
        break;
      }
    }
    if (!hit) {
      console.log("Miss");
    }
  }

  return (
    <div>
      <h1>Player1GameView</h1>
      <div className="flex justify-center">
        <div className="w-[40vw] h-[25vw] grid grid-rows-10 grid-cols-10">
          {BOARD_ARR.map((row, rowIndex) => (
            <div className="contents" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className="border-2 border-black text-center text-transparent"
                  onClick={() => handleAttack(rowIndex, cellIndex)}
                  aria-disabled={true}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player1GameView;

// function handleAttack(rowIndex, cellIndex) {
//   const cellTarget = { row: rowIndex, cell: cellIndex };

//   const alreadyAttacked = cellsAttacked.some((coordinates) => {
//     if (!coordinates) return false;
//     return coordinates.row === rowIndex && coordinates.cell === cellIndex;
//   });

//   if (!alreadyAttacked) {
//     setCellsAttacked((prevCells) => [...prevCells, cellTarget]);
//   }
// }

// function handleAttackColoring(rowIndex, cellIndex) {
//   const isAttacked = cellsAttacked.some(
//     (coordinates) =>
//       coordinates.row === rowIndex && coordinates.cell === cellIndex
//   );

//   return isAttacked ? "blue" : "white";
// }
