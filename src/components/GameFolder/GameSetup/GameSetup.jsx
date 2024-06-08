import React, { useState } from "react";
import Player1Setup from "./Player1Setup";
import Player2Setup from "./Player2Setup";
import Player1GameView from "./Player1GameView";

const GameSetup = () => {
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);

  const [player1Cells, setPlayer1Cells] = useState([]);
  const [player2Cells, setPlayer2Cells] = useState([]);

  return (
    <div>
      <h1>GameSetup</h1>
      <Player1Setup
        player1Ready={player1Ready}
        setPlayer1Ready={setPlayer1Ready}
        player1Cells={player1Cells}
        setPlayer1Cells={setPlayer1Cells}
      />
      {player1Ready && <Player2Setup player2Ready={player2Ready} />}
      {/* {(player1Ready && player2Ready)(<Player1GameView />)} */}
    </div>
  );
};

export default GameSetup;
