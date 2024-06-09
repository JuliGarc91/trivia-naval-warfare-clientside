import React, { useState } from "react";
import { BOARD_ARR } from "./gameInfo";

const Player1GameView = ({
  player1Turn,
  setPlayer1Turn,
  player2Cells,
  setPlayer2Cells,
  player1HitCoordinates,
  setPlayer1HitCoordinates,
  player1MissCoordinates,
  setPlayer1MissCoordinates,
  switchTurnWithDelay,
  setGameFinished,
  setWinner,
  player1ClickedCells,
  setPlayer1ClickedCells,
}) => {
  const [playerSelectedCell, setPlayerSelectedCell] = useState(false);

  function handleAttack(rowIndex, cellIndex) {
    if (
      player1ClickedCells.some(
        (coordinates) =>
          coordinates.row === rowIndex && coordinates.cell === cellIndex
      )
    ) {
      return;
    }

    setPlayerSelectedCell(true);

    let hit = false;
    setPlayer1ClickedCells((prevCells) => [
      ...prevCells,
      { row: rowIndex, cell: cellIndex },
    ]);

    if (player2Cells.length > 0) {
      for (const coordinates of player2Cells) {
        if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
          hit = true;
          if (hit && player2Cells.length === 1) {
            console.log("Game Over Player 1 Wins");
            setGameFinished(true);
            setWinner("Player 1");
          }
          setPlayer1HitCoordinates((prev) => [...prev, coordinates]);
          const updatedCoordinates = player2Cells.filter(
            (location) =>
              location.row !== rowIndex || location.cell !== cellIndex
          );
          setPlayer2Cells(updatedCoordinates);
          switchTurnWithDelay();
          break;
        }
      }
      if (!hit) {
        console.log("Miss");
        setPlayer1MissCoordinates((prev) => [
          ...prev,
          { row: rowIndex, cell: cellIndex },
        ]);
        switchTurnWithDelay();
      }
    } else {
      console.log("Game Over");
    }

    setTimeout(() => {
      setPlayerSelectedCell(false);
    }, 1000);
  }

  function handleCellColoring(rowIndex, cellIndex) {
    for (const coordinates of player1HitCoordinates) {
      if (coordinates.row === rowIndex && coordinates.cell === cellIndex) {
        return "red";
      }
    }

    for (const coordinates of player1MissCoordinates) {
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
                  onClick={() =>
                    !playerSelectedCell
                      ? handleAttack(rowIndex, cellIndex)
                      : null
                  }
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
