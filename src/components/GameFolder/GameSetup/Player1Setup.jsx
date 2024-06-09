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

  function handleClearBoard() {
    setPlayer1Cells([]);
    carrierRef.current = [];
    battleShipRef.current = [];
    cruiserRef.current = [];
    submarineRef.current = [];
    destroyerRef.current = [];
    setAxisShipDirection(null);
    setShipSelected("");
  }

  return (
    <div className="bg-wine/90 border-black border-4 p-8" style={{ fontFamily: "Kode Mono, monospace", fontStyle: "normal" }}>
      <h1>Player1Setup</h1>
      <ShipSelection
        shipSelected={shipSelected}
        setShipSelected={setShipSelected}
      />
      <div>
        <button
          className="bg-light-navy border-2 border-black p-2 mr-2"
          onClick={() => setAxisShipDirection("horizontal")}
          style={
            axisShipDirection === "horizontal"
              ? { backgroundColor: "#d3d3d3", boxShadow: "5px 5px 5px black" }
              : null
          }
        >
          Horizontal
        </button>
        <button
          className="border-2 bg-light-navy border-black p-2 mr-2"
          onClick={() => setAxisShipDirection("vertical")}
          style={
            axisShipDirection === "vertical"
              ? { backgroundColor: "#d3d3d3", boxShadow: "5px 5px 5px black" }
              : null
          }
        >
          Vertical
        </button>
        <button
          className="border-2 border-black p-2 bg-red-300"
          onClick={handleClearBoard}
        >
          Clear Board
        </button>
      </div>
      <div>
        {player1Cells.length === 17 && (
          <button
            className="border-2 border-black p-2 mt-2 bg-green-400"
            onClick={() => setPlayer1Ready(true)}
          >
            Submit
          </button>
        )}
      </div>
      <Player1SetupBoard
        player1Ready={player1Ready}
        setPlayer1Ready={setPlayer1Ready}
        player1Cells={player1Cells}
        setPlayer1Cells={setPlayer1Cells}
        shipSelected={shipSelected}
        setShipSelected={setShipSelected}
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
