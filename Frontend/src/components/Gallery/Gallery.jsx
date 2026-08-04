import FadeUp from "../FadeUp/FadeUp";
import gallery from "../../data/gallery";

function Gallery({ onImageClick }) {
  return (
    <section
      id="gallery"
      className="container section-padding"
    >
      <FadeUp>
        <h2 className="section-title">
          Project Gallery
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="masonry-grid">
          {gallery.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="gallery-img"
              loading="lazy"
              onClick={() => onImageClick(item.image)}
            />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

export default Gallery;