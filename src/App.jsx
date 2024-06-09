import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import About_Mission from "./components/About_Mission";
import HowTo from "./components/Howto";
import Nav from "./components/Nav"
import GameSetup from "./components/GameFolder/GameSetup/GameSetup";
import Trivia from "./components/Trivia";
import TrainingGrounds from "./components/TrainingGrounds";

const App = () => {

  const NavBarWrapper = () => {
    const location = useLocation()
    return location.pathname !== "/" && <Nav />
  }
    
  return (
  <>
      <NavBarWrapper />
    <div>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<GameSetup />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/mission_&_about" element={<About_Mission />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/training" element={<TrainingGrounds/>}/>
      </Routes>
    </div>
  </>
  );
};

export default App;
