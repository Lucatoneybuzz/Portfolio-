import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import Spotify from '../assets/spotify.png'
import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";

const projects = [
  {
    title: "Spotify mini-clone",
    image: Spotify,
    demoLink: "https://spotify-clone-bay-nine.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/Spotify-clone.git",
    description: "A single-page application built with React.js and tailwindcss featuring dynamic content and responsive design.",
  },
  {
    title: "Another Project",
    image: WorkImg,
    demoLink: "/",
    codeLink: "/",
    description: "Another example of a project with dynamic content and responsive design.",
  },
  {
    title: "Another Project",
    image: WorkImg,
    demoLink: "/",
    codeLink: "/",
    description: "Another example of a project with dynamic content and responsive design.",
  },
  {
    title: "Another Project",
    image: WorkImg,
    demoLink: "/",
    codeLink: "/",
    description: "Another example of a project with dynamic content and responsive design.",
  },
  {
    title: "Another Project",
    image: WorkImg,
    demoLink: "/",
    codeLink: "/",
    description: "Another example of a project with dynamic content and responsive design.",
  },
  // Add more projects here
];

const ProjectItem = ({ title, image, demoLink, codeLink, description }) => {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col md:flex-row justify-between items-center mx-auto content-div transition-transform transform hover:scale-105 p-4 bg-[#0a192f]">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 lg:h-64 h-25 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
      />
      <div className="flex flex-col justify-center w-full md:w-2/3 text-center md:text-left">
        <span className="text-2xl font-bold text-pink-700 tracking-wider block mb-2">
          {title}
        </span>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="pt-4 flex justify-center md:justify-start">
          <a href={demoLink} className="m-2">
            <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg flex items-center justify-center lg:hover:text-pink-700">
              <AiOutlinePlayCircle className="inline-block mr-2" /> Demo
            </button>
          </a>
          <a href={codeLink} className="m-2">
            <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg flex items-center justify-center  lg:hover:text-pink-700">
              <AiOutlineGithub className="inline-block mr-2" /> Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" className="w-full min-h-full text-gray-300 bg-[#0a192f] py-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex items-center">
          <FaBriefcase className="text-4xl text-pink-600 mr-4 mb-11" />
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">// Check out some of my recent work</p>
          </div>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 lg:gap-8 gap-[20%]">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
