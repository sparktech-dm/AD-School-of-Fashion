import React from "react";
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/', { state: { scrollToEnquiry: true } });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#f0eee0] overflow-x-hidden">
      {/* Desktop Image */}
       <img
  src="/about 01.webp"
  alt="About Hero"
  className="hidden md:block absolute top-0 left-0 w-full max-w-[110vw] h-auto object-cover object-center"
  style={{ zIndex: 1 }}
/>

  {/* Mobile Image */}
<img
  src="/MAIN IMAGE MOBILE.webp"
  alt="About Hero"
  className="block md:hidden absolute inset-0 w-full h-full object-cover"
/>


  {/* Desktop Content (only visible on md and above) */}
 <div className="hidden md:flex relative z-20 max-w-7xl mx-auto h-full items-start px-6 md:px-4 pt-8 md:pt-16 lg:pt-24 xl:pt-32 xl:pl-20">
  <div className="max-w-xl text-left text-white pl-2 md:pl-8 lg:pl-10">
    <h1 className="font-bold font-cormorant text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
      The Beginning
    </h1>
    <p className="italic font-bold font-cormorant mt-6 md:mt-10 text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200">
      Our story started in 2017 with Aphrodite’s Drape — a small design studio with a big dream: to make fashion deeply personal.
      We didn’t want to just follow trends. We wanted to listen to people. To design for brides stepping into their new life. For children on their first stage performance. For professionals who wore their uniforms with pride. For anyone who wanted clothes that felt like them.
      Every stitch carried care, every design told a story. And slowly, what began as a boutique grew into a trusted name in Chennai.
    </p>
    <button
      className="mt-6 md:mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition"
      onClick={handleBookNow}
    >
      Book Now
    </button>
  </div>
</div>
{/* Mobile Content (only visible below md) */}
<div className="md:hidden absolute bottom-6 inset-x-0 z-20 flex flex-col items-center justify-end px-4">
  <div className="max-w-sm w-full text-center text-white bg-black/40 rounded-lg p-3">
    <h1 className="font-bold font-cormorant text-2xl leading-snug">
      The Beginning
    </h1>
    <p className="italic font-bold font-cormorant mt-3 text-sm leading-relaxed text-gray-200">
      Our story started in 2017 with Aphrodite’s Drape — a small design studio with a big dream: to make fashion deeply personal.
      We didn’t want to just follow trends. We wanted to listen to people. To design for brides stepping into their new life. For children on their first stage performance. For professionals who wore their uniforms with pride. For anyone who wanted clothes that felt like them.
      Every stitch carried care, every design told a story. And slowly, what began as a boutique grew into a trusted name in Chennai.
    </p>
    <button
      className="w-full mt-4 px-4 py-2 bg-yellow-500 text-white text-base rounded-full shadow-lg hover:bg-yellow-600 transition"
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
