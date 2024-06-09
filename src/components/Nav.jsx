import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div className="container mx-auto flex  items-center bg-dark-red h-20 max-w-full mb-3 px-4">
        <h1 className="text-center text-xl font-bold flex-grow text-white">Naval Trivia Warfare</h1>
        <ul className="flex space-x-4">
          <li><Link to="/howto" className="text-white hover:text-gray-900">How To</Link></li>
          <li><Link to="/board" className="text-white hover:text-gray-900">Board</Link></li>
          <li><Link to="/feed" className="text-white hover:text-gray-900">Feed</Link></li>
          <li><Link to="/training" className="text-white hover:text-gray-900">Training Ground</Link></li>
          <li><Link to="/mission_&_about" className="text-white hover:text-gray-900">About</Link></li>
        </ul>
        <div className="flex-1"></div>
      </div>
    )
};

export default Navigation