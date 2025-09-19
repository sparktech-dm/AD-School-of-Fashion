import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Enquiry from "./components/Enquiry";
import Center from "./components/Center";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Facilites from "./components/Facilites";
import Galary from "./components/Galary";
import CoursesHero from "./pages/courses/CoursesHero";


function App() {
  return (
    <> 
      <CoursesHero />

      <Navbar />
      <Hero />
      <Center/>
      <Course/>
      <About />
      <Enquiry/>
      <Facilites/>
      <Galary/>
      <Footer/>
      
     
    </>
  );
}

export default App;
