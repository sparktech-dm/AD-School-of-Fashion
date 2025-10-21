import React from "react";

const MissionVision = () => {
  return (
   <section
  className="relative py-10 px-6 md:px-12 bg-cover bg-center bg-[#f0eee0] overflow-x-hidden"
>
      {/* Decorative Images */}
      <img 
  src="/tailor1.png" 
  alt="" 
  className="
 hidden md:block absolute top-0 left-6 w-20 md:w-60 opacity-90" 
/>


      <div className="max-w-6xl mx-auto space-y-12">
       <h2 className='relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-10 z-10'>
        Fashion with Purpose
      </h2>
        <p
  className="italic font-medium font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
           At the heart of everything we do is one simple thought: fashion should lift people up.
          </p><br/>
           <p
  className="italic font-bold font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
           That’s why we treat education as empowerment, design as self-expression, and tradition as something worth protecting. Through our training programs and community initiatives, we try to make sure our work creates ripples that go beyond our studios and classrooms.
          </p><br />
           <p
  className="font-medium font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
Because at the end of the day, fashion isn’t just what you wear. It’s who you are. And we’re here to help you find that.

          </p>


        
      </div>
    </section>
  );
};

export default MissionVision;
