import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/adsof logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/Contact' }
  ];

  const scrollToEnquiry = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToEnquiry: true } });
    } else {
      const element = document.getElementById('enquiry');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const heroSection = document.getElementById('hero');
      if (heroSection) heroSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-[Inter]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full h-20 lg:h-24 items-center justify-between px-10 lg:px-14 shadow-md bg-[#5a2d4b] rounded-b-3xl xl:h-28">
        <RouterLink onClick={handleHomeClick} className="flex-shrink-0 cursor-pointer">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 h-24 lg:w-24 lg:h-24 object-contain xl:w-[150px] xl:h-[150px]"
          />
        </RouterLink>

        <ul className="flex items-center gap-x-6 lg:gap-x-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <RouterLink
                to={item.path}
                className="px-5 py-2 rounded-full text-base lg:text-lg font-semibold text-white hover:bg-[#4f4e4e] transition-all duration-200 cursor-pointer"
                onClick={
                  item.name === 'Contact'
                    ? scrollToEnquiry
                    : item.name === 'Home'
                    ? handleHomeClick
                    : () => setMenuOpen(false)
                }
              >
                {item.name}
              </RouterLink>
            </li>
          ))}
        </ul>

        <button
          className="mr-5 bg-[#f0c417] text-[#5a2d4b] px-8 py-3 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-base lg:text-lg"
          onClick={scrollToEnquiry}
        >
          Enroll Now
        </button>
      </div>

      {/* Mobile Navbar */}
<div className="flex md:hidden items-center justify-between px-4 h-20 bg-[#5a2d4b] rounded-b-2xl shadow-md fixed top-0 left-0 right-0 z-50">
  {/* Logo Left - Bigger */}
  <RouterLink
    onClick={handleHomeClick}
    className="flex-shrink-0 cursor-pointer"
  >
    <img
      src={Logo}
      alt="Logo"
      className="w-24 h-20 sm:w-24 sm:h-32 object-contain"
    />
  </RouterLink>

  {/* Enroll Now Button Center */}
  <button
    className="absolute left-1/2 transform -translate-x-1/2 bg-[#f0c417] text-[#5a2d4b] px-10 py-3 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-base z-30"
    onClick={scrollToEnquiry}
  >
    Enroll Now
  </button>

  {/* Hamburger Right */}
  <button
    aria-label="Toggle menu"
    className="text-white text-3xl focus:outline-none bg-[#5a2d4b]"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>

{/* Mobile Dropdown - Transparent */}
{menuOpen && (
  <div className="md:hidden absolute top-24 left-0 w-full z-40 bg-[#5a2d4b]/95 backdrop-blur-md shadow-lg rounded-b-4xl">
    <ul className="flex flex-col items-center gap-4 py-4">
      {menuItems.map((item) => (
        <li key={item.name} className="w-full text-center">
          <RouterLink
            to={item.path}
            className="block px-6 py-2 rounded-full text-base font-semibold text-white hover:bg-[#4f4e4e]/30 transition-all duration-200 cursor-pointer"
            onClick={() => {
              if (item.name === 'Contact') scrollToEnquiry();
              else if (item.name === 'Home') handleHomeClick();
              else setMenuOpen(false);
            }}
          >
            {item.name}
          </RouterLink>
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
