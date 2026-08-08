import "./Newsletter.css";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import FadeUp from "../FadeUp/FadeUp";

function Newsletter({ onToast }) {
  const [email, setEmail] = useState("");

  function showToast(message) {
    if (onToast) {
      onToast(message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      showToast("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      showToast("Please enter a valid email address.");
      return;
    }

    setEmail("");

    showToast("Thank you for subscribing!");
  }

  return (
    <section id="newsletter">
      <FadeUp>
        <div className="newsletter-container">
          <h2>Newsletter Subscribe</h2>

          <p>Get latest updates and offers.</p>

          <form id="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="newsletter-btn"
              aria-label="Subscribe to newsletter"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </FadeUp>
    </section>
  );
}

export default Newsletter;