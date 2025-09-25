import React from "react";
import { Link } from 'react-router-dom';

import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5a2d4b] text-white px-6 lg:px-20 py-[50px] h-[400px]">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Left - About Text */}
        <div className="text-xl leading-relaxed text-center md:text-left">
          <p>
            AD School of Fashion is a creative space where anyone from school
            students to working professionals can learn the art and craft of
            fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark
            ideas, and celebrate everyone who loves fashion.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-y-3 mt-1 text-center md:text-center">
          <h3
            className="text-[#f0c417] text-lg font-medium mb-6"
            style={{ fontFamily: "Unbounded" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/Hero"
                className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Courses"
                className="text-white/80 text-base font-normal hover:text-[#f0c417] transition-colors"
                style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif' }}
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Image Button */}
        <div className="flex flex-col items-center md:items-end">
          <a
            href="https://www.aphroditesdrape.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Website"
          >
            <img
              src="./Ad_logo.webp" // replace with your logo path
              alt="Aphrodite’s Drape Logo"
              className="w-60 h-30 mb-2"
            />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 my-6"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>9087107878</span>
          </div>
          {/* Mail Button */}
          <a
            href="mailto:aphroditesdrape@gmail.com"
            className="px-3 py-1 text-white hover:text-[#d8bfd8] transition"
          >
            ✉️ aphroditesdrape@gmail.com
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/ad_school.of.fashion"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-white hover:text-[#d8bfd8] transition"
          >
            📷 @ad_school.of.fashion
          </a>
        </div>
      </div>
    </footer>
  );
}
