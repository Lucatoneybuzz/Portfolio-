import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0a192f] text-[#ccd6f6] py-8 text-center text-xs'>
      <div className='container mx-auto'>
        <p>&copy; {new Date().getFullYear()} Omodojo Anthony Damilare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
