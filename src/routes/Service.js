import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import serviceImg from "../assets/b.jpg";
import Footer from "../Component/Footer";
import Trip from "../Component/Trip";
import Services from "../Component/Services";
function Service (){
  return(
    <>
      <Navbar />
      <Hero
      cName="hero-mid"  
      heroImg={serviceImg}
      title="Service"
      
      btnClass="hide"
      
      />
      <Services />
      <Trip />
      <Footer/>
    </>
    )
}
export default Service;
