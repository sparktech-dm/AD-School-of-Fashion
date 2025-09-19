import Navbar from '../../components/Navbar';

export default function CoursesHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#f0eee0]">
      {/* Smudge Effect Background */}
      <img
        src="./smudge.webp" // <-- your smudge effect image
        alt="Smudge Effect"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Navbar */}
      <Navbar />

      {/* Left Design Image */}
      <img
        src="./triangle wave.webp"
        alt="Design Left"
        className="absolute left-20 top-1/2 transform -translate-y-1/2 rotate-90 w-48 md:w-72 h-auto z-10"
      />

      {/* Dress Image at Right */}
      <img
        src="./women dress on stand.webp"
        alt="Dress Right"
        className="absolute top-11 right-0 bottom-0 h-full w-auto z-10"
        style={{ objectFit: 'contain', marginRight: '-21rem' }} // Adjust -2rem as needed
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-32 md:pt-40">
        {/* Big Main Image Centered */}
       <div className="relative flex justify-center items-center w-full">
          <img
            src="./web box.webp" // <-- your main big image
            alt="Courses Hero"
            className="w-80 md:w-[32rem] lg:w-[40rem] h-auto mx-auto z-20 rounded-3xl shadow-2xl"
            style={{ position: 'relative' }}
          />
        </div>
        {/* Centered Content Below Main Image */}
        <div className="mt-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5a2d4b] text-center mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl text-[#79548a] text-center max-w-2xl">
            Discover a variety of tailoring, fashion design, and embroidery courses designed for all skill levels. Learn from expert trainers and start your creative journey today!
          </p>
        </div>
      </div>
    </section>
  );
}