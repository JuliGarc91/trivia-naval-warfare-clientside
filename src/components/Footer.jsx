import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-navy shadow-lg shadow-slate-400 fixed bottom-0 left-0 right-0">
        <div className="flex flex-row justify-between">
          <Link to={"/"}>
            <div className="p-5 lg:pr-16 font-bold text-2xl text-white inline-block pt-3 pr-10" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>
              TNW
            </div>
          </Link>
          <div className="text-white flex flex-row  pt-5" style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>
            <Link to={"/mission_&_about"}>
              <div className="hover:text-blue-400 lg:mr-10 ">Mission & About</div>
            </Link>
            <a
              href={"https://github.com/JuliGarc91/trivia-naval-warfare-clientside"}
              target="_blank"
            >
              <BsGithub className="lg:mr-16 mr-3 w-5 h-5 mt-1 ml-10 lg:ml-48 hover:text-dark-red" />
            </a>
          </div>
          <span className="flex flex-row pt-6 pb-4 text-white text-sm pr-4" style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'normal' }}>
            &#169;2024 TNW Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;