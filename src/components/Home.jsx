import React from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiDownload2Line } from "react-icons/ri";
import ProfilePic from "../assets/pro.jpg";
import Tony from "../assets/Tony.pdf";
import { Link } from "react-scroll";

const Home = () => {
  const works = 'work';

  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] flex items-center justify-center pt-[100px] md:pt-20 lg:pt-44"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row items-center h-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-pink-600 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-pink-600 text-sm md:text-base font-semibold"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-7xl font-bold text-[#ccd6f6]"
          >
            Omodojo Anthony Damilare
          </motion.h1>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-4xl md:text-7xl font-bold text-[#8892b0]"
          >
            I'm a Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#8892b0] py-4 max-w-[700px] mx-auto md:mx-0 text-sm md:text-base font-semibold fo"
          >
            I'm a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive full-stack web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-4"
          >
            <Link to={works} smooth={true} duration={500}>
              <button className="text-white group border-2 rounded-full border-pink-600 px-6 py-3 my-2 flex items-center mx-auto md:mx-0 lg:hover:bg-pink-600 lg:hover:border-pink-600">
                View Work
                <span className="lg:group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>

            <a
              href={Tony}
              download
              className="text-white group border-2 rounded-full border-pink-600 px-6 py-3 my-2 flex items-center mx-auto md:mx-0 lg:hover:bg-pink-600 lg:hover:border-pink-600"
            >
              <RiDownload2Line className="mr-2" /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
