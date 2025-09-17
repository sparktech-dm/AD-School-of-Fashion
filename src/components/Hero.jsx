export default function Hero() {
  return (
    <section className="relative bg-[#f0eee0] w-full flex flex-col md:flex-row items-center justify-between h-[800px]">
      {/* Left Content */}
      <div className="relative z-10 flex-1 px-8 md:px-16">
        <h1 className="text-5xl md:text-7xl font-bold" style={{ color: "#5a2d4b" }}>
          Master the Art of Tailoring
        </h1>
        <p className="mt-6 text-lg md:text-2xl" style={{ color: "#5a2d4b" }}>
          Learn fashion design, stitching, and embroidery with expert trainers.
          Join us to start your journey in the world of fashion.
        </p>
        <button
          className="mt-8 px-8 py-4 rounded-xl shadow-md transition text-lg md:text-xl"
          style={{ backgroundColor: "#5a2d4b", color: "white" }}
        >
          Join Now
        </button>
      </div>

      {/* Right Image in Oval */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 md:px-16">
        <div className="w-72 md:w-96 h-96 md:h-[32rem] rounded-full bg-[#f0eee0] shadow-xl flex items-center justify-center overflow-hidden">
          {/* Replace with your sketch image */}
          <img
            src="./women model.png"
            alt="Tailoring Sketch"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Left Decorative Dress Sketch */}
      <img
        src="./dress with ancor.png"
        alt="Dress Sketch"
        className="absolute bottom-[-450px] left-[-400px] w-100 h-70 opacity-100 pt-82"
      />
    </section>
  );
}