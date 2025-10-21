import React from 'react';
import EnquirySection from "./EnquirySection"
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin size={28} className="text-[#5a2d4b] font-coromorant" />,
    title: 'Head Office',
    lines: ['44/53, 96, Industrial Estate,', 'Perungudi, Chennai 600096'],
  },
  {
    icon: <MapPin size={28} className="text-[#5a2d4b] " />,
    title: 'School Location',
    lines: ['Plot No: 110 & 111, Burma Colony,', 'Perungudi, Chennai - 600096'],
     link: 'https://maps.app.goo.gl/VzPMnBKWBnzN5jAf7?g_st=aw'
  },
  {
    icon: <Phone size={28} className="text-[#5a2d4b]" />,
    title: 'Phone / WhatsApp',
    lines: ['+91 90872 07878', '+91 90871 07878'],
    
  },
  {
    icon: <Mail size={28} className="text-[#5a2d4b]" />,
    title: 'Email',
    lines: ['adschooloffashion@gmail.com'],
  },
];

const ContactCard = ({ icon, title, lines, link}) => (
  
  <div className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-300/70 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-65">
    <div className="mb-4">{icon}</div>
    <h3 className="text-3xl font-extrabold text-[#5a2d4b] font-cormorant mb-4">{title}</h3>
    {/* --- YOUR CHANGE: Applied the new font color and weight to the detail text --- */}
    {/* - Changed text-gray-700 to text-[#5a2d4b] */}
    {/* - Added font-medium for better readability */}
    <div className="text-xl font-bold text-[#5a2d4b]  font-cormorant -y-1">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);


const Contact = () => {
  return (
    <>
     <div className="bg-[#f0eee0] min-h-screen pt-32 pb-24 sm:pt-40 sm:pb-32">
      <section className="font-sans max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-extrabold text-[#5a2d4b] mb-4">
            Contact AD School of Fashion
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-[#5a2d4b] font-cormorant  mb-4">
            Have a question about our custom bridal wear, maternity fashion, kids' designer outfits, uniform designing, or image consulting services? Our team is here to help you.
          </p>
        </div>

        <div className="mt-16 grid max-w-sm mx-auto grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactDetails.map((detail, index) => (
            <ContactCard
              key={index}
              icon={detail.icon}
              title={detail.title}
              lines={detail.lines}
            />
          ))}
        </div>
      </section>
    </div>
    <EnquirySection />
    </>
    
  );
};

export default Contact;

