import "./Blog.css";

function BlogModal({ show, blog, onClose }) {
  if (!show || !blog) {
    return null;
  }

  return (
    <div
      className="modal"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          maxWidth: "700px",
          padding: 0,
          overflow: "hidden",
          textAlign: "left",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="close-modal"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "20px",
            color: "#fff",
            background: "rgba(0,0,0,0.5)",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            zIndex: 10,
          }}
        >
          &times;
        </span>

        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "30px" }}>
          <small
            style={{
              color: "#ff6b35",
              fontWeight: "600",
              display: "block",
              marginBottom: "10px",
            }}
          >
            {blog.date}
          </small>

          <h2
            style={{
              color: "#0a192f",
              marginBottom: "20px",
            }}
          >
            {blog.title}
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            Welcome to the full article! Taking care of an aquarium requires
            patience, the right equipment, and a good understanding of the
            aquatic life you are housing.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            Whether you are planting a new rimless tank or introducing a
            beautiful Betta fish to its new home, always ensure your water
            parameters are stable. Check your filters weekly and perform
            standard water changes to keep your ecosystem thriving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;