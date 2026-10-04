import '../styles/Navbar.css';
import { WHATSAPP_URL } from '../utils/whatsapp';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="brand-mark">S</div>
        <div className="brand-copy">
          <span className="brand-name">STAINLESS</span>
          <small>Beauty Salon & Spa</small>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-cta">
        Book Now
      </a>
    </header>
  );
};

export default Navbar;
