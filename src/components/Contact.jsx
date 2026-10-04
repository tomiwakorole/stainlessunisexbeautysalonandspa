import '../styles/Contact.css';

const Contact = () => {
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
          </div>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name" aria-label="Name" />
        <input type="email" placeholder="Email" aria-label="Email" />
        <input type="text" placeholder="Service" aria-label="Service" />
        <textarea rows="4" placeholder="Tell us about your ideal appointment" aria-label="Tell us about your ideal appointment" />
        <button type="submit">Send request</button>
      </form>
    </section>
  );
};

export default Contact;
