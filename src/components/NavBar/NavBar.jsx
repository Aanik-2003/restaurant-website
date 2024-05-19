import React, { useState } from 'react';
import Logo from "../../assets/Logo.jpg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu after clicking on a link
    setShowMenu(false);
  };

  return (
    <div className={`fixed shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 w-full h-16`} style={{ zIndex: '999' }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-2'>
        <div className="flex justify-between items-center">
          <div>
            <a href="#home" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
              <img src={Logo} alt="HotPot" className='w-10' /> HotPot
            </a>
          </div>
          {/* Desktop menu */}
          <ul className={`hidden sm:flex flex-row gap-4`}>
            <li>
              <a href="#home" className='inline-block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('home-section')}>Home</a>
            </li>
            <li>
              <a href="#about" className='inline-block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('about-section')}>About</a>
            </li>
            <li>
              <a href="#menu" className='inline-block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('menu-section')}>Menu</a>
            </li>
            <li>
              <a href="#contact" className='inline-block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('contact-section')}>Contact</a>
            </li>
          </ul>
          {/* Hamburger icon for mobile menu */}
          <div className="sm:hidden">
            <button onClick={() => setShowMenu(!showMenu)} className="block text-gray-600 hover:text-primary focus:text-primary focus:outline-none">
              {showMenu ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {showMenu && (
          <div className="sm:hidden mt-2 bg-gray-900 w-fit ml-auto">
            <ul className="flex flex-col gap-2 text-white justify-end">
              <li>
                <a href="#home" className='block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('home-section')}>Home</a>
              </li>
              <li>
                <a href="#about" className='block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('about-section')}>About</a>
              </li>
              <li>
                <a href="#menu" className='block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('menu-section')}>Menu</a>
              </li>
              <li>
                <a href="#contact" className='block py-2 px-4 hover:text-primary' onClick={() => handleNavigation('contact-section')}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
