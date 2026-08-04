import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import FadeUp from "./FadeUp";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.trim())) {
      setMessage("Thank you for subscribing!");
      setMessageClass("success-msg");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
      setMessageClass("error-msg");
    }
  };

  return (
    <section
      id="newsletter"
      className="section-padding"
    >
      <FadeUp>
        <div className="container newsletter-container">
          <h2>Newsletter Subscribe</h2>

          <p>Get latest updates and offers.</p>

          <form
            id="newsletter-form"
            onSubmit={handleSubmit}
          >
            <input
              id="email-input"
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button
              type="submit"
              className="btn btn-primary"
            >
              <FaPaperPlane />
            </button>
          </form>

          <div
            id="form-message"
            className={messageClass}
          >
            {message}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default Newsletter;