import { useState } from 'react';
import '../styles/Gallery.css';
import nailsImage from '../assets/nails.jpg';
import lashesImage from '../assets/lashes.jpg';
import lockingdreadsImage from '../assets/lockingdreads.jpg';
import wigrevampImage from '../assets/wigrevamp.jpg';
import cavitationImage from '../assets/cavitation.jpg';
import laserlipolysisImage from '../assets/laserlipolysis.jpg';
import facialVideo from '../assets/facial.mp4';
import braidingVideo from '../assets/braidingservice.mp4';
import installationVideo from '../assets/installation.mp4';
import ghanaWeavingVideo from '../assets/ghanaweaving.mp4';

const images = [
  nailsImage,
  lashesImage,
  lockingdreadsImage,
  wigrevampImage,
  cavitationImage,
  laserlipolysisImage,
];

const videos = [
  { src: facialVideo, poster: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80' },
  { src: braidingVideo, poster: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80' },
  { src: installationVideo, poster: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
  { src: ghanaWeavingVideo, poster: 'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=900&q=80' },
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
            onClick={() => setSelected({ type: 'image', src: image })}
            aria-label="Open gallery image"
          >
            <img src={image} alt={`Salon treatment ${index + 1}`} />
          </button>
        ))}

        {videos.map((video, index) => (
          <button
            key={`video-${index}`}
            type="button"
            className="gallery-item gallery-video"
            onClick={() => setSelected({ type: 'video', src: video.src, poster: video.poster })}
            aria-label="Open gallery video"
          >
            <video src={video.src} poster={video.poster} muted loop autoPlay playsInline />
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-lightbox" onClick={() => setSelected(null)}>
              ×
            </button>
            {selected.type === 'video' ? (
              <video src={selected.src} poster={selected.poster} controls autoPlay muted loop />
            ) : (
              <img src={selected.src} alt="Enlarged salon view" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
