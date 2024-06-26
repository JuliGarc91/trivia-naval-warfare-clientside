import React, { useState } from "react";
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
  player2ClickedCells,
  setPlayer2ClickedCells,
}) => {
  const [playerSelectedCell, setPlayerSelectedCell] = useState(false);

  function handleAttack(rowIndex, cellIndex) {
    let hit = false;

    if (
      player2ClickedCells.some(
        (coordinates) =>
          coordinates.row === rowIndex && coordinates.cell === cellIndex
      )
    ) {
      return;
    }

    setPlayerSelectedCell(true);

    setPlayer2ClickedCells((prev) => [
      ...prev,
      { row: rowIndex, cell: cellIndex },
    ]);

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
    setTimeout(() => {
      setPlayerSelectedCell(false);
    }, 1000);
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
    return "transparent";
  }

  return (
    <div className="bg-zinc-700/90 p-8 flex flex-col border-4 border-black">
      <h1 className="text-6xl text-center" style={{ fontFamily: "Kode Mono, monospace", fontStyle: "normal" }}>Player 2 Turn</h1>
      <br/>
      {/* if bg is in next line it's behind the board not sure why it's not able to color the cells */}
      <div className="flex justify-center">
        <div className="w-[40vw] h-[25vw] grid grid-rows-10 grid-cols-10 bg-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1717947883/battleship%20app/water.jpg')"}}>
          {BOARD_ARR.map((row, rowIndex) => (
            <div className="contents" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
// section in question ------------------------------------------------------------------------------------------------------------------------------------
                  // className="border-2 border-black text-center text-transparent bg-transparent"
                  // onClick={() => handleAttack(rowIndex, cellIndex)}

                  className="border-2 border-black text-center text-transparent"
                  onClick={() =>
                    !playerSelectedCell
                      ? handleAttack(rowIndex, cellIndex)
                      : null
                  }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
