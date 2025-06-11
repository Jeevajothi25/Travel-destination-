import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import aboutImg from "../assets/C.jpg";
import Footer from "../Component/Footer";
import ContactForm from "../Component/ContactForm";
function Contact (){
  return(
    <>
      <Navbar />
      <Hero
      cName="hero-mid"  
      heroImg={aboutImg}
      title="Contact"
      
      btnClass="hide"
      
      />
      <ContactForm />
      <Footer />
    </>
    )
}
export default Contact;