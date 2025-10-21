import React, { useState } from "react";

export default function Enquiry() {
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
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      course: "",
      message: "",
    });
    setTimeout(() => setShowToast(false), 3000);

    fetch(
      "https://script.google.com/macros/s/AKfycbyzmXEHQq1GfK8AiF6HBnORoP6Nl2n8z8Z1iiF3dZMRwaD1nsfuKNBECDfUwiOSUiasow/exec ",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    ).catch((err) => console.error("Sheet error (form visually submitted):", err));
  };

  return (
    <section className="py-24 bg-[#f0eee0]">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="bg-[#e7c1aa] rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 min-h-auto lg:min-h-[650px]">
          
          {/* Left Text */}
          <div className="text-center lg:text-left flex-1 px-2 mb-6 lg:mb-0">
            <h3 className="font-extrabold font-cormorant text-3xl md:text-4xl lg:text-7xl text-[#5a2d4b] mb-6">
              Enquire Now
            </h3>
            <h2 className="font-bold font-cormorant text-2xl md:text-3xl lg:text-5xl text-[#5a2d4b] leading-snug">
              Complete your training. Earn an industry-recognised certificate.
            </h2>
            <p className="italic font-bold font-cormorant text-xl md:text-2xl lg:text-3xl text-[#5a2d4b] mt-4 lg:mt-8">
              Step into the world of fashion with confidence!
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md flex-1 px-2 pb-6 md:px-4 md:py-0">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full sm:w-1/2 rounded-full px-8 py-5 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full sm:w-1/2 rounded-full px-8 py-5 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <input
                type="text"
                placeholder="Number*"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                className="w-full rounded-full px-8 py-5 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="text"
                placeholder="Mail id *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-full px-8 py-5 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <select
                className="w-full rounded-full px-8 py-5 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="" disabled>Select Course *</option>
                <option value="Fashion Design">Training on Fashion Design (3-Months)</option>
                <option value="Tailoring">Training on Tailoring (5-Months)</option>
              </select>

              <textarea
                placeholder="Message*"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-[2rem] px-8 py-5 text-lg resize-none h-40 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>

              <button
                type="submit"
                className="bg-[#58284b] text-white rounded-full py-5 font-medium hover:bg-[#3f1935] transition text-lg"
              >
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
