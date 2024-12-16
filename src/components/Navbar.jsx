import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import LogoImg from "../assets/logo/rd.png";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 w-20 text-5xl items-center text-white">
        <img src={LogoImg} alt="Logo"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://github.com/Rdpons?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/rhodney.dame.n.ponsica" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaFacebook />
        </a>
        <a
          href="https://x.com/rhodney_p" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
