import { FaPlay } from "react-icons/fa";
import FadeUp from "../FadeUp/FadeUp";

function VideoPromo({ onPlay }) {
  return (
    <section
      id="video-promo"
      className="section-padding"
    >
      <FadeUp>
        <div className="video-overlay">
          <h2>Feel Fresh With Amazing Aquarium</h2>

          <button
            className="play-btn"
            onClick={onPlay}
            aria-label="Play Video"
          >
            <FaPlay />
          </button>
        </div>
      </FadeUp>
    </section>
  );
}

export default VideoPromo;