import { WHATSAPP_URL } from '../utils/whatsapp';

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-meta">
        <span className="service-price">{price}</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="service-btn">
          Book now
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
