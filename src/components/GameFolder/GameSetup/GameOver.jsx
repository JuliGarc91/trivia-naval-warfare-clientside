import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GameOver = ({ winner }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <p>{`Congratulations ${winner} you win!`}</p>
      <Link to="/">
        <button className="border-2 border-black p-2">Back to Home</button>
      </Link>
    </div>
  );
};

export default GameOver;
