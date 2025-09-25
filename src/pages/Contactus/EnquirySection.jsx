import React, { useState } from "react";

// --- IMPORTANT: Make sure your image files are in the `public` folder ---
const brushStrokeMobile = "/contact-bg-mobile.webp";
const brushStrokeDesktop = "/contact-bg-pc.webp";
const handshakeSketch = "/handshake-sketch.png";
const handshakeSketchMobile = "/handshake-sketch-mobile.png";


export default function EnquirySection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last Name is required";
    if (!formData.number.trim()) tempErrors.number = "Number is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Enter a valid email";
    if (!formData.course) tempErrors.course = "Course selection is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowToast(true);
    setFormData({
      firstName: "", lastName: "", number: "", email: "", course: "", message: "",
    });
    setTimeout(() => setShowToast(false), 3000);

    fetch(
      "https://script.google.com/macros/s/AKfycbyzmXEHQq1GfK8AiF6HBnORoP6Nl2n8z8Z1iiF3dZMRwaD1nsfuKNBECDfUwiOSUiasow/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    ).catch((err) => console.error("Sheet error (form visually submitted):", err));
  };

  return (
    <section className="bg-[#f0eee0] py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[900px] lg:min-h-[700px] flex items-center justify-center">

          <img
            src={brushStrokeMobile}
            alt="Decorative background brush stroke"
            className="absolute inset-0 w-full h-full object-cover lg:hidden scale-125"
          />
          <img
            src={brushStrokeDesktop}
            alt="Decorative background brush stroke"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block scale-125"
          />
         <img 
            src={handshakeSketch}
            alt="Handshake sketch"
            // Positioned to the very edge on mobile (left-0) and slightly off on desktop (lg:left-2)
            className="hidden lg:block absolute top-8 left-0 w-56 h-auto z-20 scale-150"
          />

           <img 
            src={handshakeSketchMobile}
            alt="Handshake sketch"
            className="absolute top-4 left-0 w-32 h-auto z-20 lg:hidden"
          />

         
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            <div className="text-center lg:text-left pt-16 lg:pt-0 lg:pl-32">
              <h2 className="font-extrabold font-cormorant text-4xl sm:text-5xl text-[#5a2d4b] leading-tight">
                Complete your training. Earn an industry-recognised certificate.
              </h2>
              <p className="italic font-bold font-cormorant text-2xl sm:text-3xl text-[#5a2d4b] mt-6">
                Step into the world of fashion with confidence!
              </p>
            </div>

            <div className="w-full max-w-md mx-auto">
              <h3 className="text-center lg:text-left text-3xl lg:text-4xl text-[#5a2d4b] mb-6 font-semibold font-cormorant">
                Enquire Now
              </h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <input type="text" placeholder="First Name *" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]"/>
                    {errors.firstName && <p className="text-xs text-red-500 pl-4 pt-1">{errors.firstName}</p>}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <input type="text" placeholder="Last Name *" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]"/>
                    {errors.lastName && <p className="text-xs text-red-500 pl-4 pt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <input type="text" placeholder="Number*" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]"/>
                  {errors.number && <p className="text-xs text-red-500 pl-4 pt-1">{errors.number}</p>}
                </div>
                
                <div>
                  <input type="text" placeholder="Mail id *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]"/>
                  {errors.email && <p className="text-xs text-red-500 pl-4 pt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <select className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b] text-gray-500" value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                    <option value="" disabled>Select Course *</option>
                    <option value="Fashion Design">Fashion Design</option>
                    <option value="Tailoring">Tailoring</option>
                  </select>
                  {errors.course && <p className="text-xs text-red-500 pl-4 pt-1">{errors.course}</p>}
                </div>
                
                <div>
                  <textarea placeholder="Message*" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-[2rem] px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b] resize-none h-28"></textarea>
                  {errors.message && <p className="text-xs text-red-500 pl-4 pt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="bg-[#58284b] text-white rounded-full py-4 sm:py-5 font-medium hover:bg-[#3f1935] transition text-lg">
                  Enquire Now
                </button>

                {showToast && (
                  <div className="mt-4 p-3 bg-[#5a2d4b] border border-green-500/30 rounded-[10px] text-[#f0eee0] text-sm font-medium text-center transition-all duration-300">
                    Our team will contact you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
