import Scissor1 from "../assets/Scissors1.webp";
import Scissor2 from "../assets/Scissors2.webp";
import { useNavigate } from "react-router-dom";
import Facilites from "./Facilites";
import React from "react";

export default function Center() {
  const navigate = useNavigate();

  const scrollToShowcases = () => {
    const element = document.getElementById("showcases");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCommunityworks = () => {
    const element = document.getElementById("comunityworks");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-32 bg-[#f0eee0] relative overflow-x-hidden">
      {/* Background image (hidden on mobile) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full z-0 bg-no-repeat bg-right bg-cover opacity-50 pointer-events-none"
        style={{ backgroundImage: "url('./width smudge copy.webp')" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col gap-8 md:gap-12 mb-2 relative z-10">
        {/* Top Row */}
        <div className="relative w-full flex flex-row items-end justify-between min-h-[120px] md:min-h-[180px]">
          <button
  onClick={() => navigate('/')}
  className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-base sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
>
  The Studio
</button>

          <div className="flex flex-col items-center px-2 flex-grow min-w-0">
            <h1 className="text-xl sm:text-3xl md:text-6xl lg:text-8xl font-extrabold font-cormorant text-[#4b284b] truncate">
              AD
            </h1>
            <p className="italic font-cormorant font-bold sm:text-xl md:text-4xl lg:text-6xl pb-2 lg:pb-4 text-[#4b284b] text-center truncate">
              School of Fashion
            </p>
          </div>

         <button
  onClick={() => navigate('./courses')}
  className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-base sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
>
  Courses
</button>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 lg:gap-12 w-full">
          <button
            onClick={scrollToCommunityworks}
            className="flex-shrink-0 min-w-0 italic  font-cormorant bg-transparent text-base sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
          >
            Community<br />Works
          </button>

          <button
            onClick={() => navigate("/about")}
            className="flex-shrink-0 min-w-0 italic  font-cormorant bg-transparent text-base sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
          >
            OurStory
          </button>

          <button
            onClick={scrollToShowcases}
            className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-base sm:text-2xl md:text-4xl lg:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
          >
            Showcases
          </button>
        </div>
      </div>
    </section>
  );
}
