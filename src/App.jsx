import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Enquiry from "./components/Enquiry";
import Center from "./components/Center";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Facilites from "./components/Facilites";
import Galary from "./components/Galary";
import FashionDesigning from "../src/pages/courses/FashionDesigning";
import Aage from "./pages/courses/CoursesPage";
import AboutPage from "./pages/about/AboutUs";
import ScrollToTop from './components/Scrolltotop';
import Fashion from "./components/Fashion";
import Contact from "./pages/Contactus/Contact";
import { Gallery } from "./pages/galary/Gallery";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToEnquiry) {
      const element = document.getElementById('enquiry');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      // Clear state after scrolling so it doesn't trigger again
      window.history.replaceState({}, document.title);
    } else {
      // Scroll to top on normal navigation
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Center />
      <Course />
      <About />

     
      <section id="enquiry">
        <Enquiry />
      </section>
      
      <Facilites />
      {/* <Fashion /> */}
      {/* <Galary /> */}
      
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Aage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </ScrollToTop>
      </div>
      <Footer />
    </>
  );
}

export default App;