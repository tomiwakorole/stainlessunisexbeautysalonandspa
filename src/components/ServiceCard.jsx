import { WHATSAPP_URL } from '../utils/whatsapp';

const ServiceCard = ({ icon, title, description, image, video }) => {
  return (
    <article className="service-card">
      <div className="service-visual">
        {video ? (
          <video
            className="service-media"
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="auto"
          >
            <img src={image} alt={title} className="service-image" />
          </video>
        ) : image ? (
          <img src={image} alt={title} className="service-image" />
        ) : null}

      </div>

      <div className="service-body">
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
