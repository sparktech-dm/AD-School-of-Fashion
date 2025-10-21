import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Tailoring() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const hanger = document.getElementById('tailor-hanger');
    const line = document.getElementById('tailor-line');
    const container = line?.offsetParent;

    const updateLine = () => {
      if (!hanger || !line || !container) return;

      const hangerLeft = hanger.getBoundingClientRect().left - container.getBoundingClientRect().left;
      const width = hangerLeft + hanger.offsetWidth / 2;

      setLineWidth(width > 0 ? width : 0);

      const hookY = hanger.getBoundingClientRect().top + hanger.offsetHeight * 0.1 - container.getBoundingClientRect().top;
      line.style.top = `${hookY}px`;
    };

    window.addEventListener('scroll', updateLine);
    window.addEventListener('resize', updateLine);
    updateLine();

    return () => {
      window.removeEventListener('scroll', updateLine);
      window.removeEventListener('resize', updateLine);
    };
  }, [isMobile]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f0eee0] font-['Cormorant_Garamond'] py-12">
      <div className={`flex flex-col md:flex-row items-center md:items-start w-full gap-8 px-6 lg:px-12`}>

        {/* Left: Text content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 gap-6">
          <h2 className="text-7xl font-bold text-[#5a2d4b]">
            5-Month Tailoring Training
          </h2>
          <p className="text-4xl italic text-[#5a2d4b]">
            Master the skill of tailoring with hands-on practice.
          </p>
          <p className="text-2xl leading-relaxed text-[#5a2d4b]">
            If you love the precision and technique behind making clothes, this course focuses on the craft of tailoring. Designed for learners who want deeper technical expertise, this program gives you confidence in working with a variety of garments.
          </p>

          {/* Bullet points */}
          <ul className="list-disc list-inside text-2xl leading-relaxed text-[#5a2d4b] columns-1 md:columns-2 gap-4">
            <li><span className="font-bold">Sewing Machine Anatomy:</span> Get comfortable with the tools of the trade</li>
            <li><span className="font-bold">Pattern Drafting:</span> From standard measurements to perfect fits</li>
            <li><span className="font-bold">Garment Construction:</span> Practice with kidswear, womenswear, menswear, and blouses</li>
          </ul>

          <p className="text-2xl leading-relaxed text-[#5a2d4b]">
            <span className="font-bold">Duration:</span> 5 months<br />
            <span className="font-bold">Class Schedule:</span> Weekend-only batches (Morning & Evening options available)
          </p>
        </div>

        {/* Right: Hanger + line + smudge */}
        <div className="relative w-full md:w-1/2 h-[500px] flex justify-center md:justify-end">
          {/* Smudge */}
          <img
            src="/fashion bg smudge.png"
            alt="hanger smudge"
            className="pointer-events-none absolute right-0 top-0 w-auto h-full max-h-[600px] opacity-50 select-none z-0"
          />

          {/* Line from hanger right edge */}
          <div
            id="tailor-line"
            className="absolute bg-black h-[2px] z-20 transition-all duration-1000 ease-out"
            style={{ right: 0, width: `${lineWidth}px` }}
          />

          {/* Hanger animation */}
          <motion.div
            id="tailor-hanger"
            className="absolute opacity-100 z-20 md:top-0"
            style={{
              width: isMobile ? '300px' : '440px',
              height: isMobile ? '300px' : '480px',
              top: isMobile ? '0' : undefined,
              right: '0px',
            }}
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/new.webp"
              alt="hanger"
              className="w-full h-full object-contain select-none"
            />
          </motion.div>

          {/* Dress stand */}
          <img
            src="/dress stand.webp"
            alt="dress stands"
            className="hidden md:block absolute w-28 opacity-90 select-none z-10"
            style={{
              bottom: '-2.5rem',
              right: '0px',
            }}
          />
        </div>
      </div>
    </section>
  );
}
