import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FashionDesigning() {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const line = document.getElementById('hanger-line');
    const hanger = document.getElementById('hanger-container');

    const handleScroll = () => {
      if (!line || !hanger) return;
      const rect = hanger.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger when hanger comes into view
      if (rect.top < windowHeight * 0.9) {
        const fullWidth = rect.left + rect.width / 2; // distance from left edge to hook
        setLineWidth(fullWidth);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once in case already visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f0eee0] font-['Cormorant_Garamond']">
      {/* Smudge background */}
      <img
        src="/smudge.webp"
        alt="background smudge"
        className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-50 select-none z-0"
      />

      {/* Line that grows on scroll */}
      {/* Line that grows on scroll */}
<div
  id="hanger-line"
  className="absolute bg-[#4b284b] h-[2px] z-30 transition-all duration-1000 ease-out"
  style={{
    top: '110px',
    left: '0px',
    width: `${Math.max(lineWidth + 30, 200)}px`, // ensures min width of 200px for mobile
  }}
/>



      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 lg:py-16 xl:py-20 relative z-20">
        {/* Left: Hanger + Dress Stand */}
        <div className="relative w-full flex items-start justify-start">
          {/* Hanger with animation */}
          <motion.div
  id="hanger-container"
  className="relative w-[400px] md:w-[440px] lg:w-[480px] h-[400px] md:h-[440px] opacity-100 -translate-y-8 md:-translate-x-18 z-20
             -translate-x-4 md:-translate-x-18" // mobile shift slightly left
  animate={{ rotate: [2, -2, 2] }}
  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
>
  <img
    src="/hanger_1.webp"
    alt="hanger"
    className="w-full h-full object-contain select-none"
  />
</motion.div>


          {/* Dress stand */}
          <img
            src="/dress stand.webp"
            alt="dress stands"
            className="hidden md:block absolute -bottom-10 -left-12 w-28 opacity-90 select-none z-20"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col items-start justify-center md:pl-6 lg:pl-12">
          <h2 className="text-[28px] md:text-[32px] lg:text-[30px] xl:text-[40px] font-bold font-['Cormorant_Garamond'] text-[#6f4a86] xl:whitespace-nowrap">
            Creative Fashion Design
          </h2>
          <p className="mt-4 text-[20px] md:text-[22px] lg:text-[30px] italic font-['Cormorant_Garamond'] text-[#6f4a86]">
            Learn the art of fashion from idea to creation.
          </p>
          <p className="mt-6 max-w-[560px] text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86]">
            This intensive short-term program is perfect for beginners who want a solid foundation in fashion design. Over three months, you’ll explore both creativity and craft, with classes that combine practical training and artistic exploration.
          </p>
         <p className="mt-6 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86] max-w-full md:max-w-[700px]">
  <span className="font-bold">Duration:</span> 3 months<br/>
  <span className="font-bold">Class Schedule:</span> 2-hour sessions, <br/>flexible batch timings
</p>


        </div>
      </div>
    </section>
  );
}
