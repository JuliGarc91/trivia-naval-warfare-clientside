import React from "react";
import { BOARD_ARR } from "./gameInfo";

const Player1GameView = ({
  player1Turn,
  setPlayer1Turn,
  player1Cells,
  setPlayer1Cells,
  player2HitCoordinates,
  setPlayer2HitCoordinates,
  player2MissCoordinates,
  setPlayer2MissCoordinates,
  switchTurnWithDelay,
  setGameFinished,
  setWinner,
}) => {
  function handleAttack(rowIndex, cellIndex) {
    let hit = false;
    if (player1Cells.length > 0) {
      for (const coordinates of player1Cells) {
        if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
          hit = true;
          if (hit && player1Cells.length === 1) {
            console.log("Game Over Player 2 Wins");
            setGameFinished(true);
            setWinner("Player 2");
          }
          setPlayer2HitCoordinates((prev) => [...prev, coordinates]);
          const updatedCoordinates = player1Cells.filter(
            (location) =>
              location.row !== rowIndex || location.cell !== cellIndex
          );
          setPlayer1Cells(updatedCoordinates);
          switchTurnWithDelay();
          break;
        }
      }
      if (!hit) {
        console.log("Miss");
        setPlayer2MissCoordinates((prev) => [
          ...prev,
          { row: rowIndex, cell: cellIndex },
        ]);
        switchTurnWithDelay();
      }
    } else {
      console.log("Game Over");
    }
  }

  function handleCellColoring(rowIndex, cellIndex) {
    for (const coordinates of player2HitCoordinates) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        return "red";
      }
    }

    for (const coordinates of player2MissCoordinates) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        return "grey";
      }
    }
    return "white";
  }

  return (
    <div>
      <h1>Player2GameView</h1>
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
