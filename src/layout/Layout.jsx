import Header from "./Header";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";
import LineSroke from "../assets/Line.svg";
import rectStyle from "../assets/Rectangle24.svg";
import dotStyle from "../assets/Dots.png";
import {
  faLinkedin,
  faGithub,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Layout({ children }) {
  return (
    <div className=" absolute bg-bgSecondary ">
      <div className="flex md:mx-[1rem] lg:mx-[17.1rem]   mx-[0.5rem] mb-0 font-fira-code flex-col min-h-screen  bg-bgPrimary px-[0.6rem]">
        <Header />

        <main className="flex-grow">{children}</main>
      </div>
      <Footer />

      <div className="relative hidden sm:block text-gray text-[1.2rem]  mt-4 text-center">
        <img
          className="absolute top-[-91.2rem] left-[2.7rem] animate-spin-slow hidden lg:block"
          src={rectStyle}
        />
        <img
          className="absolute top-[-40.2rem] left-[3.7rem] animate-spin-slow hidden lg:block"
          src={dotStyle}
        />
        <img
          className="absolute top-[-79.5rem] right-[1.7rem] animate-spin-slow hidden lg:block"
          src={dotStyle}
        />
        <img
          className="absolute w-[11rem] top-[-200rem] right-[3.7rem] animate-spin-slow hidden lg:block"
          src={rectStyle}
        />
        <img
          className="absolute top-[-216rem] left-[4.7rem] animate-spin-slow hidden lg:block"
          src={dotStyle}
        />
        <img
          className="absolute w-[9rem] top-[-246rem] right-[4.7rem] animate-spin-slow  hidden lg:block"
          src={rectStyle}
        />
        <img
          className="absolute w-[12rem] top-[-156rem] left-[4.7rem] animate-spin-slow  hidden lg:block "
          src={rectStyle}
        />
        <div className="absolute top-[-310rem] hidden lg:block  left-[-17rem] flex flex-col gap-[0.8rem]">
          <img className="rotate-90" src={LineSroke} />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-[2rem] text-gray hover:text-blue-600 mt-[26rem] hover:translate-y-[-0.4rem]"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[2rem] text-gray hover:text-blue-700 mx-2 hover:translate-y-[-0.4rem]"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[2rem] text-gray-800 hover:text-black hover:translate-y-[-0.4rem]"
          />
        </div>
      </div>
    </div>
  );
}
