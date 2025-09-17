import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/Logo.webp';

export const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && scrollPosition >= element.offsetTop) {
            setActive(sections[i]);
            break;
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (path.startsWith('/projects')) setActive('projects');
      else if (path.startsWith('/blogs')) setActive('blogs');
      else if (path.startsWith('/services')) setActive('services');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
    if (location.pathname === '/' && location.state?.scrollToTop) {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const menuItems = [
    { name: 'services', type: 'route', path: '/services' },
    { name: 'projects', type: 'route', path: '/projects' },
    { name: 'blogs', type: 'route', path: '/blogs' },
    { name: 'contact', type: 'scroll', id: 'contact' },
  ];

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
    }
  };

  const handleItemClick = (item) => {
    setActive(item.name);
    if (item.type === 'route') {
      navigate(item.path);
    } else if (item.type === 'scroll') {
      handleScroll(item.id);
    }
  };

  // Desktop Navbar
  return (
    <div className='w-full h-[50px] fixed top-0 z-50 font-[Inter] flex justify-center items-center h-[80px]'>
     <div className="flex items-center w-[90%] max-w-5xl rounded-full bg-[#79548a] px-8 py-2 shadow-lg">
        {/* Logo on the left */}
        <div className='flex-shrink-0 mr-6'>
          <RouterLink to='/' onClick={handleScrollTop}>
            <div className='w-[50px] h-[50px] cursor-pointer'>
              <img
                src={Logo}
                alt='Logo'
                className='w-full h-full object-contain'
              />
            </div>
          </RouterLink>
        </div>
        {/* Menu items centered */}
        <div className='flex-1 flex justify-center'>
          <ul className='flex items-center gap-x-3'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-white/10 text-[#f0c417]'
                        : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-white/10 text-[#f0c417]'
                        : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* CTA Button on the right */}
        <div className='flex-shrink-0 ml-6'>
          <button
            className='bg-[#f0c417] text-[#79548a] px-6 py-2 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200'
            onClick={() => navigate('/enroll')}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Mobile Navbar Header */}
      <div className='md:hidden flex justify-between items-center px-5 h-full backdrop-blur bg-gray-600/40'>
        <RouterLink to='/' onClick={handleScrollTop}>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
          </div>
        </RouterLink>
        <button
          className='text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 w-full border-t border-[#444] bg-[#79548a]'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </li>
            ))}
            {/* CTA Button in mobile dropdown */}
            <li>
              <button
                className='bg-[#f0c417] text-[#79548a] px-6 py-2 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200'
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/enroll');
                }}
              >
                Enroll Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;