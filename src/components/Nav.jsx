import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div className="container mx-auto flex  items-center bg-dark-red h-20 max-w-full px-4 flex-row justify-between">
       <Link to="/"><h1 className="text-center text-2xl font-bold text-white hover:text-navy" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>Trivia Naval Warfare</h1></Link> 
        <ul className="flex space-x-4 text-xl" style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>
          <li><Link to="/howto" className="text-white hover:text-gray-900">How To</Link></li>
          <li><Link to="/game" className="text-white hover:text-gray-900">Play</Link></li>
          <li><Link to="/training" className="text-white hover:text-gray-900">Training Ground</Link></li>
          <li><Link to="/mission_&_about" className="text-white hover:text-gray-900">About</Link></li>     
        </ul>
      </div>
    )
};

export default Navigation