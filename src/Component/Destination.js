import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import { FaMapMarkerAlt, FaStar, FaPlane } from 'react-icons/fa';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Explore the world's most breathtaking locations and create memories that will last a lifetime.</p>

      <DestinationData
        className="first-des"
        heading="Santorini, Greece"
        text="Discover the magic of Santorini, where white-washed buildings cascade down volcanic cliffs, offering stunning views of the Aegean Sea. Experience breathtaking sunsets in Oia, explore ancient ruins, and indulge in world-class Mediterranean cuisine. With its iconic blue-domed churches and luxurious infinity pools, Santorini promises an unforgettable romantic getaway."
        img1="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg"
        img2="https://images.pexels.com/photos/3010067/pexels-photo-3010067.jpeg"
        rating="4.9"
        reviews="2,845"
        price="$2,499"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Bali, Indonesia"
        text="Immerse yourself in the tropical paradise of Bali, where ancient temples meet pristine beaches. Explore the cultural heart of Ubud, with its terraced rice fields and traditional crafts. Unwind on the sun-kissed beaches of Nusa Dua, practice yoga in serene settings, and experience the warm hospitality of the Balinese people."
        img1="https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg"
        img2="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg"
        rating="4.8"
        reviews="3,721"
        price="$1,899"
      />

      <DestinationData
        className="first-des"
        heading="Maldives"
        text="Experience luxury at its finest in the Maldives, where crystal-clear waters and overwater bungalows create the perfect tropical escape. Dive into vibrant coral reefs, indulge in world-class spa treatments, and witness spectacular marine life. Each resort island offers exclusive privacy and unparalleled service in this paradise on Earth."
        img1="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg"
        img2="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg"
        rating="4.9"
        reviews="4,192"
        price="$3,299"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Swiss Alps"
        text="Embrace the majesty of the Swiss Alps, where snow-capped peaks and pristine lakes create a year-round wonderland. Experience world-class skiing in winter, scenic hiking in summer, and luxurious mountain resorts in every season. With charming villages like Zermatt and Interlaken, the Swiss Alps offer the perfect blend of adventure and comfort."
        img1="https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg"
        img2="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg"
        rating="4.8"
        reviews="2,967"
        price="$2,799"
      />

      <DestinationData
        className="first-des"
        heading="Dubai, UAE"
        text="Experience the future in Dubai, where modern architecture meets Arabian luxury. Marvel at the world's tallest building, the Burj Khalifa, shop in magnificent malls, and venture into the desert for thrilling adventures. From artificial islands to indoor ski resorts, Dubai showcases human innovation at its most ambitious."
        img1="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg"
        img2="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg"
        rating="4.7"
        reviews="5,234"
        price="$2,199"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Machu Picchu, Peru"
        text="Journey to the ancient Incan citadel of Machu Picchu, perched high in the Andes Mountains. This UNESCO World Heritage site offers a glimpse into a fascinating civilization, surrounded by breathtaking mountain vistas. Trek the legendary Inca Trail, explore colonial Cusco, and immerse yourself in rich Peruvian culture."
        img1="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg"
        img2="https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg"
        rating="4.9"
        reviews="3,456"
        price="$2,599"
      />
    </div>
  );
};

export default Destination;