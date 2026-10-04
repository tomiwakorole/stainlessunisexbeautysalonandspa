import '../styles/Services.css';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '🪮',
    title: 'Braiding Services',
    description: 'Intricate braids and protective styling for length, texture, and everyday elegance.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '✨',
    title: 'Frontal Installation',
    description: 'Seamless frontals designed to create a natural hairline and versatile styling.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '💫',
    title: 'Ghana Weaving',
    description: 'Traditional, detailed weaving with a neat finish and long-lasting wear.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🌿',
    title: 'Facials',
    description: 'Glow-boosting facials to cleanse, hydrate, and refresh your skin.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '💅',
    title: 'Pedicure & Manicure',
    description: 'Nail care, shaping, polish, and spa-finishing for beautifully groomed hands and feet.',
    image:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🧖',
    title: 'Body Massage',
    description: 'Relaxing massage therapy to ease tension, improve circulation, and restore calm.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '⚡',
    title: 'Cavitation',
    description: 'Non-invasive contouring therapy to target stubborn areas and smooth your silhouette.',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🔬',
    title: 'Laser Lipolysis Treatment',
    description: 'Targeted slimming and sculpting sessions for a firmer, more contoured look.',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🔥',
    title: 'Sauna',
    description: 'Deep detox and total relaxation sessions to refresh the body and mind.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '👁️',
    title: 'Fixing Eyelashes',
    description: 'Expert lash application and care for a defined, lifted, and confident finish.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🎨',
    title: 'Nail Services',
    description: 'Gel, acrylic, and design finishes that keep your nails polished and glam.',
    image:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🌀',
    title: 'Locking Dreads',
    description: 'Custom dread locking and maintenance for unique texture and long-lasting style.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '💇',
    title: 'Wig Revamping & Styling',
    description: 'Freshen up, restyle, and perfect your wig for a polished, ready-to-wear finish.',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🎓',
    title: 'Training Services',
    description: 'Hands-on beauty and wellness training for aspiring professionals looking to build skill and confidence.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p className="section-kicker">What We Offer</p>
        <h2>Beauty, wellness, and styling services designed for everyday confidence.</h2>
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
