import React, { useState } from "react";
import Player1Setup from "./Player1Setup";
import Player2Setup from "./Player2Setup";
import Player1GameView from "./Player1GameView";
import Player2GameView from "./Player2GameView";

const GameSetup = () => {
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);

  const [player1Cells, setPlayer1Cells] = useState([]);
  const [player2Cells, setPlayer2Cells] = useState([]);

  const [displayGame, setDisplayGame] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(null);

  return (
    <div>
      <h1>GameSetup</h1>
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
        (player1Turn ? (
          <Player1GameView setPlayer1Turn={setPlayer1Turn} />
        ) : (
          <Player2GameView setPlayer1Turn={setPlayer1Turn} />
        ))}
    </div>
  );
};

export default GameSetup;
