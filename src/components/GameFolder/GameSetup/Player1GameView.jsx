import React, { useState } from "react";
import { BOARD_ARR } from "./gameInfo";

const Player1GameView = ({ setPlayer1Turn, player2Cells, setPlayer2Cells }) => {
  const [hitCoordinates, setHitCoordinates] = useState([]);
  const [missCoordinates, setMissCoordinates] = useState([]);

  function handleAttack(rowIndex, cellIndex) {
    let hit = false;
    if (player2Cells.length > 0) {
      for (const coordinates of player2Cells) {
        if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
          hit = true;
          setHitCoordinates((prev) => [...prev, coordinates]);
          const updatedCoordinates = player2Cells.filter(
            (location) =>
              location.row !== rowIndex || location.cell !== cellIndex
          );
          setPlayer2Cells(updatedCoordinates);
          break;
        }
      }
      if (!hit) {
        console.log("Miss");
        setMissCoordinates((prev) => [
          ...prev,
          { row: rowIndex, cell: cellIndex },
        ]);
      }
    } else {
      console.log("Game Over");
    }
  }

  function handleCellColoring(rowIndex, cellIndex) {
    for (const coordinates of hitCoordinates) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        return "red";
      }
    }

    for (const coordinates of missCoordinates) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        return "grey";
      }
    }
    return "white";
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
                    backgroundColor: handleCellColoring(rowIndex, cellIndex),
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
