// import React from "react";
import { useState, useRef } from "react";
import ShipSelection from "./ShipSelection";
import Player2SetupBoard from "./Player2SetupBoard";

const Player2Setup = ({
  player2Ready,
  setPlayer2Ready,
  player2Cells,
  setPlayer2Cells,
  setDisplayGame,
  setPlayer1Turn,
}) => {
  const [shipSelected, setShipSelected] = useState("");
  const [axisShipDirection, setAxisShipDirection] = useState("");
  const carrierRef = useRef([]);
  const battleShipRef = useRef([]);
  const cruiserRef = useRef([]);
  const submarineRef = useRef([]);
  const destroyerRef = useRef([]);

  function handleClearBoard() {
    setPlayer2Cells([]);
    carrierRef.current = [];
    battleShipRef.current = [];
    cruiserRef.current = [];
    submarineRef.current = [];
    destroyerRef.current = [];
    setAxisShipDirection(null);
    setShipSelected("");
  }

  function handleSubmit() {
    setPlayer2Ready(true);
    setDisplayGame(true);
    setPlayer1Turn(true);
  }

  return (
    <div style={{ fontFamily: "Kode Mono, monospace", fontStyle: "normal" }}>
      <h1>Player2Setup</h1>
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
          className="bg-light-navy border-2 border-black p-2 mr-2"
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
        {player2Cells.length === 17 && (
          <button
            className="border-2 border-black p-2 mt-2 bg-green-400"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      <Player2SetupBoard
        player2Ready={player2Ready}
        setPlayer2Ready={setPlayer2Ready}
        player2Cells={player2Cells}
        setPlayer2Cells={setPlayer2Cells}
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

export default Player2Setup;
