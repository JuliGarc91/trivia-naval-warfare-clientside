import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import About_Mission from "./components/About_Mission";
import HowTo from "./components/Howto";
import Nav from "./components/Nav"

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
      <Route path="/" element={<Landing/>}/>
      <Route path="/howto" element={<HowTo />}/>
      <Route path="/mission_&_about" element={<About_Mission />}/>
     </Routes>
     </div>
  </>
  )
};

export default App;
