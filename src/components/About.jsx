import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa'; // Import the icon

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-10 pl-4 flex items-center'>
            <FaUser className='text-4xl mr-2  text-pink-600' /> {/* Icon */}
            <motion.h2 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </motion.h2>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <motion.p 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}>
              Hi, I'm Anthony! I'm a passionate full-stack developer with a love for creating
              innovative and user-friendly web applications. Welcome to my portfolio!
            </motion.p>
          </div>
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quibusdam, minus dicta? Quidem soluta nam animi. 
              Itaque, cum? Hic dicta aliquam sit ut, rerum minus 
              reiciendis impedit, laboriosam, voluptates officia magnam!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
