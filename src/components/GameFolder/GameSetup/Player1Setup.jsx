import React, { useState } from "react";
import ShipSelection from "./ShipSelection";
import Player1SetupBoard from "./Player1SetupBoard";

const Player1Setup = ({ player1Ready, setPlayer1Ready }) => {
  const [shipSelected, setShipSelected] = useState("");

  return (
    <div>
      <h1>Player1Setup</h1>
      <ShipSelection
        shipSelected={shipSelected}
        setShipSelected={setShipSelected}
      />
      <div>
        <button className="border-2 border-black p-2 mr-2">Horizontal</button>
        <button className="border-2 border-black p-2 mr-2">Vertical</button>
        <button className="border-2 border-black p-2">Clear Board</button>
      </div>
      <Player1SetupBoard />
    </div>
  );
};

export default Player1Setup;
