import "./Gallery.css";

function GalleryLightbox({
  show,
  image,
  onClose,
}) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="lightbox"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <span
        className="close-lightbox"
        onClick={onClose}
      >
        &times;
      </span>

      <img
        className="lightbox-content"
        src={image}
        alt="Gallery"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default GalleryLightbox;