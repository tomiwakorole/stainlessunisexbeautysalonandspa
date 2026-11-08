import { useState } from 'react';
import '../styles/Contact.css';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

const salonServices = [
  'Braiding Services',
  'Frontal Installation',
  'Ghana Weaving',
  'Facials',
  'Pedicure & Manicure',
  'Body Massage',
  'Cavitation',
  'Laser Lipolysis Treatment',
  'Sauna',
  'Fixing Eyelashes',
  'Nail Services',
  'Locking Dreads',
  'Wig Revamping & Styling',
  'Home Services',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Stainless Beauty Salon & Spa, I would like to book a service.\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nService: ${formData.service || 'Not provided'}\nMessage: ${formData.message || 'Not provided'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <p className="section-kicker">Contact Us</p>
        <h2>Let’s plan your next beauty ritual.</h2>
        <p>
          Visit our beauty studio for tailored treatments, premium care, and a relaxing environment.
        </p>

        <div className="contact-cards">
          <div>
            <strong>Phone</strong>
            <span>08068210819</span>
          </div>
          <div>
            <strong>Email</strong>
            <span>stainlessbeautyinstitute@gmail.com</span>
          </div>
          <div>
            <strong>Location</strong>
            <span>Km 3, Omolade Oguntade Crescent, Behind Justrite Superstores Ota.</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3+Omolade+Oguntade+Crescent+Behind+Justrite+Superstore+Ota"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          aria-label="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          aria-label="Email"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          aria-label="Service"
        >
          <option value="">Select a service</option>
          {salonServices.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your ideal appointment"
          aria-label="Tell us about your ideal appointment"
        />
        <button type="submit">Send request</button>
      </form>
    </section>
  );
};

export default Contact;
