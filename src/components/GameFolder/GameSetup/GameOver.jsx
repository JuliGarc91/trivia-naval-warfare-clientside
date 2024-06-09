import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GameOver = ({ winner }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-700/80 p-8 border-4 border-black">
      <h1 className="text-center text-6xl">Game Over</h1>
      <p>{`Congratulations ${winner} you win!`}</p>
      <br/>
      <Link to="/">
        <button className="bg-navy border-2 border-black p-2 hover:bg-light-navy">Back to Home</button>
      </Link>
    </div>
  );
};

export default GameOver;
