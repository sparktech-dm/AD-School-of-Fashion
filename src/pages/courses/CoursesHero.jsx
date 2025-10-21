import Navbar from '../../components/Navbar';

export default function CoursesHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#f0eee0]">
      {/* Smudge Effect Background */}
      <img
        src="./smudge.webp"
        alt="Smudge Effect"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dress Image at Right */}
      <img
        src="./women dress on stand.webp"
        alt="Dress Right"
        className="absolute top-8 right-10 z-10 h-72 md:h-96 lg:h-[40rem] object-contain"
        style={{ marginRight: '-21rem' }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-10 md:pt-40">
        {/* Main Image without surrounding div */}
        <img
  src="./course_main.webp"
  alt="Courses Hero"
  className="w-96 md:w-[36rem] lg:w-[48rem] h-auto mx-auto z-20"
/>


        {/* Centered Content Below Main Image */}
        <div className="mt-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5a2d4b] text-center mb-4 font-['Cormorant_Garamond']">
            Explore Our Courses
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-[#5a2d4b] text-center max-w-2xl font-['Cormorant_Garamond'] leading-relaxed">
            At AD School of Fashion, we believe learning fashion should be both exciting and practical. 
            Our courses are designed for anyone who wants to explore creativity while building industry-ready skills. 
            Whether you’re just starting out or looking to sharpen your expertise, our programs help you 
            turn your passion into confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
