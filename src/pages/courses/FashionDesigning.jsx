import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FashionDesigning() {
  const [lineWidth, setLineWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const line = document.getElementById('hanger-line');
    const hanger = document.getElementById('hanger-container');

    const handleScroll = () => {
      if (!line || !hanger) return;
      const rect = hanger.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.9) {
        const fullWidth = rect.left + rect.width / 2;
        setLineWidth(fullWidth);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
      <div
        id="hanger-line"
        className="absolute bg-[#4b284b] h-[2px] z-30 transition-all duration-1000 ease-out"
        style={{
          top: isMobile ? '80px' : '110px',
          left: '0px',
          width: `${Math.max(lineWidth + 40, 200)}px`,
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 xl:py-20 relative z-20 flex flex-col md:flex-row gap-8">
        {/* Left: Hanger + Dress Stand */}
        <div className={`relative flex ${isMobile ? 'justify-center mb-6' : 'justify-start'} w-full md:w-1/2`}>
          <motion.div
            id="hanger-container"
            className={`z-20 ${isMobile ? 'relative' : 'absolute -translate-y-8'}`}
            style={{
              width: isMobile ? '300px' : '480px',
              height: isMobile ? '300px' : '480px',
              top: 0,
              left: isMobile ? '0' : '-4%',
              transform: isMobile ? 'none' : 'translateX(-50%)',
            }}
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/hanger_1.webp"
              alt="hanger"
              className="w-full h-full object-contain select-none"
            />
          </motion.div>

          <img
            src="/dress stand.webp"
            alt="dress stands"
            className="hidden md:block absolute -bottom-10 -left-12 w-28 opacity-90 select-none z-20"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-x-6 gap-y-2">
            <h2 className="text-[28px] md:text-7xl font-bold text-[#5a2d4b] w-full md:w-auto">
              3-Month Fashion Design Training
            </h2>
            <br />
          </div>
          <p className="text-[20px] md:text-3xl italic text-[#5a2d4b] w-full md:w-auto">
              Learn the art of fashion from idea to creation.
            </p>
          <br />

          <p className="text-[18px] md:text-3xl leading-relaxed text-[#5a2d4b]">
            This intensive short-term program is perfect for beginners who want a solid foundation in fashion design. Over three months, you’ll explore both creativity and craft, with classes that combine practical training and artistic exploration.
          </p>

          {/* Bullet points compact, wrapped in two columns on desktop */}
          <ul className="list-disc list-inside text-[18px] md:text-2xl leading-relaxed text-[#5a2d4b] columns-1 md:columns-2 gap-4">
            <li><span className="font-bold">Fashion Illustration:</span> Put your ideas on paper</li>
            <li><span className="font-bold">Pattern Making:</span> Shape your designs with accuracy</li>
            <li><span className="font-bold">Draping Techniques:</span> Bring fabric to life on mannequins</li>
            <li><span className="font-bold">Garment Construction:</span> Stitch your first creations</li>
            <li><span className="font-bold">Sewing Methods:</span> Handle tools and machines with ease</li>
            <li><span className="font-bold">Hand Embroidery:</span> Add detail and personality to designs</li>
            <li><span className="font-bold">Portfolio Development:</span> Build your first professional showcase</li>
          </ul>

          <p className="text-[18px] md:text-3xl leading-relaxed text-[#5a2d4b]">
            <span className="font-bold">Duration:</span> 3 months<br />
            <span className="font-bold">Class Schedule:</span> 2-hour sessions, flexible batch timings
          </p>
        </div>
      </div>
    </section>
  );
}
