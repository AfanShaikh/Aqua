import "./Newsletter.css";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import FadeUp from "../FadeUp/FadeUp";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.trim())) {
      setMessage("Thank you for subscribing!");
      setMessageClass("success-msg");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
      setMessageClass("error-msg");
    }
  }

  return (
    <section id="newsletter">
      <FadeUp>
        <div className="newsletter-container">
          <h2>Newsletter Subscribe</h2>

          <p>Get latest updates and offers.</p>

          <form
            id="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

            <button
              type="submit"
              className="newsletter-btn"
            >
              <FaPaperPlane />
            </button>
          </form>

          {message && (
            <div
              id="form-message"
              className={messageClass}
            >
              {message}
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}

export default Newsletter;