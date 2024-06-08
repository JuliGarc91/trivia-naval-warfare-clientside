import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import GameSetup from "./components/GameFolder/GameSetup/GameSetup";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GameSetup />} />
      </Routes>
    </div>
  );
};

export default App;
