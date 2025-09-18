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
    setMenuOpen(false);
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
    { name: 'Home', type: 'route', path: '/services' },
    { name: 'About Us', type: 'route', path: '/about' },
    { name: 'Courses', type: 'route', path: '/courses' },
    { name: 'Contact', type: 'scroll', id: '/contact' },
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

  return (
    <nav className="w-full fixed top-0 z-50 font-[Inter]">
      {/* Capsule-shaped centered navbar (desktop/tablet only) */}
      <div className="hidden md:flex justify-center items-center h-20 lg:h-24 w-full xl:h-32 w-full ">
        <div className="flex items-center w-full max-w-5xl rounded-full bg-[#5a2d4b] px-4 md:px-8 py-2 shadow-lg ">
          {/* Logo on the left */}
          <div className='flex-shrink-0 mr-4 md:mr-6'>
            <RouterLink to='/' onClick={handleScrollTop}>
              <div className='w-10 h-10 md:w-12 md:h-12 cursor-pointer'>
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
            <ul className='flex items-center gap-x-2 md:gap-x-4'>
              {menuItems.map((item) => (
                <li key={item.name} onClick={() => handleItemClick(item)}>
                  {item.type === 'route' ? (
                    <RouterLink
                      to={item.path}
                      className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                        active === item.name
                          ? 'bg-white/10 text-[#f0c417]'
                          : 'text-white hover:text-[13px] hover:bg-[#4f4e4e]'
                      }`}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </RouterLink>
                  ) : (
                    <span
                      className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
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
          <div className='flex-shrink-0 ml-4 md:ml-6'>
            <button
              className='bg-[#f0c417] text-[#79548a] px-4 md:px-6 py-1 md:py-2 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-xs md:text-base'
              onClick={() => navigate('/enroll')}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Header (mobile only) */}
      <div className='flex md:hidden items-center px-3 h-16 backdrop-blur bg-gray-600/40 relative'>
        {/* Hamburger menu on the left */}
        <button
          className='text-white text-2xl mr-2'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Logo in the center */}
        <div className="flex-1 flex justify-center">
          <RouterLink to='/' onClick={handleScrollTop}>
            <div className='w-10 h-10 cursor-pointer'>
              <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
            </div>
          </RouterLink>
        </div>
        {/* Empty div for spacing on right */}
        <div style={{ width: '2rem' }}></div>
      </div>

      {/* Mobile Menu Dropdown (mobile only) */}
      {menuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full border-t border-[#444] bg-[#79548a]'>
          <ul className='flex flex-col items-center gap-2 py-2'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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
                className='bg-[#f0c417] text-[#79548a] px-6 py-2 rounded-full font-bold hover:bg-[#e6b800] transition-all duration-200 text-sm'
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
    </nav>
  );
};

export default Navbar;