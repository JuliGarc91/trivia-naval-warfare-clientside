import React, { useState } from "react";
import Player1Setup from "./Player1Setup";
import Player2Setup from "./Player2Setup";

const GameSetup = () => {
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);
  return (
    <div>
      <h1>GameSetup</h1>
      <Player1Setup player1Ready={player1Ready} />
      {player1Ready && <Player2Setup player2Ready={player2Ready} />}
      {player1Ready && player2Ready}
    </div>
  );
};

export default GameSetup;
