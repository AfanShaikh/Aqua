import "./Video.css";

function VideoModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="close-modal"
          onClick={onClose}
        >
          &times;
        </span>

        <div className="video-container-wrapper">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/6lZ3CookYNg?autoplay=1"
            title="AquaLife Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoModal; 