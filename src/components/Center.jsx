import React from "react"; 
import Scissor1 from "../assets/Scissors1.webp";
import Scissor2 from "../assets/Scissors2.webp";

export default function Center() {
  return (
    <section className="py-[200px] bg-[#f0eee0]">
      {/* Top Scissor */}
   <div className="flex justify-center items-center p-4">
  <img
  src={Scissor1}
  alt="test"
  className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1200px]"
/>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12 mb-2">
        {/* Top Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 w-full">
          <button className="bg-transparent text-2xl lg:text-4xl xl:text-5xl pt-6 font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            The Studio
          </button>
          <button className="bg-transparent text-2xl lg:text-4xl xl:text-5xl pt-6 font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Courses
          </button>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-[#4b284b]">
            AD
          </h1>
          <p className="italic text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-6 text-[#4b284b]">
            School of Fashion
          </p>
        </div>

        {/* Bottom Row - 3 buttons in same line */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-12 w-full">
          <button className="bg-transparent text-2xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Community Works
          </button>
          <button className="bg-transparent text-2xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Our Story
          </button>
          <button className="bg-transparent text-2xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Showcases
          </button>
        </div>
      </div>

      {/* Bottom Scissor */}
      <div className="flex justify-center items-center p-4">
        <img
          src={Scissor2}
          alt=""
          className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1200px]"
        />
      </div>
    </section>
  );
}
