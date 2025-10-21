import React from 'react';
import EnquirySection from "./EnquirySection";
import { MapPin, Phone, Mail } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin size={28} className="text-[#5a2d4b] font-poppins" />,
    title: 'Head Office',
    lines: ['44/53, 96, Industrial Estate,', 'Perungudi, Chennai 600096'],
    link: "https://www.google.co.in/maps/place/DRAPE+'N'+SILK+A+unit+of+aphrodites+drape,+44,+1st+Main+Rd,+Industrial+Estate,+Perungudi,+Chennai,+Tamil+Nadu+600096/@12.9577791,80.247247,17z/data=!4m6!3m5!1s0x3a525d00402f2fed:0x2ccac25cb21f1a80!8m2!3d12.9577791!4d80.247247!16s%2Fg%2F11x0twyms8?hl=en&g_ep=Eg1tbF8yMDI1MDkyNF8wIOC7DCoASAJQAA%3D%3D"
  },
  {
    icon: <MapPin size={28} className="text-[#5a2d4b]" />,
    title: 'School Location',
    lines: ['Plot No: 110 & 111, Burma Colony,', 'Perungudi, Chennai - 600096'],
    link: 'https://www.google.co.in/maps/place/%26111,+aphrodites+drape,+Plot+No.110,+Burma+Colony,+Thiruvalluvar+Nagar,+Perungudi,+Chennai,+Tamil+Nadu+600096/@12.961131,80.2464239,17z/data=!4m6!3m5!1s0x3a525d10eb0fe07b:0x26e0cc6d7d4ab0d8!8m2!3d12.961131!4d80.2464239!16s%2Fg%2F11gbxbrt22?hl=en&g_ep=Eg1tbF8yMDI1MDkyNF8wIOC7DCoASAJQAA%3D%3D'
  },
  {
    icon: <Phone size={28} className="text-[#5a2d4b]" />,
    title: 'Phone / WhatsApp',
    lines: ['+91 90872 07878', '+91 90871 07878'],
  },
  {
    icon: <Mail size={28} className="text-[#5a2d4b]" />,
    title: 'Email',
    lines: ['aphroditesdrape@gmail.com','adsoft78@gmail.com'],
  },
];
const ContactCard = ({ icon, title, lines, link }) => {
  const cardContent = (
    <div className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-300/70 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-65 cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-3xl text-[#5a2d4b] font-cormorant font-bold mb-4">{title}</h3> {/* Title bold */}
      <div className="text-xl text-[#5a2d4b] font-poppins font-normal">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};



const Contact = () => {
  return (
    <>
      <div className="bg-[#f0eee0] min-h-screen pt-32 pb-10 sm:pt-40 sm:pb-14">
        <section className="font-poppins max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
  <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-7xl font-cormorant font-bold text-[#5a2d4b] mb-4">
    Contact AD School of Fashion
  </h2>
  <p className="max-w-3xl mx-auto text-3xl text-[#5a2d4b] font-cormorant">
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
                link={detail.link}
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
