import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import About_Mission from "./components/About_Mission";
import HowTo from "./components/Howto";

const App = () => {

  
  const NavBarWrapper = () => {
    const location = useLocation()
    return location.pathname !== "/" && <Nav />
  }


  return (
    <div>
    <h1 className="text-3xl font-bold underline text-red-500">
      Hello world!
    </h1>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/howto" element={<HowTo />}/>
      <Route path="/mission_&_about" element={<About_Mission />}/>
    </Routes>
  </div>
  )
};

export default App;
