import React from 'react';
import { FaTwitter, FaWhatsapp, FaFacebookF, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0a192f] text-[#ccd6f6] py-8 text-center text-xs'>
      <div className='container mx-auto'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a href='https://twitter.com/OmodojoDamilare' target='_blank' rel='noopener noreferrer' className='lg:hover:text-pink-600 transition-colors'>
            <FaTwitter size={20} />
          </a>
          <a href='https://wa.me/+2348090589189' target='_blank' rel='noopener noreferrer' className='lg:hover:text-pink-600 transition-colors'>
            <FaWhatsapp size={20} />
          </a>
          <a href='https://facebook.com/OmodojoDamilare' target='_blank' rel='noopener noreferrer' className='lg:hover:text-pink-600 transition-colors'>
            <FaFacebookF size={20} />
          </a>
          <a href='https://instagram.com/Lucatoneybuzz' target='_blank' rel='noopener noreferrer' className='lg:hover:text-pink-600 transition-colors'>
            <FaInstagram size={20} />
          </a>
          <a href='https://discord.com/lucatoneybuzz' target='_blank' rel='noopener noreferrer' className='lg:hover:text-pink-600 transition-colors'>
            <FaDiscord size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Omodojo Anthony Damilare. All Rights Reserved.</p> 
      </div>
    </footer>
  ); 
};

export default Footer;
