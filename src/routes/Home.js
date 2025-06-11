import Destination from "../Component/Destination";
import Hero from "../Component/Hero";
import Trip from "../Component/Trip";
import Footer from "../Component/Footer";
import Features from "../Component/Features";
import Statistics from "../Component/Statistics";
import Testimonials from "../Component/Testimonials";
import Newsletter from "../Component/Newsletter";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="home">
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920"
        text="Discover extraordinary destinations and create unforgettable memories with our expertly curated travel experiences. From luxury getaways to thrilling adventures, we make your travel dreams a reality."
      />
      
      <div className="section-divider"></div>
      <Features />
      
      <div className="section-light">
        <Destination />
      </div>
      
      <Statistics />
      
      <div className="section-light">
        <Trip />
      </div>
      
      <Testimonials />
      <Newsletter />
      
      <Footer />
    </div>
  );
}

export default Home;