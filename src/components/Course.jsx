import React from "react"; 
import Learn1 from"../assets/Learn1.webp";
import Learn2 from"../assets/Learn2.webp";
import Scissor1 from"../assets/Scissor1.webp";
import Scissor2 from"../assets/Scissor2.webp";

export default function Center() {
  return (
    <section className="pt-[250px] bg-[#f0eee0] ">
      <div>
        <div className="text-5xl text-[#4b284b] italic mt-14  ml-[600px]">Our Courses</div>
      </div>
      <div className="ml-[150px] grid grid-cols-2 items-center w-[1200px] mt-10">
      {/* Left Image */}
      <div className="flex justify-start">
        <button
      onClick={() => console.log("Left Image Clicked")} >
        <img src={Learn1} alt="Left" className="w-[500px] h-[300px]" />
        </button>
      </div>
      {/* Right Image */}
      <div className="flex justify-end">
        <button
      onClick={() => console.log("Left Image Clicked")} >
        <img src={Learn2} alt="Right" className="w-[500px] h-[300px]" />
        </button>
      </div>
    </div>
     
    </section>
  );
}
