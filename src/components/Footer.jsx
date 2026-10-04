import '../styles/Footer.css';

const footerLinks = {
  company: ['Home', 'About', 'Services', 'Gallery', 'Reviews'],
  services: ['Hair styling', 'Spa', 'Facials', 'Bridal'],
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-mark">S</div>
          <div>
            <strong>STAINLESS</strong>
            <small>Beauty Salon & Spa</small>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {footerLinks.company.map((link) => (
              <li key={link}>
                <a href="#home">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {footerLinks.services.map((link) => (
              <li key={link}>
                <a href="#services">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col social-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Stainless Beauty Salon & Spa</span>
      </div>
    </footer>
  );
};

export default Footer;
