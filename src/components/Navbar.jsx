import React, { useState } from "react";
import logo from "../assets/Name.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[200px] flex justify-between items-center px-4 bg-[#010204] text-gray-300">
      <div>
        <img src={logo} alt="log Image" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <div className=" hidden md:flex">
        <ul className="flex" style={{ fontSize: "x-large" }}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#010204] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contacts</li>
        <li className="py-6 text-4xl">About</li>
      </ul>

      {/* Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
            <a
              className="flex justify-between items-center w-full text-blue-600"
              href="https://www.linkedin.com/in/shan-patel-b556a61b9"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#121616]">
            <a
              className="flex justify-between items-center w-full text-white"
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/shanpatel371/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e6e9d591]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank" 
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1p1PU49EvCkE0aChl9Y5PenY7ppfQBWGc/view?usp=sharing/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3dbac391]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:shanpatel371@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
