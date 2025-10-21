import React from 'react'

export default function Facilites() {
  return (
    <section className="relative bg-[#f0eee0] py-32 overflow-hidden">
      {/* Smudge Background */}
      <div
  className="hidden md:block absolute inset-0 w-[1900px] h-[900px] z-0 bg-no-repeat bg-right bg-cover opacity-60 pointer-events-none top-0"
  style={{ backgroundImage: "url('./width smudge copy.webp')" }}
  aria-hidden="true"
/>
      <div
  className="md:hidden absolute inset-0 w-full h-full z-0 bg-no-repeat bg-center md:bg-right bg-cover opacity-60 pointer-events-none top-0"
  style={{ backgroundImage: "url('./width smudge copy.webp')" }}
  aria-hidden="true"
/>

      {/* Section Title */}
      <h2 className='relative text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-10 z-10'>
        Fashion with Purpose
      </h2>
      <p
        className="italic font-bold font-cormorant text-center text-4xl md:text-3xl mb-6"
        style={{ color: "#5a2d4b" }}
      >
        Fashion isn’t only for models or magazines. It begins with the courage to cut your own fabric.
      </p>
      <br />

      {/* Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-28 w-full px-6 z-10">
        {/* Facility 1 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./stamp 1.webp' 
            alt="Facility 1" 
            className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4"
          />
        </div>

        {/* Facility 2 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./stamp 2.webp' 
            alt="Facility 2" 
            className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4"
          />
        </div>

        {/* Facility 3 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./stamp 3.webp' 
            alt="Facility 3" 
            className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4"
          />
        </div>

        {/* Facility 4 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./stamp 4.webp' 
            alt="Facility 4" 
            className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4"
          />
        </div>
      </div>
    </section>
  )
}
