import React from "react";

export default function About() {
  return (
    <section className="relative w-full flex flex-col items-center bg-[#f0eee0] py-16">
      {/* Top Center Main Image */}
      <img
        src="./about top.png"
        alt="About Main"
        className="w-[300px] h-[250px]"
      />

      <div className="flex flex-col md:flex-row w-full mx-auto min-h-[600px]">
        {/* Left Side Content */}
        <div className="flex-[2] flex flex-col justify-center items-center md:items-start px-8 py-6 ml-auto md:ml-20 text-center md:text-left">
         <h2 className='relative text-5xl sm:text-5xl md:text-5xl lg:text-7xl lg:pl-[25rem] lg:pb-10 font-extrabold font-cormorant text-center text-[#5b2a59] mb-10 z-10'>
            About
          </h2><br/>
         <p
  className="italic font-medium font-cormorant text-center text-base sm:text-lg md:text-2xl lg:text-3xl mb-6"
  style={{ color: "#5a2d4b" }}
>
            Fashion isn’t only for models or magazines. It begins with the courage to cut your own fabric.
          </p><br/>
          <p
  className="italic font-bold font-cormorant text-center text-base sm:text-lg md:text-2xl lg:text-3xl mb-6"
  style={{ color: "#5a2d4b" }}
>
            Our studios feel like a sketchbook brought to life full of fabric, color, and ideas. With kind mentors, practical training, and a creative community, you’ll learn to transform your imagination into real fashion pieces. At AD School of Fashion, we open our doors to dreamers of every age.
          </p>
        </div>

        {/* Right Side Splash and Images */}
        <div className="relative flex-[1.5] flex items-center justify-center px-18 py-14 ">
          {/* Splash Background Image */}
          <div className="relative w-full max-w-[40rem] h-auto aspect-square -mt-10">
            <img
              src="./about bg splash.png"
              alt="Splash Background"
              className="w-full h-full object-cover opacity-70"
              style={{ filter: "blur(2px)" }}
            />
           {/* Four images positioned closer inside splash */}
<img
  src="./frame 1.webp"
  alt="About 1"
  className="absolute top-8 left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-60"
/>
<img
  src="./frame 2.webp"
  alt="About 2"
  className="absolute top-8 right-8 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-60"
/>
<img
  src="./frame 3.webp"
  alt="About 3"
  className="absolute bottom-8 left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-60"
/>
<img
  src="./frame 4.webp"
  alt="About 4"
  className="absolute bottom-8 right-8 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-60"
/>


          </div>
        </div>
      </div>
    </section>
  );
}
