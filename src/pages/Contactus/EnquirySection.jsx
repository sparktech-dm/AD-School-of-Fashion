import React, { useState } from "react";

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
    setFormData({ firstName: "", lastName: "", number: "", email: "", course: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);

    fetch(
      "https://script.google.com/macros/s/AKfycbyzmXEHQq1GfK8AiF6HBnORoP6Nl2n8z8Z1iiF3dZMRwaD1nsfuKNBECDfUwiOSUiasow/exec",
      { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }
    ).catch((err) => console.error(err));
  };

  return (
    <section className="bg-[#f0eee0] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl text-[#5a2d4b] mb-8 font-semibold font-cormorant">
          Enquire Now
        </h3>

        {/* Background Images */}
        <img src={brushStrokeMobile} alt="Brush Mobile" className="absolute inset-0 w-full h-full object-cover lg:hidden" />
        <img src={brushStrokeDesktop} alt="Brush Desktop" className="absolute inset-0 w-full h-full object-cover hidden lg:block" />
        <img src={handshakeSketchMobile} alt="Handshake Mobile" className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-auto lg:hidden" />
        <img src={handshakeSketch} alt="Handshake Desktop" className="hidden lg:block absolute top-8 left-0 w-56 h-auto" />

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div className="text-center lg:text-left px-4 lg:px-0">
            <h2 className="font-extrabold font-cormorant text-3xl sm:text-4xl lg:text-5xl text-[#5a2d4b] leading-tight">
              Complete your training. Earn an industry-recognised certificate.
            </h2>
            <p className="italic font-bold font-cormorant text-xl sm:text-2xl mt-4 text-[#5a2d4b]">
              Step into the world of fashion with confidence!
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md mx-auto px-4 sm:px-0">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="First Name *" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]" />
                <input type="text" placeholder="Last Name *" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]" />
              </div>

              <input type="text" placeholder="Number*" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]" />
              <input type="text" placeholder="Mail id *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b]" />
              
              <select className="w-full rounded-full px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b] text-gray-500" value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                <option value="" disabled>Select Course *</option>
                <option value="Fashion Design">Fashion Design</option>
                <option value="Tailoring">Tailoring</option>
              </select>

              <textarea placeholder="Message*" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-[2rem] px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a2d4b] resize-none h-28"></textarea>

              <button type="submit" className="bg-[#58284b] text-white rounded-full py-4 sm:py-5 font-medium hover:bg-[#3f1935] transition text-lg">
                Enquire Now
              </button>

              {showToast && (
                <div className="mt-4 p-3 bg-[#5a2d4b] border border-green-500/30 rounded-[10px] text-[#f0eee0] text-sm font-medium text-center">
                  Our team will contact you!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
