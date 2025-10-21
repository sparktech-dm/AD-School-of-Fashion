import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const LOGO =
  "/new_logo.png"
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="w-full bg-[#5a2d4b] text-[#f0eee0] px-6 pt-8 font-poppins overflow-x-hidden">
      {isMobile ? (
        // ---------- MOBILE FOOTER ----------
        <div className="flex flex-col items-center gap-6 w-full">
         {/* Centered Logo */}
<div className="w-full flex flex-col items-center">
  <a href="https://www.aphroditesdrape.in/" target="_blank" rel="noopener noreferrer" className="mb-4">
    <img src={LOGO} alt="Logo" className="w-64 h-auto" />
  </a>

  <a href="https://www.drapensilk.com/" target="_blank" rel="noopener noreferrer">
    <img src="drapensilk.jpg" alt="Logo" className="w-64 h-auto" />
  </a>
</div>

          {/* Description */}
          <p className=" text-[18px]  text-center leading-7 px-4 text-[#f0eee0] ">
            AD School of Fashion is a creative space where anyone from school
        students to working professionals can learn the art and craft of
        fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark
        ideas, and celebrate everyone who loves fashion. AD-School of Fashion is for everyone—aspiring designers, entrepreneurs, or simply those who love style. With us, fashion is not just taught; it is lived, experienced, and celebrated.
      
          </p>

          {/* Address & Contact */}
          <div className="flex flex-col gap-2 w-full px-4 text-[#f0eee0]">
            <h3 className="font-medium uppercase text-[18px] text-center mb-3">Address</h3>
            <p>
              <MapPin size={20} className="inline text-[#f0eee0]" /> Plot No. 110 & 111, Burma Colony, Perungudi, Chennai - 600096
            </p>
            <p>
              <Phone size={20} className="inline text-[#f0eee0]" /> 9087107878 / 9087207878
            </p>
            <div className="flex flex-col gap-1">
  <div className="flex items-center gap-2">
    <Mail size={20} className="text-[#f0eee0]" />
    <a href="mailto:adsoft78@gmail.com" className="text-[#f0eee0] hover:underline">
      adsoft78@gmail.com
    </a>
  </div>
  <div className="flex items-center gap-2">
    <Mail size={20} className="text-[#f0eee0]" />
    <a href="mailto:aphroditesdrape@gmail.com" className="text-[#f0eee0] hover:underline">
      aphroditesdrape@gmail.com
    </a>
  </div>
</div>

          </div>

          {/* Quick Links */}
          <h3 className="font-medium uppercase text-[18px] ">Quick Links</h3>
          <div className="w-full text-center text-[18px] font-medium text-[#f0eee0]">
  <Link to="/" className="text-[#f0eee0] hover:opacity-80">Home</Link>
  <span className="mx-2">|</span>
 <Link to="/courses" className="text-[#f0eee0] hover:opacity-80">Courses</Link>
  <span className="mx-2">|</span>
  <Link to="/about" className="text-[#f0eee0] hover:opacity-80">About</Link>
  <span className="mx-2">|</span>
   <Link to="/enquire" className="text-[#f0eee0] hover:opacity-80">Contact</Link>
</div>



          {/* Social Icons */}
          <div className="flex gap-6 justify-center mt-4 px-2">
            <a href="https://www.instagram.com/aphrodites_drape/?igsh=MXI2YzZwNHIxNDNiNg%3D%3D#"><Instagram size={26} className="text-[#f0eee0]" /></a>
            <a href="https://www.facebook.com/aphrodites.drape"><Facebook size={26} className="text-[#f0eee0]" /></a>
            <a href="https://www.youtube.com/@drapensilk"><Youtube size={26} className="text-[#f0eee0]" /></a>
            <a href="https://www.aphroditesdrape.in/"><Globe size={26} className="text-[#f0eee0]" /></a>
          </div>
              {/* Map on the far right */}
    <div className="flex flex-col items-center min-w-[320px] 2xl:min-w-[400px] ml-0 xl:ml-8 2xl:ml-12">
      <h3 className="font-medium uppercase text-[18px] lg:text-[20px] mb-4">Location</h3>
      <iframe
        title="AD School of Fashion Location"
        src="https://www.google.com/maps?q=Plot+No.+110+Burma+Colony+Perungudi+Chennai+600096&output=embed"
        width="320"
        height="220"
        style={{ border: "0", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90vw] max-w-[320px] 2xl:max-w-[380px] h-[220px] 2xl:h-[250px]"
      ></iframe>
    </div>
          {/* Copyright Section */}
  <div className="w-full border-t border-[#d1b4c7] mt-8 py-4 bg-[#5a2d4b] text-center text-[#f0eee0] text-sm md:text-base font-medium">
    © 2025 AD School of Fashion. Designed & Developed by <a href="https://sparktechdm.com/" className="text-[#f0eee0] hover:underline">SparkTech Digital Marketing</a>.
  </div>
        </div>
      ) : (
// ---------- DESKTOP FOOTER ----------
<div className="w-full bg-[#5a2d4b] text-[#f0eee0] px-6 pt-5 font-poppins overflow-x-hidden">
  {/* Description at the very top */}
  <div className="max-w-[1600px] mx-auto px-2 md:px-4 lg:px-8 mb-8 mt-4 -mr-[100px] lg:ml-[260px]">
    <p className="text-[18px] lg:text-[20px] leading-8 lg:leading-9 text-left max-w-5xl mx-auto">
      AD School of Fashion is a creative space where anyone from school students to working professionals can learn the art and craft of fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark ideas, and celebrate everyone who loves fashion. AD-School of Fashion is for everyone—aspiring designers, entrepreneurs, or simply those who love style. With us, fashion is not just taught; it is lived, experienced, and celebrated.
    </p>
  </div>
  {/* Main content row */}
  <div className="max-w-[1600px] mx-auto flex flex-row items-start gap-8 xl:gap-16 2xl:gap-24 px-2 md:px-4 lg:px-8 relative">
    {/* Logos + Social icons */}
    <div className="flex flex-col items-start min-w-[220px] max-w-[320px] -mt-[160px]">
      <a href="https://www.aphroditesdrape.in/" target="_blank" rel="noopener noreferrer">
        <img src={LOGO} alt="Logo" className="w-60 lg:w-72 xl:w-80 2xl:w-96 h-auto mb-0" />
      </a>
      <a href="https://www.drapensilk.com/" target="_blank" rel="noopener noreferrer">
        <img src="drapensilk.jpg" alt="Logo" className="w-60 lg:w-72 xl:w-80 2xl:w-96 h-auto mb-0 mt-6" />
      </a><br/>
      <div className="flex justify-start w-full mt-6 gap-8 pl-[50px]">
        <a href="https://www.instagram.com/aphrodites_drape/?igsh=MXI2YzZwNHIxNDNiNg%3D%3D#" className="text-[#f0eee0] hover:text-[#d1b4c7]">
          <Instagram size={30} />
        </a>
        <a href="https://www.facebook.com/aphrodites.drape" className="text-[#f0eee0] hover:text-[#d1b4c7]">
          <Facebook size={30} />
        </a>
        <a href="https://www.youtube.com/@drapensilk" className="text-[#f0eee0] hover:text-[#d1b4c7]">
          <Youtube size={30} />
        </a>
        <a href="https://www.aphroditesdrape.in/" className="text-[#f0eee0] hover:text-[#d1b4c7]">
          <Globe size={30} />
        </a>
      </div>
    </div>
    {/* Address + Quick Links: right, upward */}
    <div className="flex flex-row gap-8 items-start self-start ml-auto -mt-[10px]">
      {/* Address */}
      <div className="flex flex-col items-start w-auto">
        <h3 className="font-medium uppercase text-[18px] lg:text-[20px] mb-4">Address</h3>
        <p className="text-[16px] lg:text-[18px] leading-7 lg:leading-9 md:mb-2">
          <MapPin size={24} className="inline text-[#f0eee0] mr-1" /> Plot No. 110 & 111, Burma Colony, Perungudi, Chennai - 600096
        </p>
        <p className="text-[16px] lg:text-[18px] leading-7 lg:leading-9 md:mb-2">
          <Phone size={24} className="inline text-[#f0eee0] mr-1" /> 9087107878 / 9087207878
        </p>
        <p className="text-[16px] lg:text-[18px] leading-7 lg:leading-9 flex items-center gap-2 md:mb-2">
          <Mail size={24} className="text-[#f0eee0]" />
          <a href="mailto:adsoft78@gmail.com" className="text-[#f0eee0] hover:underline break-all">adsoft78@gmail.com</a>
        </p>
        <p className="text-[16px] lg:text-[18px] leading-7 lg:leading-9 flex items-center gap-2">
          <Mail size={24} className="text-[#f0eee0]" />
          <a href="mailto:aphroditesdrape@gmail.com" className="text-[#f0eee0] hover:underline break-all">aphroditesdrape@gmail.com</a>
        </p>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-start w-auto">
        <h3 className="font-medium uppercase text-[18px] lg:text-[20px] mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li className="text-[16px] lg:text-[18px] leading-7 lg:leading-9">
            <Link to="/" className="text-[#f0eee0] hover:opacity-80">Home</Link>
          </li>
          <li className="text-[16px] lg:text-[18px] leading-7 lg:leading-9">
            <Link to="/courses" className="text-[#f0eee0] hover:opacity-80">Courses</Link>
          </li>
          <li className="text-[16px] lg:text-[18px] leading-7 lg:leading-9">
            <Link to="/about" className="text-[#f0eee0] hover:opacity-80">About</Link>
          </li>
          <li className="text-[16px] lg:text-[18px] leading-7 lg:leading-9">
            <Link to="/enquire" className="text-[#f0eee0] hover:opacity-80">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* Map on the far right */}
    <div className="flex flex-col items-center min-w-[320px] 2xl:min-w-[400px] ml-0 xl:ml-8 2xl:ml-12">
      <h3 className="font-medium uppercase text-[18px] lg:text-[20px] mb-4">Location</h3>
      <iframe
        title="AD School of Fashion Location"
        src="https://www.google.com/maps?q=Plot+No.+110+Burma+Colony+Perungudi+Chennai+600096&output=embed"
        width="320"
        height="220"
        style={{ border: "0", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[90vw] max-w-[320px] 2xl:max-w-[380px] h-[220px] 2xl:h-[250px]"
      ></iframe>
    </div>
  </div>
   {/* Copyright Section */}
  <div className="w-full border-t border-[#d1b4c7] mt-8 py-4 bg-[#5a2d4b] text-center text-[#f0eee0] text-sm md:text-base font-medium">
    © 2025 AD School of Fashion. Designed & Developed by <a href="https://sparktechdm.com/" className="text-[#f0eee0] hover:underline">SparkTech Digital Marketing</a>.
  </div>
</div>






      )}
    </footer>
  );
} 