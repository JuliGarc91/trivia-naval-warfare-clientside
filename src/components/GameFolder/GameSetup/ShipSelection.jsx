import React, { useState } from "react";

const ShipSelection = ({ shipSelected, setShipSelected }) => {
  function handleShipSelection(e) {
    setShipSelected(e.target.value);
  }
  return (
    <div className="flex justify-center">
    <div
      className="w-72 my-5 bg-white"
      style={{ fontFamily: "Kode Mono, monospace", fontStyle: "normal" }}
    >
      <div className="border-4 border-black">
        <h1 className="border-1 border-black text-center border-b-4 text-black">Fleet</h1>
        <fieldset className=" border-black">
          <legend className="text-center text-black">Select A Ship:</legend>
          <div className="bg-red-500 p-1">
            <input
              type="radio"
              id="carrier"
              name="ship"
              value="carrier"
              onChange={handleShipSelection}
            />
            <label htmlFor="carrier" className="bg-navy/40 p-1 ml-1 rounded-md">Carrier ⬛ ⬛ ⬛ ⬛ ⬛</label>
          </div>
          <div className="bg-blue-500 p-1">
            <input
              type="radio"
              id="battleship"
              name="ship"
              value="battleship"
              onChange={handleShipSelection}
            />
            <label htmlFor="battleship" className="bg-navy/40 p-1 ml-1 rounded-md">Battleship ⬛ ⬛ ⬛ ⬛ </label>
          </div>
          <div className="bg-green-700 p-1">
            <input
              type="radio"
              id="cruiser"
              name="ship"
              value="cruiser"
              onChange={handleShipSelection}
            />
            <label htmlFor="cruiser" className="bg-navy/40 p-1 ml-1 rounded-md">Cruiser ⬛ ⬛ ⬛ </label>
          </div>
          <div className="bg-purple-700 p-1">
            <input
              type="radio"
              id="submarine"
              name="ship"
              value="submarine"
              onChange={handleShipSelection}
            />
            <label htmlFor="submarine" className="bg-navy/40 p-1 ml-1 rounded-md">Submarine ⬛ ⬛ ⬛ </label>
          </div>
          <div className="bg-yellow-300 p-1">
            <input
              type="radio"
              id="destroyer"
              name="ship"
              value="destroyer"
              onChange={handleShipSelection}
            />
            <label htmlFor="destroyer" className="bg-navy/40 p-1 ml-1 rounded-md">Destroyer ⬛ ⬛ </label>
          </div>
        </fieldset>
      </div>
    </div>
    </div>
  );
};

export default ShipSelection;
