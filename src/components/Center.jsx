import React from "react"; 
import Scissor1 from "../assets/Scissors1.webp";
import Scissor2 from "../assets/Scissors2.webp";

export default function Center() {
  return (
    <section className="py-32 bg-[#f0eee0]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-12 mb-2">
        {/* Row: The Studio (left), Logo (center), Courses (right) */}
        <div className="relative w-full flex items-end" style={{ minHeight: "180px" }}>
          <button className="absolute bottom-0 left-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            The Studio
          </button>
          <div className="mx-auto flex flex-col items-center">
            <h1 className="text-6xl lg:text-8xl font-extrabold font-cormorant text-[#4b284b]">
              AD
            </h1>
            <p className="italic text-4xl lg:text-6xl pb-4 text-[#4b284b]">
              School of Fashion
            </p>
          </div>
          <button className="absolute bottom-0 right-0 italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl xl:text-5xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Courses
          </button>
        </div>
        {/* Bottom Row - 3 buttons */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-12 w-full">
          <button className="italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Community Works
          </button>
          <button className="italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Our Story
          </button>
          <button className="italic font-bold font-cormorant bg-transparent text-3xl lg:text-4xl font-medium text-[#4b284b] hover:text-[#6d3d55] transition cursor-pointer border-none shadow-none before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2">
            Showcases
          </button>
        </div>
      </div>
    </section>
  );
}
