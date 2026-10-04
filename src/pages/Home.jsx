import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import BookingCTA from '../components/BookingCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/Global.css';

const Home = () => {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
