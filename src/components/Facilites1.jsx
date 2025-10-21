import React from 'react'

export default function Facilites() {
  return (
    <section className="bg-[#f0eee0] py-20">
      {/* Section Title */}
      <h2 className='text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-16'>Facilities</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-28 w-full px-6">
      {/* Facility 1 */}
<div className="flex flex-col items-center text-center">
  <img 
    src='./facilities1.png' 
    alt="Facility 1" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg"
  />
  <p className="italic font-bold font-cormorant text-5xl sm:text-2xl text-[#5b2a59]">
    Modern Sewing Machines
  </p>
</div>

{/* Facility 2 */}
<div className="flex flex-col items-center text-center">
  <img 
    src='./facilities2.png' 
    alt="Facility 2" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg"
  />
  <p className="italic font-bold font-cormorant text-5xl sm:text-2xl text-[#5b2a59]">
    Creative Studio Space
  </p>
</div>

{/* Facility 3 */}
<div className="flex flex-col items-center text-center">
  <img 
    src='./facilities3.png' 
    alt="Facility 3" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg"
  />
  <p className="italic font-bold font-cormorant text-5xl sm:text-2xl text-[#5b2a59]">
    Expert Mentors
  </p>
</div>

{/* Facility 4 */}
<div className="flex flex-col items-center text-center">
  <img 
    src='./facilities4.png' 
    alt="Facility 4" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg"
  />
  <p className="italic font-bold font-cormorant text-5xl sm:text-2xl text-[#5b2a59]">
    Material & Fabric Library
  </p>
</div>



      </div>
    </section>
  )
}
