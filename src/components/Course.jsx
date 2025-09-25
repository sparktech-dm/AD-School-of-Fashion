import React from "react";
import Learn1 from "../assets/Learn1.webp";
import Learn2 from "../assets/Learn2.webp";
import { useNavigate } from 'react-router-dom';

export default function Center() {
  const navigate = useNavigate();

  const navigateToCourses = () => navigate('/courses');

  return (
    <section className="pt-10 bg-[#f0eee0]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-7xl md:text-4xl lg:text-5xl text-[#4b284b] font-extrabold font-cormorant">
          Our Courses
        </h2>
      </div>

      {/* Images Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start overflow-hidden rounded-2xl">
          <button
            onClick={navigateToCourses}
            className="focus:outline-none bg-transparent p-0"
          >
            <img
              src={Learn1}
              alt="Left"
              className="w-full h-auto rounded-2xl animate-float bg-[#f0eee0]"
            />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end overflow-hidden rounded-2xl">
          <button
            onClick={navigateToCourses}
            className="focus:outline-none bg-transparent p-0"
          >
            <img
              src={Learn2}
              alt="Right"
              className="w-full h-auto rounded-2xl animate-float delay-200 bg-[#f0eee0]"
            />
          </button>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
