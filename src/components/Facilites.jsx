import React from 'react';

export default function Facilites() {
  return (
    <section className="bg-[#f0eee0] py-20">
      {/* Section Title */}
      <h2 className='text-7xl font-extrabold font-cormorant md:text-7xl text-center text-[#5b2a59] mb-16'>
        Facilities
      </h2>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 w-full px-6">
        
        {/* Facility 1 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./facilities1.webp' 
            alt="Equipped Classrooms" 
            className="w-[400px] sm:w-[350px] mb-4 object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
          />
          <p className="italic font-bold font-cormorant md:text-3xl sm:text-2xl text-[#5b2a59]">
            Equipped Classrooms
          </p>
        </div>

        {/* Facility 2 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./facilities2.webp' 
            alt="Draping Lab" 
            className="w-[400px] sm:w-[350px] mb-4 object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
          />
          <p className="italic font-bold font-cormorant md:text-3xl sm:text-2xl text-[#5b2a59]">
            Draping Lab
          </p>
        </div>

        {/* Facility 3 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./facilities3.webp' 
            alt="Sewing Lab" 
            className="w-[400px] sm:w-[350px] mb-4 object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
          />
          <p className="italic font-bold font-cormorant md:text-3xl sm:text-2xl text-[#5b2a59]">
            Sewing Lab
          </p>
        </div>

        {/* Facility 4 */}
        <div className="flex flex-col items-center text-center">
          <img 
            src='./facilities4.webp' 
            alt="Digital Lab" 
            className="w-[400px] sm:w-[350px] mb-4 object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
          />
          <p className="italic font-bold font-cormorant md:text-3xl sm:text-2xl text-[#5b2a59]">
            Digital Lab
          </p>
        </div>

      </div>
    </section>
  );
}
