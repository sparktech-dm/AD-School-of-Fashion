import React from 'react';

const images = [
  { src: './1.webp', title: '' },
  { src: './7.webp', title: '' },
  { src: './3.webp', title: '' },
  { src: './12.webp', title: '' },
  { src: './4.webp', title: '' },
  { src: './6.webp', title: '' },
  { src: './8.webp', title: '' },
  { src: './2.webp', title: '' },
  { src: './9.webp', title: '' },
  { src: './10.webp', title: '' },
  { src: './11.webp', title: '' },
  { src: './5.webp', title: '' },
];

export const Gallery = () => {
  return (
    <section className="bg-[#f0eee0] py-20 px-6">
      {/* Section Title */}
      <h2 className="text-6xl mt-20 sm:text-7xl font-extrabold font-cormorant text-center text-[#5b2a59] mb-16">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-bold text-lg sm:text-xl">
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
