import '../styles/Hero.css';
import { WHATSAPP_URL } from '../utils/whatsapp';

const heroStats = [
  { value: '15+', label: 'years of beauty care' },
  { value: '4.9/5', label: 'client satisfaction' },
  { value: 'Daily', label: 'open appointments' },
];

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="eyebrow">Welcome to Stainless</p>
        <h1>
          Glow with confidence,
          <span>rest with ease.</span>
        </h1>
        <p className="lead">
          Premium salon and spa care for hair, skin, wellness and beauty rituals designed to help
          you feel polished, calm and radiant.
        </p>

        <div className="hero-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-btn">
            Book an Appointment
          </a>
          <a href="#services" className="secondary-btn">
            Explore Services
          </a>
        </div>

        <div className="hero-metrics">
          {heroStats.map((stat) => (
            <div key={stat.label} className="metric-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
