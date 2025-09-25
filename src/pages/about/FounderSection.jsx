import React, { useState } from 'react'

const FOUNDER_IMG =
  'https://cdn.builder.io/api/v1/image/assets%2F3c4895d68caa4eefb874301c9fe8151d%2Ff96d490466a54c06938aba17760062ba?format=webp&width=800'
const DRESS_IMG =
  'https://cdn.builder.io/api/v1/image/assets%2F3c4895d68caa4eefb874301c9fe8151d%2F9677ff355b3b420dbee5ad20434b4048?format=webp&width=800'

export default function FounderSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="relative w-full bg-[#f0eee0] font-['Cormorant_Garamond']">
      {/* Decorative dress outline */}
      <img
        src={DRESS_IMG}
        alt="Dress outline"
        className="pointer-events-none select-none absolute right-4 top-6 w-28 sm:w-36 md:w-44 opacity-30 object-contain"
      />

      <div className="w-full px-6 sm:px-10 md:px-16 py-12 md:py-16 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-[#5a2d4b] tracking-[0.2em] font-extrabold text-2xl md:text-3xl mb-10">
          MEET OUR FOUNDER
        </h2>

        {/* Column layout */}
        <div className="flex flex-col items-center gap-6">
          {/* Photo */}
          <div className="relative w-[320px] sm:w-[352px] md:w-[380px] aspect-square">
            <img
              src={FOUNDER_IMG}
              alt="Founder portrait"
              className="block w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-[#5a2d4b] text-left w-full">
            <h3 className="font-extrabold tracking-[0.15em] text-2xl md:text-3xl mb-6 text-center">
              MS. SHANMUGAPRIYA
            </h3>

            <div className="space-y-6 text-[18px] md:text-[20px] leading-8 md:leading-10 w-full">
              {/* Always visible content */}
              <p>
                Behind every stitch and sketch at Aphrodite’s Drape is the vision of Ms.
                Shanmugapriya.
              </p>
              <p>
                Her love for fashion began long before Aphrodite’s Drape was born. With over 25
                years of experience in the industry, she has explored fashion from every angle — as
                a designer, a teacher, a stylist, and a mentor. What ties all these roles together
                is her belief that fashion is not just about clothing, but about confidence and
                identity.
              </p>
              <p>
                She spent years heading the Department of Fashion Design at a reputed college,
                where she shaped young talents into budding designers. She has also built
                educational institutions from the ground up, blending Indian and international
                curricula with the same care she puts into her designs.
              </p>

              {/* Hidden content */}
              {showMore && (
                <>
                  <p>
                    Her creativity found its way into cinema and celebrity styling too — where her
                    costumes and looks brought characters to life on screen and stars to life on
                    the red carpet.
                  </p>
                  <p>
                    But if there’s one thing that defines her, it is her passion for people. As the
                    Director of We Wonder Women – Chennai, she works to empower women
                    entrepreneurs. Through CSR sessions and grooming workshops, she continues to
                    mentor, encourage, and uplift — ensuring that her journey in fashion also lights
                    the path for others.
                  </p>
                  <p>
                    Today, under her leadership, Aphrodite’s Drape has grown into a brand that
                    blends artistry with purpose. Every creation that leaves our studio carries her
                    touch: a mix of creativity, compassion, and conviction.
                  </p>
                  <p>
                    For Ms. Shanmugapriya, fashion isn’t just what you wear. It is a way to express
                    who you are, and a way to inspire who you can become.{' '}
                    <span
                      onClick={() => setShowMore(false)}
                      className="text-[#5a2d4b] font-extrabold ml-2 cursor-pointer hover:underline"
                    >
                      Read Less
                    </span>
                  </p>
                </>
              )}

              {/* Last paragraph when hidden */}
              {!showMore && (
                <p>
                  For Ms. Shanmugapriya, fashion isn’t just what you wear. It is a way to express
                  who you are, and a way to inspire who you can become.{' '}
                  <span
                    onClick={() => setShowMore(true)}
                    className="text-[#5a2d4b] font-extrabold ml-2 cursor-pointer hover:underline"
                  >
                    Read More
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
