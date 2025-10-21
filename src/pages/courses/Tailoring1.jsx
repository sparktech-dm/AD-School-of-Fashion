import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Tailoring() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update line width and position
  useEffect(() => {
    const hanger = document.getElementById('tailor-hanger');
    const line = document.getElementById('tailor-line');
    const container = line?.offsetParent;

    const updateLine = () => {
      if (!hanger || !line || !container) return;

      const hangerRect = hanger.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Hook position relative to container
      const hookX = hangerRect.left + hangerRect.width / 2 - containerRect.left;
      const hookY = hangerRect.top + hangerRect.height * 0.1 - containerRect.top;

      // Width from hook to container right, larger on mobile
      let width = containerRect.width - hookX + (isMobile ? 100 : 50); // increased extra width for mobile

      setLineWidth(width > 0 ? width : 0);

      // Set line top to hookY
      line.style.top = `${hookY}px`;
    };

    window.addEventListener('scroll', updateLine);
    window.addEventListener('resize', updateLine);
    updateLine(); // initial

    return () => {
      window.removeEventListener('scroll', updateLine);
      window.removeEventListener('resize', updateLine);
    };
  }, [isMobile]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f0eee0] font-['Cormorant_Garamond'] py-6 lg:py-12">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 px-6 lg:px-0 w-full">
        {/* Left side: text */}
        <div className="flex flex-col items-start justify-center pl-0 md:pl-6 lg:pl-[180px] xl:pl-[200px]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[30px] xl:text-[40px] font-bold text-[#6f4a86]">
            Creative Tailoring Design
          </h2>
          <p className="mt-4 text-[20px] md:text-[22px] lg:text-[30px] italic text-[#6f4a86] leading-relaxed">
            Master the skill of tailoring with hands-on practice.
          </p>
          <p className="mt-6 max-w-[560px] text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86]">
            If you love the precision and technique behind making clothes, this course focuses on the craft of tailoring. Designed for learners who want deeper technical expertise, this program gives you confidence in working with a variety of garments.
          </p>
          <p className="mt-6 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#6f4a86] max-w-full md:max-w-[700px]">
            <span className="font-bold">Duration:</span> 5 months<br />
            <span className="font-bold">Class Schedule:</span> Weekend-only batches (Morning & Evening options available)
          </p>
        </div>

        {/* Right side: hanger + line + smudge */}
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
              right: '0px',
              width: `${lineWidth}px`,
            }}
          />

          {/* Hanger with swing animation */}
          <motion.div
            id="tailor-hanger"
            className="absolute md:h-[440px] opacity-100 z-20"
            style={{
              top: '0px',
              left: isMobile ? '15%' : '10%', // moved hanger to left on mobile
              width: isMobile ? '300px' : '400px', // bigger hanger on mobile
              height: isMobile ? '300px' : '440px',
              transform: 'none', // no translate for mobile left
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
