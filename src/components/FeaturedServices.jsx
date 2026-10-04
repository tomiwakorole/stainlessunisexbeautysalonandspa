import '../styles/FeaturedServices.css';

const features = [
  {
    title: 'Luxury Hair Ritual',
    text: 'Restorative smoothing, deep treatment and finish styling built for volume and shine.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Spa Recovery',
    text: 'A calming treatment sequence designed to release tension and soften your skin.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
];

const FeaturedServices = () => {
  return (
    <section className="featured-section" id="featured">
      <div className="section-heading narrow">
        <p className="section-kicker">Featured treatments</p>
        <h2>Elevated care for your everyday glow.</h2>
      </div>

      <div className="featured-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-image-wrap">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <a href="#contact" className="secondary-btn">
                Book this service
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
