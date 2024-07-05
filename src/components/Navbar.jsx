import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Tony from '../assets/Tony.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = () => setNav(!nav);

  const sections = ["home", "about", "skills", "work", "contact"];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/omodojo-damilare-07614213b/",
      icon: <FaLinkedin size={30} />,
      bg: "bg-blue-600",
      label: "Linkedin",
    },
    {
      href: "https://github.com/Lucatoneybuzz",
      icon: <FaGithub size={30} />,
      bg: "bg-[#333333]",
      label: "GitHub",
    },
    {
      href: "mailto:your-lucatoney23@gmail.com",
      icon: <HiOutlineMail size={30} />,
      bg: "bg-[#6fc2b0]",
      label: "Email",
    },
    {
      href: Tony,
      icon: <BsFillPersonLinesFill size={30} />,
      bg: "bg-[#565f69]",
      label: "Resume",
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <span
          className="text-2xl font-bold cursor-pointer text-pink-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <p className="lg:text-2xl text-[16px]">Lucatoneybuzz<span style={{color: 'greenyellow'}}>‹⁄›</span></p>
        </span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex font-medium">
        {sections.map((section) => (
          <li key={section} className="px-4">
            <Link
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-transform duration-500 hover:scale-110 ${
                activeSection === section ? "text-pink-500" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="cursor-pointer text-2xl" />
        ) : (
          <FaTimes className="cursor-pointer text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: nav ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {sections.map((section) => (
          <li key={section} className="py-6 text-4xl">
            <Link
              onClick={() => {
                handleClick();
                setActiveSection(section);
              }}
              to={section}
              smooth={true}
              duration={500}
              className="transition-transform duration-500 hover:scale-110"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}

        {/* Mobile Social Icons */}
        <div className="flex mt-10">
          {socialLinks.map(({ href, icon, bg, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`m-2 p-2 rounded-full ${bg} text-gray-300 hover:scale-110 transition-transform duration-500`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.ul>

      {/* Desktop Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ href, icon, bg, label }) => (
            <motion.li
              key={label}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label} {icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
