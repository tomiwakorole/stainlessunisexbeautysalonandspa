import '../styles/Services.css';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '✂️',
    title: 'Signature Hair Styling',
    description: 'Precision cuts, soft styling, and finishing treatments tailored to your look.',
    price: 'From $45',
  },
  {
    icon: '🧖',
    title: 'Spa & Relaxation',
    description: 'Revitalising facials, massage rituals, and calming beauty therapy for total unwind.',
    price: 'From $60',
  },
  {
    icon: '💄',
    title: 'Bridal & Events',
    description: 'Elegant beauty prep for your special day with polished styling and skin finishing.',
    price: 'From $90',
  },
  {
    icon: '🌿',
    title: 'Wellness Therapy',
    description: 'Holistic care and self-care rituals designed to restore glow and confidence.',
    price: 'From $55',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p className="section-kicker">What We Offer</p>
        <h2>Salon and spa experiences designed for everyday confidence.</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
