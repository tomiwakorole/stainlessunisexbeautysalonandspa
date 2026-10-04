import { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import { WHATSAPP_URL } from '../utils/whatsapp';

const stats = [
  { value: 1000, suffix: '+', label: 'satisfied customers' },
  { value: 50, suffix: '+', label: 'international clients' },
  { value: 500, suffix: '+', label: 'refreshed wigs' },
  { value: 24, suffix: '/7', label: 'response support' },
];

const StatCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCount(0);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1400;
    const stepTime = 18;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
        return;
      }
      setCount(Math.ceil(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={counterRef} className="stat-item">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-image-wrap">
        <img
          src="/src/assets/ceo.png"
          alt="Portrait of the CEO of Stainless Beauty Unisex Salon and Spa"
        />
        <div className="about-image-caption">
          <span className="caption-role">CEO</span>
          <span className="caption-name">KOROLE ADEJUMOKE OLUWAKEMI</span>
          <span className="caption-brand">Stainless Beauty Unisex Salon and Spa</span>
        </div>
      </div>

      <div className="about-copy">
        <p className="section-kicker">About Us</p>
        <h2>Beauty rituals that leave you refreshed and confident.</h2>
        <p>
          Stainless Beauty Salon & Spa blends professional beauty care with soothing wellness
          treatments in a calm, elevated environment. We help every client look polished and feel
          completely at ease.
        </p>

        <ul className="about-list">
          <li>Expert stylists and skin specialists</li>
          <li>Luxury treatments with quality products</li>
          <li>Relaxing salon atmosphere built for comfort</li>
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="primary-btn">
          Schedule a Visit
        </a>
      </div>

      <div className="stats-grid" aria-label="salon achievements">
        {stats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default About;
