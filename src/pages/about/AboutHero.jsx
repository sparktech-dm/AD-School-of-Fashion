import React from "react";
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/', { state: { scrollToEnquiry: true } });
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden bg-[#f0eee0]">
      {/* Main Big Image - covers entire section */}
      <img
        src="/main image.webp"
        alt="About Hero"
        className="absolute w-[180vh] h-[180vh] md:h-[110vh] pt-20 pl-14 object-cover object-center left-[50px] opacity-100"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Content Over Image */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6 md:px-4 pt-[100px] xl:pl-[1px]">
        <div className="max-w-xl text-left text-white pl-[20px]">
          <h1 className="font-bold font-cormorant text-4xl md:text-6xl font-extrabold leading-tight">
            The Beginning
          </h1>
          <p className="italic font-bold font-cormorant mt-6 text-lg md:text-2xl text-gray-200">
            Our story started in 2017 with Aphrodite’s Drape — a small design studio with a big dream: to make fashion deeply personal.
            We didn’t want to just follow trends. We wanted to listen to people. To design for brides stepping into their new life. For children on their first stage performance. For professionals who wore their uniforms with pride. For anyone who wanted clothes that felt like them.
            Every stitch carried care, every design told a story. And slowly, what began as a boutique grew into a trusted name in Chennai.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
