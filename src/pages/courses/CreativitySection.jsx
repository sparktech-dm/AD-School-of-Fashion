import { useNavigate, useLocation } from 'react-router-dom';

const CreativitySection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToEnquiry = () => {
    if (location.pathname !== '/') {
      // Navigate to Home first, then scroll
      navigate('/', { state: { scrollToEnquiry: true } });
    } else {
      const element = document.getElementById('enquiry');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#f0eee0] py-6 md:py-10 px-2 font-sans text-center">
      <h2 className="text-3xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#5a2d4b] mb-1 tracking-wide">
        Creativity born here
      </h2>

      <br />

      <p className="text-[18px] font-['Cormorant_Garamond'] md:text-[20px] leading-relaxed mb-4 text-[#5a2d4b]">
        At AD School of Fashion, every student leaves with more than skills — they leave with the confidence to shape their own path in fashion.
      </p>

      <button
        className="bg-[#5a2d4b] text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-800 transition duration-500"
        onClick={scrollToEnquiry} // updated function
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default CreativitySection;
