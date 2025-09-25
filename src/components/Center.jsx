import React from "react"; 
import Scissor1 from "../assets/Scissors1.webp";
import Scissor2 from "../assets/Scissors2.webp";

export default function Center() {
  return (
    <section className="py-32 bg-[#f0eee0]">
   <div
  className="hidden md:block absolute inset-0 w-full h-full z-0 bg-no-repeat bg-right bg-cover opacity-50 pointer-events-none top-[500px]"
  style={{ backgroundImage: "url('./width smudge copy.webp')" }}
  aria-hidden="true"
/>


      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-12 mb-2">
        {/* Row: The Studio (left), Logo (center), Courses (right) */}
<div className="relative w-full flex items-end" style={{ minHeight: "180px" }}>
  <button
    className=" absolute bottom-0 left-0 md:left-12 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
  >
    The Studio
  </button>

 <div className="mx-auto flex flex-col items-center pl-4 md:pl-10">
  <h1 className="text-4xl lg:text-8xl font-extrabold font-cormorant text-[#4b284b]">
    AD
  </h1>
  <p className="italic text-2xl lg:text-6xl pb-2 lg:pb-4 text-[#4b284b] text-center">
    School of Fashion
  </p>
</div>


  <button
    className="absolute bottom-0 right-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2"
  >
    Courses
  </button>
</div>

        {/* Bottom Row - 3 buttons */}
       <div className="flex flex-nowrap justify-center gap-4 lg:gap-12 w-full overflow-x-hidden">
  <button className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
    Community Works
  </button>
  <button className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
    Our Story
  </button>
  <button className="flex-shrink-0 min-w-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
    Showcases
  </button>
</div>


      </div>
    </section>
  );
}
