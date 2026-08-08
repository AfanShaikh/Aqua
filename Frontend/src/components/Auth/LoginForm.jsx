import "./Auth.css";

import { useState } from "react";

import useAuth from "../../hooks/useAuth";

function LoginForm({ onSwitch, onSuccess }) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const result = login({
      email: email.trim(),
      password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    setEmail("");
    setPassword("");

    onSuccess();
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-title">Welcome to AquaLife</h2>

      <p className="auth-subtitle">
        New here?{" "}
        <button type="button" className="auth-link" onClick={onSwitch}>
          Create an account
        </button>
      </p>

      {error && <p className="auth-message auth-error">{error}</p>}

      <div className="auth-field">
        <label>
          Email address
          <span>*</span>
        </label>

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="auth-field">
        <label>
          Password
          <span>*</span>
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="forgot-wrapper">
        <button type="button" className="forgot-password">
          Forgot Password?
        </button>
      </div>

      <button type="submit" className="auth-submit">
        SIGN IN
      </button>
    </form>
  );
}

export default LoginForm;
