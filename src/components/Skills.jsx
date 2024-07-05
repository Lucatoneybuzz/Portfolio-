import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { FaTools } from "react-icons/fa"; // Import the icon

const skills = [
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: ReactImg },
  { name: "GitHub", image: GitHub },
  { name: "Node.js", image: Node },
  { name: "MongoDB", image: Mongo },
  { name: "Tailwind CSS", image: Tailwind },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <FaTools size={35} className="inline-block mr-2 mb-0.5  text-pink-600" />
          <motion.p 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-4xl text-2xl font-bold inline border-b-4 border-pink-600"
          >
            Skills {/* Icon */}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-4"
          >
            {/* These are the technologies I've worked with */}
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              className="shadow-md shadow-[#040c16] transition-transform duration-500"
            >
              <img className="w-20 mx-auto max-w-full" src={skill.image} alt={`${skill.name} icon`} />
              <p className="my-4">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
