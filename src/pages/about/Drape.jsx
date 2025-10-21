import React from "react";

const MissionVision = () => {
  return (
    <section
  className="relative py-10 px-6 md:px-12 bg-cover bg-center bg-[#f0eee0] overflow-x-hidden"
>
      {/* Decorative Images */}
      <img src="/fashion dress.webp" alt="" className="hidden md:block absolute top-5 right-0 w-70 h-40 md:w-56 pl-[2rem]" />


      <div className="max-w-6xl mx-auto space-y-12">
       <h2 className='relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-10 z-10'>
  Drape’N’Silk
</h2>
<p
  className="italic font-medium font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
  While we nurtured new beginnings, we also wanted to honor an old legacy. That’s how Drape’N’Silk came into being.
</p>
<br />
<p
  className="italic font-bold font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
  For us, a saree isn’t just six yards of silk. It’s heritage. It’s culture. It’s a story passed down through generations.
</p>
<br />
<p
  className="font-medium font-cormorant text-center text-base sm:text-lg md:text-2xl mb-6"
  style={{ color: "#5a2d4b" }}
>
  From our unit in Kanchipuram, artisans weave pure mulberry silk sarees by hand, just the way their ancestors did. Each saree takes hours, sometimes days — but the result is timeless. And as much as we celebrate the fabric, we celebrate the hands behind it. By supporting weaving communities with fair wages, training, and opportunities, we keep this heritage alive and thriving.
</p>


        
      </div>
    </section>
  );
};

export default MissionVision;
