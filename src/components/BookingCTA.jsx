import '../styles/BookingCTA.css';
import { WHATSAPP_URL } from '../utils/whatsapp';

const BookingCTA = () => {
  return (
    <section className="booking-cta" id="booking">
      <div className="booking-copy">
        <p className="section-kicker">Book your visit</p>
        <h2>Ready to feel your best?</h2>
        <p>Reserve your next self-care moment and enjoy a tailored salon experience from start to finish.</p>
      </div>

      <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
        <input type="text" placeholder="Your name" aria-label="Your name" />
        <input type="email" placeholder="Email address" aria-label="Email address" />
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="book-btn">
          Request appointment
        </a>
      </form>
    </section>
  );
};

export default BookingCTA;
