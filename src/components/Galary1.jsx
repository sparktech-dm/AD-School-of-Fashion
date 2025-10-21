import React from 'react'

export default function Galary() {
  return (
    <>
    <section className="bg-[#f0eee0] py-20">
      {/* Section Title */}
      <h2 className='text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-16'>Gallery</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-28 w-full px-6">
        {/* Facility 1 */}
<div className="relative flex flex-col items-center text-center">
  <img 
    src='./gallery1.png' 
    alt="Facility 1" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg filter blur-[3px]"
  />
  <p className="absolute inset-0 flex items-center justify-center text-[#5a2d4b] text-3xl font-extrabold px-4 py-2 rounded-2xl max-w-max mx-auto">
    Modern Sewing Machines
  </p>
</div>

{/* Facility 2 */}
<div className="relative flex flex-col items-center text-center">
  <img 
    src='./gallery2.png' 
    alt="Facility 2" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg filter blur-[3px]"
  />
  <p className="absolute inset-0 flex items-center justify-center text-[#5a2d4b] text-3xl font-extrabold px-4 py-2 rounded-2xl max-w-max mx-auto">
    Creative Studio Space
  </p>
</div>

{/* Facility 3 */}
<div className="relative flex flex-col items-center text-center">
  <img 
    src='./gallery3.png' 
    alt="Facility 3" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg filter blur-[3px]"
  />
  <p className="absolute inset-0 flex items-center justify-center text-[#5a2d4b] text-3xl font-extrabold px-4 py-2 rounded-2xl max-w-max mx-auto">
    Expert Mentors
  </p>
</div>

{/* Facility 4 */}
<div className="relative flex flex-col items-center text-center">
  <img 
    src='./gallery4.png' 
    alt="Facility 4" 
    className="w-96 h-96 sm:w-80 sm:h-80 object-cover mb-4 rounded-2xl shadow-lg filter blur-[3px]"
  />
  <p className="absolute inset-0 flex items-center justify-center text-[#5a2d4b] font-extrabold text-3xl px-4 py-2 rounded-2xl max-w-max mx-auto">
    Material & Fabric Library
  </p>
</div>

      </div>
    </section>
    
    </>
  )
}
