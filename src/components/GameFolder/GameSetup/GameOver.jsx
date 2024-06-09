import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GameOver = ({ winner }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-700/80 p-8 border-4 border-black">
      <h1 className="text-center text-6xl" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>Game Over</h1>
      <br/>
      <img src="https://res.cloudinary.com/dwygxzqku/image/upload/v1717956470/battleship%20app/celebrate.webp" alt="sailors celebrating" className="h-[40vh] border-2 border-yellow-600 p-2"/>
      <br/>
      <p className="text-4xl text-yellow-400" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>{`Congratulations ${winner} you win!`}</p>
      <br/>
      <Link to="/">
        <button className="bg-forest border-2 border-black p-2 hover:bg-light-navy text-xl"
        style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>Back to Home</button>
      </Link>
    </div>
  );
};

export default GameOver;
