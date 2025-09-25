import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Tailoring() {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const hanger = document.getElementById('tailor-hanger');
    const line = document.getElementById('tailor-line');

    const updateLine = () => {
      if (!hanger || !line) return;

      const hangerRect = hanger.getBoundingClientRect();
      const parentRect = line.offsetParent.getBoundingClientRect();

      // distance from right edge to hanger hook
      const hookX = hangerRect.left + hangerRect.width / 2;
      const width = parentRect.right - hookX; // rightmost - hook position
      setLineWidth(width + 30); // add a bit extra for aesthetic
    };

    const handleScroll = () => {
      const rect = hanger.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        updateLine();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateLine);

    // initial update
    updateLine();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateLine);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f0eee0] font-['Cormorant_Garamond'] py-6 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-0 w-full">

        {/* Left side text */}
        <div className="flex flex-col items-start justify-center pl-6 lg:pl-[180px] xl:pl-[200px]">
          <h2 className="text-[36px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-bold text-[#6f4a86] whitespace-nowrap">
            Creative Tailoring Design
          </h2>
          <p className="mt-4 text-[20px] md:text-[22px] lg:text-[30px] italic font-['Cormorant_Garamond'] text-[#6f4a86] leading-relaxed">
            Master the skill of tailoring with hands-on practice.
          </p>
          <p className="mt-6 max-w-[560px] text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86]">
            If you love the precision and technique behind making clothes, this course focuses on the craft of tailoring. Designed for learners who want deeper technical expertise, this program gives you confidence in working with a variety of garments.
          </p>
           <p className="mt-6 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86] max-w-full md:max-w-[700px]">
  <span className="font-bold">Duration:</span> 5 months<br/>
  <span className="font-bold">Class Schedule:</span> Weekend-only batches (Morning & Evening options available)
</p>

        </div>

        {/* Right side: Hanger + Line + Smudge */}
        <div className="relative w-full h-[460px]">
          {/* Smudge background */}
          <img
            src="/smudge_copy.webp"
            alt="background smudge"
            className="pointer-events-none absolute top-0 right-0 h-full max-h-[620px] w-auto opacity-50 select-none z-0"
          />

          {/* Growing Line */}
          <div
            id="tailor-line"
            className="absolute bg-black h-[2px] z-10 transition-all duration-1000 ease-out"
            style={{
              top: '35px',
              right: '0px',
              width: `${lineWidth}px`,
            }}
          />

          {/* Hanger */}
          <motion.div
            id="tailor-hanger"
            className="absolute w-[400px] md:w-[440px] lg:w-[480px] h-[400px] md:h-[440px] opacity-100 z-20"
            style={{
              top: '0px',
              left: window.innerWidth >= 768 && window.innerWidth < 1024 ? '25px' : 'auto',
              right: window.innerWidth >= 1024 ? '0px' : 'auto',
            }}
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/hangernew1.webp"
              alt="hanger"
              className="w-full h-full object-contain select-none"
            />
          </motion.div>

          {/* Dress stand */}
          <img
            src="/dress stand.webp"
            alt="dress stands"
            className="hidden md:block absolute -bottom-10 -right-12 w-28 opacity-90 select-none z-10"
          />
        </div>
      </div>
    </section>
  );
}
