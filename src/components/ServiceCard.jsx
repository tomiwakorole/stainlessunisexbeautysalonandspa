import { WHATSAPP_URL } from '../utils/whatsapp';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <article className="service-card">
      {image ? <img src={image} alt={title} className="service-image" /> : null}
      <div className="service-body">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="service-meta">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="service-btn">
          Book now
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
