import React from "react";
import { BOARD_ARR } from "./gameInfo";

const Player2GameView = ({ setPlayer1Turn, player1Cells }) => {
  function handleAttack() {
    setPlayer1Turn(true);
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

export default Player2GameView;
