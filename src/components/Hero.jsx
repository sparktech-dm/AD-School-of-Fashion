import { useScrollToEnquiry } from './useScrollToEnquiry';

export default function Hero() {
  const scrollToEnquiry = useScrollToEnquiry();

  return (
    <section className="relative min-h-[120vh] md:min-h-[800px] w-full overflow-x-hidden overflow-y-hidden bg-[#f0eee0] flex flex-col md:flex-row items-center justify-center pt-24 xl:pl-30 sd:pl-20">
      {/* Left Content */}
      <div className="relative z-10 flex-[3] flex flex-col justify-center items-center md:items-start px-5 sm:px-8 md:px-10 lg:pl-32 xl:pl-60 2xl:pl-80 pr-10 h-auto md:h-full">
        <div className="w-full">
          <h1
            className="font-cormorant text-5xl md:text-3xl font-extrabold text-center md:text-left lg:text-5xl xl:text-5xl"
            style={{ color: "#5a2d4b" }}
          >
            Fashion begins with YOU!
          </h1>
          <br />
          <p
            className="italic font-bold font-cormorant mt-6 md:mt-4 text-2xl md:text-xl text-center md:text-left lg:text-2xl xl:text-2xl"
            style={{ color: "#5a2d4b" }}
          >
            Every stitch tells a story. Every colour carries a mood.
            <br />
            From everyday wear to special moments, we help you create designs that are as unique as you.
          </p>
          <button
            className="font-cormorant mt-8 md:mt-6 px-12 md:px-8 py-6 md:py-4 rounded-3xl shadow-lg transition text-2xl md:text-lg font-extrabold hover:scale-105 w-60"
            style={{ backgroundColor: "#5a2d4b", color: "white" }}
            onClick={scrollToEnquiry}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Right Image in Oval */}
      <div className="relative z-10 flex-[1] flex items-center justify-center px-2 sm:px-8 md:px-16 lg:pr-40 xl:pr-10 h-auto md:h-full">
        <img
          src="./girl vector.png"
          alt="Tailoring Sketch"
          className="h-[500px] md:h-[400px] lg:h-[500px] w-full object-contain max-w-full md:max-w-[300px] lg:max-w-[300px]"
        />
      </div>

      {/* Bottom Left Decorative Dress Sketch */}
      <img
        src="./dress with ancor.png"
        alt="Dress Sketch"
        className="absolute left-[-400px] w-100 h-70 opacity-100 pt-80"
        style={{ objectFit: 'contain', marginLeft: '3rem' }}
      />
    </section>
  );
}
