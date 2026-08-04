import "./Auth.css";

import { useState } from "react";

function RegisterForm({
  onSwitch,
}) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [
    subscribeNewsletter,
    setSubscribeNewsletter,
  ] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      "Registration functionality will be added later."
    );
  }

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >
      <h2 className="auth-title">
        Create Account
      </h2>

      <p className="auth-subtitle">
        Already have an account?{" "}
        <button
          type="button"
          className="auth-link"
          onClick={onSwitch}
        >
          Sign In
        </button>
      </p>

      <div className="auth-field">
        <label>
          Full Name
          <span>*</span>
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />
      </div>

      <div className="auth-field">
        <label>
          Email Address
          <span>*</span>
        </label>

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </div>

      <div className="auth-field">
        <label>
          Create Password
          <span>*</span>
        </label>

        <input
          type="password"
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
        />
      </div>

      <label className="newsletter-check">
        <input
          type="checkbox"
          checked={subscribeNewsletter}
          onChange={() =>
            setSubscribeNewsletter(
              !subscribeNewsletter
            )
          }
        />

        <span>
          Send me offers and updates
          on new aquatic arrivals
        </span>
      </label>

      <button
        type="submit"
        className="auth-submit"
      >
        CREATE ACCOUNT
      </button>

      <p className="auth-terms">
        By creating an account,
        you agree to AquaLife's{" "}
        <a href="#">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}

export default RegisterForm;