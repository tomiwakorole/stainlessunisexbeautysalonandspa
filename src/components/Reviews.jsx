import '../styles/Reviews.css';

const reviews = [
  {
    name: 'Aisha O.',
    title: 'Hair styling & spa',
    quote:
      'Absolutely loved the experience. The salon is clean, professional, and the styling was beautiful. I left feeling refreshed and looked amazing.',
  },
  {
    name: 'Tosin E.',
    title: 'Bridal treatment',
    quote:
      'The staff were warm, attentive, and very skilled. My bridal prep was flawless and the spa treatment was so relaxing. I would definitely recommend them.',
  },
  {
    name: 'Grace N.',
    title: 'Facial & wellness',
    quote:
      'This was one of the best salon and spa experiences I have had. The service felt premium, and the atmosphere was so calming from start to finish.',
  },
  {
    name: 'Mariam K.',
    title: 'Regular customer',
    quote:
      'Friendly team, elegant environment, and excellent attention to detail. My hair and skin both looked incredible after my appointment.',
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-heading narrow">
        <p className="section-kicker">Google reviews</p>
        <h2>Clients love the glow, care, and calm we deliver.</h2>
      </div>

      <div className="reviews-summary">
        <div className="rating-badge">
          <strong>4.9</strong>
          <span>Average rating</span>
        </div>
        <div className="rating-badge">
          <strong>300+</strong>
          <span>Happy clients</span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article key={review.name} className="review-card">
            <div className="review-topline">
              <div className="reviewer-avatar">{review.name.charAt(0)}</div>
              <div>
                <h3>{review.name}</h3>
                <span>{review.title}</span>
              </div>
            </div>

            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            <p>“{review.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
