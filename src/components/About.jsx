import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap } from "react-icons/fa"; // Import icons for user and graduation cap

const About = () => {
  // Define an array of educational experiences
  const education = [
    {
      institution: "University of Nigeria",
      degree: "Bachelor of Science in Art Education",
      duration: "2019 - 2023",
    },
    {
      institution: "Gomycode",
      degree: "Certificate in Full Stack Dev. Bootcamp",
      duration: "2023 - 2024",
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 lg:pt-[200px] pt-10">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-10 flex items-center">
            <FaUser className="text-4xl mr-2 text-pink-600" /> {/* User icon */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-4xl text-2xl font-bold inline border-b-4 border-pink-600"
            >
              About Me
            </motion.h2>
          </div>
          <div></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-lg md:text-2xl font-bold">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Anthony! I'm a passionate full-stack developer with a love
              for creating innovative and user-friendly web applications.
              Welcome to my portfolio!
            </motion.p>
            {/* Education section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
                <FaGraduationCap className="inline-block mr-2" />
                Education
              </h3>
              {/* Mapping over education array */}
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg md:text-xl font-bold">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-400 text-[15px]">{edu.duration}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="text-gray-400 font-semibold pb-8">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I studied Art Education, bringing a unique perspective to my
              journey into technology. Passionate about leveraging creativity
              and technical skills, I transitioned into the world of web
              development and became proficient with the MERN stack. I am
              dedicated to creating innovative and user-friendly digital
              experiences.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
