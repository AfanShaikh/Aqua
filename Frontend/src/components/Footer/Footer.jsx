import "./Footer.css";

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
            <FaFishFins />
            <span>AquaLife</span>
          </h3>

          <p>
            Your premium destination for aquatic life and
            aquascaping needs.
          </p>

          <div className="social-links">
            <a
              href="#"
              aria-label="Facebook"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              // target="_blank"
              rel="noopener noreferrer"
            >
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
            <FaLocationDot />

            <span>
              Yari Road, Versova, Andheri West,
              Mumbai, Maharashtra – 400061
            </span>
          </p>

          <p>
            <FaPhone />

            <span>+91 98765 11122</span>
          </p>

          <p>
            <FaEnvelope />

            <span>support@aqualife.com</span>
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