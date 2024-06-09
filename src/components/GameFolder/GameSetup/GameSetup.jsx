import React, { useState } from "react";
import Player1Setup from "./Player1Setup";
import Player2Setup from "./Player2Setup";
import Player1GameView from "./Player1GameView";
import Player2GameView from "./Player2GameView";
import GameOver from "./GameOver";

const GameSetup = () => {
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);

  const [player1Cells, setPlayer1Cells] = useState([]);
  const [player2Cells, setPlayer2Cells] = useState([]);

  const [displayGame, setDisplayGame] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(null);

  const [player1HitCoordinates, setPlayer1HitCoordinates] = useState([]);
  const [player1MissCoordinates, setPlayer1MissCoordinates] = useState([]);

  const [player2HitCoordinates, setPlayer2HitCoordinates] = useState([]);
  const [player2MissCoordinates, setPlayer2MissCoordinates] = useState([]);

  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState("");

  const [player1ClickedCells, setPlayer1ClickedCells] = useState([]);
  const [player2ClickedCells, setPlayer2ClickedCells] = useState([]);

  function switchTurnWithDelay() {
    setTimeout(() => {
      setPlayer1Turn(!player1Turn);
    }, 1000);
  }

  return (
    <>
    <br/>
    <div className="h-screen bg-cover flex flex-row justify-center items-center text-white" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1717950846/battleship%20app/controllers.jpg')" }}>
      {!player1Ready && !displayGame && (
        <Player1Setup
          player1Ready={player1Ready}
          setPlayer1Ready={setPlayer1Ready}
          player1Cells={player1Cells}
          setPlayer1Cells={setPlayer1Cells}
        />
      )}

      {player1Ready && !player2Ready && !displayGame && (
        <Player2Setup
          player2Ready={player2Ready}
          setPlayer2Ready={setPlayer2Ready}
          player2Cells={player2Cells}
          setPlayer2Cells={setPlayer2Cells}
          setDisplayGame={setDisplayGame}
          setPlayer1Turn={setPlayer1Turn}
        />
      )}
      {displayGame &&
        !gameFinished &&
        (player1Turn ? (
          <Player1GameView
            player1Turn={player1Turn}
            setPlayer1Turn={setPlayer1Turn}
            player2Cells={player2Cells}
            setPlayer2Cells={setPlayer2Cells}
            player1HitCoordinates={player1HitCoordinates}
            setPlayer1HitCoordinates={setPlayer1HitCoordinates}
            player1MissCoordinates={player1MissCoordinates}
            setPlayer1MissCoordinates={setPlayer1MissCoordinates}
            switchTurnWithDelay={switchTurnWithDelay}
            setGameFinished={setGameFinished}
            setWinner={setWinner}
            player1ClickedCells={player1ClickedCells}
            setPlayer1ClickedCells={setPlayer1ClickedCells}
          />
        ) : (
          <Player2GameView
            player1Cells={player1Cells}
            setPlayer1Cells={setPlayer1Cells}
            player2HitCoordinates={player2HitCoordinates}
            setPlayer2HitCoordinates={setPlayer2HitCoordinates}
            player2MissCoordinates={player2MissCoordinates}
            setPlayer2MissCoordinates={setPlayer2MissCoordinates}
            switchTurnWithDelay={switchTurnWithDelay}
            setGameFinished={setGameFinished}
            setWinner={setWinner}
            player2ClickedCells={player2ClickedCells}
            setPlayer2ClickedCells={setPlayer2ClickedCells}
          />
        ))}
      {gameFinished && <GameOver winner={winner} />}
    </div>
    </>
  );
};

export default GameSetup;
