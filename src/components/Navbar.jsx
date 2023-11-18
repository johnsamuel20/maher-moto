import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 w-full ${
        scrolling ? 'bg-black transition-all duration-500' : ''
      }`} style={{ zIndex: "10000" }}
    >
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
        <ul className='hidden md:flex cursor-pointer'>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Home</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Company</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Resources</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>About</li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`${
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out duration-500 top-0 w-[60%] h-full fixed left-[-100%] '
          }`}
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LOGO.</h1>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Home
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Company
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            Resources
          </li>
          <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] duration-300'>
            About
          </li>
          <li className='p-4 hover:text-[#00df9a] duration-300'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;