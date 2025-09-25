import React from "react";

const MissionVision = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-cover bg-center bg-[#f0eee0]"
      // style={{ backgroundImage: `url('/smudge.webp')`, }}
    >
      {/* Decorative Images */}
      <img src="/shirt hanging.webp" alt="" className="absolute top-5 left-6 w-40 md:w-56" />


      <div className="max-w-6xl mx-auto space-y-12">
       <h2 className='relative text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-10 z-10'>
        Opening Doors with AD School of Fashion
      </h2>
       <p
            className="italic font-bold font-cormorant text-center text-xl md:text-3xl mb-6"
            style={{ color: "#5a2d4b" }}
          >
            As we grew, we saw something beautiful: people didn’t just want to wear fashion, they wanted to learn it.
          </p><br></br>
           <p
            className="italic font-bold font-cormorant text-center text-xl md:text-3xl mb-6"
            style={{ color: "#5a2d4b" }}
          >
            That’s how AD School of Fashion was born.
          </p><br></br>
           <p
            className="italic font-bold font-cormorant text-center text-xl md:text-3xl mb-6"
            style={{ color: "#5a2d4b" }}
          >
           We built the school for dreamers of all kinds; the 12-year-old sketching gowns in her notebook, the homemaker eager to try something new, the professional looking for a second career.<br></br>
Here, students don’t just learn how to stitch, illustrate, or tailor. They learn to create something that feels like theirs. They walk out not just with skills, but with confidence and sometimes, even a whole new direction in life.

          </p>


        
      </div>
    </section>
  );
};

export default MissionVision;
