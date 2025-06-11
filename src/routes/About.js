import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AboutUs from "../Component/AboutUs";

function About (){
  return(
    <>
      <Navbar />
      <Hero
        cName="hero-mid"  
        heroImg="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920"
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer/>
    </>
  )
}
export default About;