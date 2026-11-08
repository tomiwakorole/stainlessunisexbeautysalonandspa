import '../styles/Services.css';
import ServiceCard from './ServiceCard';
import facialVideo from '../assets/facial.mp4';
import ghanaWeavingVideo from '../assets/ghanaweaving.mp4';
import installationVideo from '../assets/installation.mp4';
import homeserviceVideo from '../assets/homeservice.mp4';
import braidingVideo from '../assets/braidingservice.mp4';
import massageVideo from '../assets/massage.mp4';
import nailsImage from '../assets/nails.jpg';
import lockingdreadsImage from '../assets/lockingdreads.jpg';
import wigrevampImage from '../assets/wigrevamp.jpg';
import lashesImage from '../assets/lashes.jpg';
import cavitationImage from '../assets/cavitation.jpg';
import laserlipolysisImage from '../assets/laserlipolysis.jpg';


const services = [
  {
    // icon: '🪮',
    title: 'Braiding Services',
    description: 'Intricate braids and protective styling for length, texture, and everyday elegance.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    video: braidingVideo,
  },
  {
    // icon: '✨',
    title: 'Frontal Installation',
    description: 'Seamless frontals designed to create a natural hairline and versatile styling.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    video: installationVideo,
  },
  {
    // icon: '💫',
    title: 'Ghana Weaving',
    description: 'Traditional, detailed weaving with a neat finish and long-lasting wear.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=900&q=80',
    video: ghanaWeavingVideo,
  },
  {
    // icon: '🌿',
    title: 'Facials',
    description: 'Glow-boosting facials to cleanse, hydrate, and refresh your skin.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    video: facialVideo,
  },
  {
    // icon: '💅',
    title: 'Pedicure & Manicure',
    description: 'Nail care, shaping, polish, and spa-finishing for beautifully groomed hands and feet.',
    image:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80',
  },
  {
    // icon: '🧖',
    title: 'Body Massage',
    description: 'Relaxing massage therapy to ease tension, improve circulation, and restore calm.',
    video: massageVideo,
  },
  {
    // icon: '⚡',
    title: 'Cavitation',
    description: 'Non-invasive contouring therapy to target stubborn areas and smooth your silhouette.',
    image: cavitationImage,
  },
  {
    // icon: '🔬',
    title: 'Laser Lipolysis Treatment',
    description: 'Targeted slimming and sculpting sessions for a firmer, more contoured look.',
    image: laserlipolysisImage,
  },
  {
    // icon: '🔥',
    title: 'Sauna',
    description: 'Deep detox and total relaxation sessions to refresh the body and mind.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    // icon: '👁️',
    title: 'Fixing Eyelashes',
    description: 'Expert lash application and care for a defined, lifted, and confident finish.',
    image: lashesImage,
      
  },
  {
    icon: '🎨',
    title: 'Nail Services',
    description: 'Gel, acrylic, and design finishes that keep your nails polished and glam.',
    image: nailsImage,
  },
  {
    // icon: '🌀',
    title: 'Locking Dreads',
    description: 'Custom dread locking and maintenance for unique texture and long-lasting style.',
    image:
      lockingdreadsImage,
  },
  {
    // icon: '💇',
    title: 'Wig Revamping & Styling',
    description: 'Freshen up, restyle, and perfect your wig for a polished, ready-to-wear finish.',
    image: wigrevampImage,
  },
      
  {
    // icon: '🎓',
    title: 'Home Services',
    description: 'Rendering hair services at the comfort of your home.',
    video: homeserviceVideo,
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
