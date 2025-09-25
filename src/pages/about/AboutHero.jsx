import React from "react";
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/', { state: { scrollToEnquiry: true } });
  };

  return (
    <section className=" h-[140vh] md:h-screen relative w-full h-screen min-h-screen md:h-[100vh] overflow-hidden bg-[#f0eee0] ">
      {/* Desktop Image */}
      <img
        src="/main image.webp"
        alt="About Hero"
        className="hidden md:block absolute w-[180vh] h-[110vh] pt-20 pl-14 object-cover object-center left-[50px]"
      />

      {/* Mobile Image */}
      <img src="/main image for mobile.webp" 
      alt="About Hero Mobile" 
      className="block md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-100 top-[65px]" 
      />
    

     {/* Desktop Content (only visible on md and above) */}
<div className="hidden md:flex relative z-20 max-w-7xl mx-auto h-full items-center px-6 md:px-4 pt-[100px] xl:pl-[1px]">
  <div className="max-w-xl text-left text-white pl-[20px]">
    <h1 className="font-bold font-cormorant text-6xl font-extrabold leading-tight">
      The Beginning
    </h1>
    <p className="italic font-bold font-cormorant mt-6 text-2xl text-gray-200">
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

{/* Mobile Content (only visible below md) */}
<div className="md:hidden absolute bottom-8 inset-x-0 z-20 flex flex-col items-center justify-end px-6 mr-8 ml-8">
  <div className="max-w-xl text-center text-white">
    <h1 className="font-bold font-cormorant text-5xl font-extrabold leading-tight">
      The Beginning
    </h1>
    <p className="italic font-bold font-cormorant mt-4 text-[22px] text-gray-200">
      Our story started in 2017 with Aphrodite’s Drape — a small design studio with a big dream: to make fashion deeply personal.
      We didn’t want to just follow trends. We wanted to listen to people. To design for brides stepping into their new life. For children on their first stage performance. For professionals who wore their uniforms with pride. For anyone who wanted clothes that felt like them.
      Every stitch carried care, every design told a story. And slowly, what began as a boutique grew into a trusted name in Chennai.
    </p>
    <button
      className="w-[200px] mt-5 mb-6 px-6 py-3 bg-yellow-500 text-white text-2xl rounded-full shadow-lg hover:bg-yellow-600 transition"
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
