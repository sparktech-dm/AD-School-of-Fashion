import { useScrollToEnquiry } from './useScrollToEnquiry';

export default function Hero() {
  const scrollToEnquiry = useScrollToEnquiry();

  return (
    <section className="relative min-h-[120vh] md:min-h-[800px] w-full overflow-x-hidden overflow-y-hidden bg-[#f0eee0] flex flex-col md:flex-row items-center justify-center pt-[50px]">
      
      {/* Left Content */}
      <div className="relative z-10 flex-[3] flex flex-col justify-center items-center md:items-start px-10 sm:px-8 md:px-10 lg:pl-32 xl:pl-60 2xl:pl-80 pr-10 h-auto md:h-full">
        <div  className="w-full">
          <h1
  className="font-cormorant  font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl "
  style={{ color: "#5a2d4b" }}
>
  FASHION is what you buy
STYLE is what you create
</h1>
<br />

<p
  className="italic font-cormorant mt-6 md:mt-4 text-base sm:text-xl md:text-xl lg:text-3xl xl:text-4xl text-center md:text-left"
  style={{ color: "#5a2d4b" }}
>
  Every stitch tells a story. Every colour carries a mood.
  <br />
  From everyday wear to special moments, we help you create designs that are as unique as you.
</p>

<br />

          {/* Button */}
          <div className="w-full flex justify-center md:justify-start ">
            <button
              className="font-cormorant mt-8 md:mt-6 px-10 py-5 md:px-8 md:py-4 rounded-3xl shadow-lg transition text-3xl  sm:text-2xl md:text-lg font-extrabold hover:scale-105 w-56 xl:w-[400px] xl:text-3xl"
              style={{ backgroundColor: "#5a2d4b", color: "white" }}
              onClick={scrollToEnquiry}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Image in Oval */}
     <div className="relative z-10 flex-[1] flex items-center justify-center px-2 sm:px-8 md:px-16 lg:pr-40 xl:pr-10 h-auto md:h-full ">
  <img
    src="./girl vector.png"
    alt="Tailoring Sketch"
    className="h-[660px] sm:h-[500px] md:h-[500px] lg:h-[500px] w-full object-contain max-w-[320px] sm:max-w-full md:max-w-[300px] lg:max-w-[300px] mt-8 md:mt-0 xl:w-[650px] xl:h-[650px]"
  />
</div>
<div
  className="block md:hidden absolute inset-0 w-full h-full z-0 bg-no-repeat bg-center bg-cover opacity-50 pointer-events-none top-[500px]"
  style={{ backgroundImage: "url('./fashion bg smudge.png')" }}
  aria-hidden="true"
/>
    </section>
  );
}
