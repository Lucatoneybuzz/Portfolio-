import React, { useState } from "react";
import LucatoneyAi from "../assets/lucatoneyAI.png";
import Spotify from "../assets/spotify.png";
import Inside from "../assets/inside-app.png";
import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";

const projects = [
  {
    title: "Spotify mini-clone",
    image: Spotify,
    demoLink: "https://spotify-clone-bay-nine.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/Spotify-clone.git",
    description:
      "A single-page application built with React.js and Tailwind CSS featuring dynamic content and responsive design.",
  },
  {
    title: "Interior Design Website",
    image: Inside,
    demoLink: "https://the-inside.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/Inside-2.git",
    description:
      "Developed a bespoke, responsive website for an interior design company using React and Tailwind CSS, featuring a portfolio, service details, client testimonials, and a dynamic contact form. Focused on modern aesthetics and usability to enhance visual appeal and attract potential clients.",
  },
  {
    title: "LucatoneyAi",
    image: LucatoneyAi,
    demoLink: "https://lucatoneyai.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/LucatoneyAi.git",
    description:
    'LucatoneyAi is a web application that leverages the Gemini API to provide AI-powered responses to user prompts. It features an interactive UI where users can select predefined prompts or enter their own to get dynamic answers.'
  },
  {
    title: "Interior Design Website",
    image: Inside,
    demoLink: "https://the-inside.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/Inside-2.git",
    description:
      "Developed a bespoke, responsive website for an interior design company using React and Tailwind CSS, featuring a portfolio, service details, client testimonials, and a dynamic contact form. Focused on modern aesthetics and usability to enhance visual appeal and attract potential clients.",
  },
  {
    title: "Interior Design Website",
    image: Inside,
    demoLink: "https://the-inside.vercel.app",
    codeLink: "https://github.com/Lucatoneybuzz/Inside-2.git",
    description:
      "Developed a bespoke, responsive website for an interior design company using React and Tailwind CSS, featuring a portfolio, service details, client testimonials, and a dynamic contact form. Focused on modern aesthetics and usability to enhance visual appeal and attract potential clients.",
  },
  
  // Add more projects here
];

const ProjectItem = ({ title, image, demoLink, codeLink, description }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container rounded-md flex flex-col justify-between items-center mx-auto content-div transition-transform transform lg:hover:scale-105 p-4 bg-[#0a192f] relative">
      <div className="relative w-full h-48 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-gray-400 tracking-wider block mb-2 text-center">
          {title}
        </span>
        <p className="text-gray-500 mb-4 text-center font-medium">
          {showMore ? description : `${description.substring(0, 120)}...`}
          <button
            className="text-pink-600 hover:underline focus:outline-none"
            onClick={toggleDescription}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <div className="flex space-x-4">
          <a href={demoLink}>
            <button className="text-center rounded-full px-4 py-2 bg-none border-2 border-pink-700 text-white-700 font-semibold text-[14px] flex items-center justify-center transition duration-300 ease-in-out transform lg:hover:scale-110  lg:hover:bg-pink-600">
              <AiOutlinePlayCircle className="inline-block mr-2" /> Demo
            </button>
          </a>
          <a href={codeLink}>
            <button className="text-center rounded-full px-4 py-2 bg-none border-2 border-pink-700 text-white-700 font-semibold text-[14px] flex items-center justify-center transition duration-300 ease-in-out transform lg:hover:scale-110  lg:hover:bg-pink-600">
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
            <p className="lg:text-4xl text-2xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6 font-semibold">// Check out some of my recent work</p>
          </div>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
