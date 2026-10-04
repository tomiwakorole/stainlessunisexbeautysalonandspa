import { useState } from 'react';
import '../styles/Gallery.css';

const images = [
  'https://images.unsplash.com/photo-1521590832167-7bcb3f4f45f5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading narrow">
        <p className="section-kicker">Our Gallery</p>
        <h2>Luxury beauty in every detail.</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={image + index}
            type="button"
            className="gallery-item"
            onClick={() => setSelected(image)}
            aria-label="Open gallery image"
          >
            <img src={image} alt={`Salon treatment ${index + 1}`} />
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-lightbox" onClick={() => setSelected(null)}>
              ×
            </button>
            <img src={selected} alt="Enlarged salon view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
