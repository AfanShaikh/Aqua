import {
  FaFishFins,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>
            <FaFishFins /> AquaLife
          </h3>

          <p>
            Your premium destination for aquatic life and
            aquascaping needs.
          </p>

          <div className="social-links">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#top-selling">Shop</a>
            </li>

            <li>
              <a href="#categories">Categories</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>

          <p>
            <FaLocationDot /> Yari Road, Versova,
            Andheri West, Mumbai,
            Maharashtra – 400061
          </p>

          <p>
            <FaPhone /> +91 98765 11122
          </p>

          <p>
            <FaEnvelope /> aqualife@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 AquaLife. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;