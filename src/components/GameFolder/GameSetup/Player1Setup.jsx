import React, { useState, useRef } from "react";
import ShipSelection from "./ShipSelection";
import Player1SetupBoard from "./Player1SetupBoard";

const Player1Setup = ({
  player1Ready,
  setPlayer1Ready,
  player1Cells,
  setPlayer1Cells,
}) => {
  const [shipSelected, setShipSelected] = useState("");
  const [axisShipDirection, setAxisShipDirection] = useState("");
  const carrierRef = useRef([]);
  const battleShipRef = useRef([]);
  const cruiserRef = useRef([]);
  const submarineRef = useRef([]);
  const destroyerRef = useRef([]);

  return (
    <div>
      <h1>Player1Setup</h1>
      <ShipSelection
        shipSelected={shipSelected}
        setShipSelected={setShipSelected}
      />
      <div>
        <button
          className="border-2 border-black p-2 mr-2"
          onClick={() => setAxisShipDirection("horizontal")}
        >
          Horizontal
        </button>
        <button
          className="border-2 border-black p-2 mr-2"
          onClick={() => setAxisShipDirection("vertical")}
        >
          Vertical
        </button>
        <button className="border-2 border-black p-2">Clear Board</button>
      </div>
      <Player1SetupBoard
        player1Ready={player1Ready}
        setPlayer1Ready={setPlayer1Ready}
        player1Cells={player1Cells}
        setPlayer1Cells={setPlayer1Cells}
        shipSelected={shipSelected}
        // setShipSelected={setShipSelected}
        axisShipDirection={axisShipDirection}
        carrierRef={carrierRef}
        battleShipRef={battleShipRef}
        cruiserRef={cruiserRef}
        submarineRef={submarineRef}
        destroyerRef={destroyerRef}
      />
    </div>
  );
};

export default Player1Setup;
