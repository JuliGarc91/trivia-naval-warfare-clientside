import React, { useState } from "react";
import { BOARD_ARR } from "./gameInfo";

const Player1GameView = ({ setPlayer1Turn, player2Cells }) => {
  const [cellsAttacked, setCellsAttacked] = useState([]);

  function handleAttack(rowIndex, cellIndex) {
    const cellTarget = { row: rowIndex, cell: cellIndex };

    const alreadyAttacked = cellsAttacked.some((coordinates) => {
      if (!coordinates) return false;
      return coordinates.row === rowIndex && coordinates.cell === cellIndex;
    });

    if (!alreadyAttacked) {
      setCellsAttacked((prevCells) => [...prevCells, cellTarget]);
    }
  }

  function handleAttackColoring(rowIndex, cellIndex) {
    const isAttacked = cellsAttacked.some(
      (coordinates) =>
        coordinates.row === rowIndex && coordinates.cell === cellIndex
    );

    return isAttacked ? "blue" : "white";
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
                  style={{
                    backgroundColor: handleAttackColoring(rowIndex, cellIndex),
                  }}
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
