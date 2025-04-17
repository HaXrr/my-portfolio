import logo from "/public/logo.svg";
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
export default function Footer() {
  return (
    <>
      <div className="bg-bgSecondary border-t-[2px] border-gray">
        <div className=" bg-bgPrimary mx-[0.5rem] md:mx-[1rem] p-[1.6rem] sm:p-[0.6rem]  text-body flex justify-between items-center py-[3.2rem]">
          <div className="px-2">
            <a
              href="#home"
              title="my portfolio logo "
              className="flex justify-start items-center text-gray gap-[1rem]"
            >
              <img src={logo} className="w-[1.4rem] h-[1.4rem]" />
              CodeWithHazrr <span className="ml-4 text-white">hazrr@hazrr-dev.ml</span>
            </a>
            <p className="text-gray mt-[1rem] ml-10 text-[1.2rem]">
              Frontend web Devloper, learning to master Web design
            </p>
          </div>
          <div>
            <h2 className="text-body text-white font-semibold">Media</h2>
            <div className="flex gap-[1rem]">
              <a
                href="https://linkedin.com/in/hazrr"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[2rem] text-gray hover:text-primary"
                />
              </a>
              <a
                href="https://github.com/HaXrr"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[2rem] text-gray hover:text-primary"
                />
              </a>
              <a
                href="https://tiktok.com/@your-profile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-[2rem] text-gray hover:text-primary"
                />
              </a>
            </div>
            
          </div>
          
        </div>
        <div className="w-full bg-bgPrimary text-gray flex text-[1.2rem] sm:text-[1.4rem] justify-center items-center">
        &copy; {new Date().getFullYear()} copyrights CodeWithHazrr. All rights
        reserved.
        </div>
      </div>
    </>
  );
}
