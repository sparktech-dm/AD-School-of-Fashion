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
    <footer className="w-full bg-[#5a2d4b] text-[#f0eee0] px-6 pt-8 font-['Cormorant_Garamond'] overflow-x-hidden">
      {isMobile ? (
        // ---------- MOBILE FOOTER ----------
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Centered Logo */}
          <div className="w-full flex justify-center">
            <a href="https://www.aphroditesdrape.in/" target="_blank" rel="noopener noreferrer">
  <img src={LOGO} alt="Logo" className="w-64 h-auto mb-4" />
</a>

          </div>

          {/* Description */}
          <p className="text-[18px] text-center leading-7 px-4 text-[#f0eee0]">
            AD School of Fashion is a creative space where anyone from school
        students to working professionals can learn the art and craft of
        fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark
        ideas, and celebrate everyone who loves fashion. AD-School of Fashion is for everyone—aspiring designers, entrepreneurs, or simply those who love style. With us, fashion is not just taught; it is lived, experienced, and celebrated.
      
          </p>

          {/* Address & Contact */}
          <div className="flex flex-col gap-2 w-full px-4 text-[#f0eee0]">
            <h3 className="font-extrabold uppercase text-[18px] mb-1">Address</h3>
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
          <div className="w-full text-center mt-4 text-[18px] font-medium text-[#f0eee0]">
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
        </div>
      ) : (
       // ---------- DESKTOP FOOTER ----------
// ---------- DESKTOP FOOTER ----------
<div className="flex flex-col w-full text-[#f0eee0] gap-8">
  <div className="flex flex-row flex-wrap justify-start items-start gap-20 w-full">
    {/* Logo + Social Icons */}
    {/* Logo + Social Icons */}
<div className="flex flex-col items-start w-auto">
  <a href="https://www.aphroditesdrape.in/" target="_blank" rel="noopener noreferrer">
    <img src={LOGO} alt="Logo" className="w-80 h-auto mb-0" />
  </a>
  
  {/* Centered Social Icons below logo */}
  <div className="flex justify-center w-80 mt-2 gap-8">
  <a
    href="https://www.instagram.com/aphrodites_drape/?igsh=MXI2YzZwNHIxNDNiNg%3D%3D#"
    className="text-[#f0eee0] hover:text-[#d1b4c7]"
  >
    <Instagram size={30} />
  </a>
  <a
    href="https://www.facebook.com/aphrodites.drape"
    className="text-[#f0eee0] hover:text-[#d1b4c7]"
  >
    <Facebook size={30} />
  </a>
  <a
    href="https://www.youtube.com/@drapensilk"
    className="text-[#f0eee0] hover:text-[#d1b4c7]"
  >
    <Youtube size={30} />
  </a>
  <a
    href="https://www.aphroditesdrape.in/"
    className="text-[#f0eee0] hover:text-[#d1b4c7]"
  >
    <Globe size={30} />
  </a>
</div>

</div>


    {/* Description */}
    {/* Description */}
<div className="flex flex-col items-start flex-1 text-[#f0eee0]">
  <p className="text-[20px] md:text-[18px] leading-9 md:leading-7 text-left">
    AD School of Fashion is a creative space where anyone from school
    students to working professionals can learn the art and craft of
    fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark
    ideas, and celebrate everyone who loves fashion. AD-School of Fashion is for everyone—aspiring designers, entrepreneurs, or simply those who love style. With us, fashion is not just taught; it is lived, experienced, and celebrated.
  </p>
</div>

{/* Address */}
<div className="flex flex-col items-start w-auto text-[#f0eee0]">
  <h3 className="font-extrabold uppercase text-[20px] md:text-[18px] mb-4">Address</h3>

  <p className="text-[20px] md:text-[18px] leading-9 md:leading-7 md:mb-2">
    <MapPin size={28} className="inline text-[#f0eee0]" /> Plot No. 110 & 111, Burma Colony, Perungudi, Chennai - 600096
  </p>

  <p className="text-[20px] md:text-[18px] leading-9 md:leading-7 md:mb-2">
    <Phone size={28} className="inline text-[#f0eee0]" /> 9087107878 / 9087207878
  </p>

  <p className="text-[20px] md:text-[18px] leading-9 md:leading-7 flex items-center gap-4 md:mb-2">
    <Mail size={28} className="text-[#f0eee0]" />
    <a href="mailto:adsoft78@gmail.com" className="text-[#f0eee0] hover:underline">adsoft78@gmail.com</a>
  </p>

  <p className="text-[20px] md:text-[18px] leading-9 md:leading-7 flex items-center gap-4">
    <Mail size={28} className="text-[#f0eee0]" />
    <a href="mailto:aphroditesdrape@gmail.com" className="text-[#f0eee0] hover:underline">aphroditesdrape@gmail.com</a>
  </p>
</div>


{/* Quick Links */}
{/* Quick Links */}
<div className="flex flex-col items-start w-auto">
  <h3 className="font-extrabold uppercase text-[20px] md:text-[18px] mb-4 text-[#f0eee0]">Quick Links</h3>
  <ul className="space-y-3">
    <li className="text-[20px] md:text-[18px] leading-9 md:leading-7">
      <Link to="/" className="text-[#f0eee0] hover:opacity-80">Home</Link>
    </li>
    <li className="text-[20px] md:text-[18px] leading-9 md:leading-7">
      <Link to="/enquire" className="text-[#f0eee0] hover:opacity-80">Courses</Link>
    </li>
    <li className="text-[20px] md:text-[18px] leading-9 md:leading-7">
      <Link to="/about" className="text-[#f0eee0] hover:opacity-80">About</Link>
    </li>
    <li className="text-[20px] md:text-[18px] leading-9 md:leading-7">
      <Link to="/contact" className="text-[#f0eee0] hover:opacity-80">Contact</Link>
    </li>
  </ul>
</div>




  </div>
</div>


      )}
    </footer>
  );
} 