import "./Auth.css";

import { useState } from "react";

import useAuth from "../../hooks/useAuth";

function RegisterForm({ onSwitch, onSuccess, onToast }) {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      const message = "Please fill in all required fields.";

      setError(message);

      if (onToast) {
        onToast(message);
      }

      return;
    }

    if (password.length < 8) {
      const message = "Password must be at least 8 characters.";

      setError(message);

      if (onToast) {
        onToast(message);
      }

      return;
    }

    const result = register({
      name: name.trim(),
      email: email.trim(),
      password,
    });

    if (!result.success) {
      const message = result.message || "Unable to create your account.";

      setError(message);

      if (onToast) {
        onToast(message);
      }

      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setSubscribeNewsletter(true);

    onSuccess("Account created successfully!");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="auth-title">Create Account</h1>

      <p className="auth-subtitle">
        Already have an account?{" "}
        <button type="button" className="auth-link" onClick={onSwitch}>
          Sign In
        </button>
      </p>

      {error && (
        <p className="auth-message auth-error" role="alert">
          {error}
        </p>
      )}

      <div className="auth-field">
        <label htmlFor="register-name">
          Full Name
          <span>*</span>
        </label>

        <input
          id="register-name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />
      </div>

      <div className="auth-field">
        <label htmlFor="register-email">
          Email Address
          <span>*</span>
        </label>

        <input
          id="register-email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="auth-field">
        <label htmlFor="register-password">
          Create Password
          <span>*</span>
        </label>

        <input
          id="register-password"
          type="password"
          placeholder="Minimum 8 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
        />
      </div>

      <label className="newsletter-check">
        <input
          type="checkbox"
          checked={subscribeNewsletter}
          onChange={(event) => setSubscribeNewsletter(event.target.checked)}
        />

        <span>Send me offers and updates on new aquatic arrivals</span>
      </label>

      <button type="submit" className="auth-submit">
        CREATE ACCOUNT
      </button>

      <p className="auth-terms">
        By creating an account, you agree to AquaLife&apos;s{" "}
        <a href="#terms">Terms of Service</a> and{" "}
        <a href="#privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}

export default RegisterForm;
