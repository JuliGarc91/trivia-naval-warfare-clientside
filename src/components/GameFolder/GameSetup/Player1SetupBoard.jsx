import React from "react";
import { BOARD_ARR, shipColors } from "./gameInfo";

const Player1SetupBoard = ({
  player1Ready,
  setPlayer1Ready,
  player1Cells,
  setPlayer1Cells,
  shipSelected,
  setShipSelected,
  axisShipDirection,
  carrierRef,
  battleShipRef,
  cruiserRef,
  submarineRef,
  destroyerRef,
}) => {
  function handleShipSelection(rowIndex, cellIndex) {
    let newSelectedCells = [];

    // Checks which ship user selected brought from props
    if (shipSelected === "carrier") {
      // First we gotta check if the ship already has a state which holds the coordinates. If it does we want to overwrite it. Since the user selected it again for the reason of wanting to change the placement
      if (carrierRef.current.length > 0) {
        const carrierHead = carrierRef.current[0];
        const foundCarrierIndex = player1Cells.findIndex(
          (shipLocation) =>
            shipLocation.row === carrierHead.row &&
            shipLocation.cell === carrierHead.cell
        );
        if (foundCarrierIndex !== -1) {
          const removeTheseCells = player1Cells.slice(
            foundCarrierIndex,
            foundCarrierIndex + 5
          );

          const updatedCells = player1Cells.filter(
            (cell) =>
              !removeTheseCells.some(
                (removeCell) =>
                  removeCell.row === cell.row && removeCell.cell === cell.cell
              )
          );
          setPlayer1Cells(updatedCells);
        }
      }
      // Here is where we place the ship. Depending on the ship size and axisShipDirection it is only allowed to go to certain indexes.
      if (axisShipDirection === "horizontal" && cellIndex <= 5) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex, cell: cellIndex + 1 },
          { row: rowIndex, cell: cellIndex + 2 },
          { row: rowIndex, cell: cellIndex + 3 },
          { row: rowIndex, cell: cellIndex + 4 },
        ];
        carrierRef.current = newSelectedCells;
      } else if (axisShipDirection === "vertical" && rowIndex <= 5) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex + 1, cell: cellIndex },
          { row: rowIndex + 2, cell: cellIndex },
          { row: rowIndex + 3, cell: cellIndex },
          { row: rowIndex + 4, cell: cellIndex },
        ];
        carrierRef.current = newSelectedCells;
      }
    }
    // Same thing for other ships
    else if (shipSelected === "battleship") {
      if (battleShipRef.current.length > 0) {
        const battleShipHead = battleShipRef.current[0];
        const foundBattleShipIndex = player1Cells.findIndex(
          (shipLocation) =>
            shipLocation.row === battleShipHead.row &&
            shipLocation.cell === battleShipHead.cell
        );
        if (foundBattleShipIndex !== -1) {
          const removeTheseCells = player1Cells.slice(
            foundBattleShipIndex,
            foundBattleShipIndex + 4
          );

          const updatedCells = player1Cells.filter(
            (cell) =>
              !removeTheseCells.some(
                (removeCell) =>
                  removeCell.row === cell.row && removeCell.cell === cell.cell
              )
          );
          setPlayer1Cells(updatedCells);
        }
      }

      if (axisShipDirection === "horizontal" && cellIndex <= 6) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex, cell: cellIndex + 1 },
          { row: rowIndex, cell: cellIndex + 2 },
          { row: rowIndex, cell: cellIndex + 3 },
        ];
        battleShipRef.current = newSelectedCells;
      } else if (axisShipDirection === "vertical" && rowIndex <= 6) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex + 1, cell: cellIndex },
          { row: rowIndex + 2, cell: cellIndex },
          { row: rowIndex + 3, cell: cellIndex },
        ];
        battleShipRef.current = newSelectedCells;
      }
    } else if (shipSelected === "cruiser") {
      if (cruiserRef.current.length > 0) {
        const cruiserHead = cruiserRef.current[0];
        const foundCruiserIndex = player1Cells.findIndex(
          (shipLocation) =>
            shipLocation.row === cruiserHead.row &&
            shipLocation.cell === cruiserHead.cell
        );
        if (foundCruiserIndex !== -1) {
          const removeTheseCells = player1Cells.slice(
            foundCruiserIndex,
            foundCruiserIndex + 3
          );

          const updatedCells = player1Cells.filter(
            (cell) =>
              !removeTheseCells.some(
                (removeCell) =>
                  removeCell.row === cell.row && removeCell.cell === cell.cell
              )
          );
          setPlayer1Cells(updatedCells);
        }
      }

      if (axisShipDirection === "horizontal" && cellIndex <= 7) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex, cell: cellIndex + 1 },
          { row: rowIndex, cell: cellIndex + 2 },
        ];
        cruiserRef.current = newSelectedCells;
      } else if (axisShipDirection === "vertical" && rowIndex <= 7) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex + 1, cell: cellIndex },
          { row: rowIndex + 2, cell: cellIndex },
        ];
        cruiserRef.current = newSelectedCells;
      }
    } else if (shipSelected === "submarine") {
      if (submarineRef.current.length > 0) {
        const submarineHead = submarineRef.current[0];
        const foundSubmarineIndex = player1Cells.findIndex(
          (shipLocation) =>
            shipLocation.row === submarineHead.row &&
            shipLocation.cell === submarineHead.cell
        );
        if (foundSubmarineIndex !== -1) {
          const removeTheseCells = player1Cells.slice(
            foundSubmarineIndex,
            foundSubmarineIndex + 3
          );

          const updatedCells = player1Cells.filter(
            (cell) =>
              !removeTheseCells.some(
                (removeCell) =>
                  removeCell.row === cell.row && removeCell.cell === cell.cell
              )
          );
          setPlayer1Cells(updatedCells);
        }
      }
      if (axisShipDirection === "horizontal" && cellIndex <= 7) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex, cell: cellIndex + 1 },
          { row: rowIndex, cell: cellIndex + 2 },
        ];
        submarineRef.current = newSelectedCells;
      } else if (axisShipDirection === "vertical" && rowIndex <= 7) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex + 1, cell: cellIndex },
          { row: rowIndex + 2, cell: cellIndex },
        ];
        submarineRef.current = newSelectedCells;
      }
    } else if (shipSelected === "destroyer") {
      if (destroyerRef.current.length > 0) {
        const destroyerHead = destroyerRef.current[0];
        const foundDestroyerIndex = player1Cells.findIndex(
          (shipLocation) =>
            shipLocation.row === destroyerHead.row &&
            shipLocation.cell === destroyerHead.cell
        );
        if (foundDestroyerIndex !== -1) {
          const removeTheseCells = player1Cells.slice(
            foundDestroyerIndex,
            foundDestroyerIndex + 5
          );

          const updatedCells = player1Cells.filter(
            (cell) =>
              !removeTheseCells.some(
                (removeCell) =>
                  removeCell.row === cell.row && removeCell.cell === cell.cell
              )
          );
          setPlayer1Cells(updatedCells);
        }
      }

      if (axisShipDirection === "horizontal" && cellIndex <= 8) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex, cell: cellIndex + 1 },
        ];
        destroyerRef.current = newSelectedCells;
      } else if (axisShipDirection === "vertical" && rowIndex <= 8) {
        newSelectedCells = [
          { row: rowIndex, cell: cellIndex },
          { row: rowIndex + 1, cell: cellIndex },
        ];
        destroyerRef.current = newSelectedCells;
      }
    }
    setPlayer1Cells((prevCells) => [...prevCells, ...newSelectedCells]);
  }

  function handleShipColoring(rowIndex, cellIndex) {
    const shipTypes = {
      carrier: carrierRef.current,
      battleShip: battleShipRef.current,
      cruiser: cruiserRef.current,
      submarine: submarineRef.current,
      destroyer: destroyerRef.current,
    };

    // Used for handling which cells get colored in
    for (const [type, cells] of Object.entries(shipTypes)) {
      for (const { row, cell } of cells) {
        if (row === rowIndex && cell === cellIndex) {
          return type;
        }
      }
    }
    return false;
  }

  return (
    <div className="mb-5">
      <div className="m-auto">
        {/* styling for board */}
        <div className="w-[40vw] h-[25vw] grid grid-rows-10 grid-cols-10 bg-cover bg-blue-600" style={{ backgroundImage: "url('https://res.cloudinary.com/dwygxzqku/image/upload/v1717947883/battleship%20app/water.jpg')"}}>
          {BOARD_ARR.map((row, rowIndex) => (
            <div className="contents" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  onClick={() => handleShipSelection(rowIndex, cellIndex)}
                  style={{
                    backgroundColor:
                      shipColors[handleShipColoring(rowIndex, cellIndex)],
                  }}
                  className="border-2 border-black text-center text-transparent"
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

export default Player1SetupBoard;
