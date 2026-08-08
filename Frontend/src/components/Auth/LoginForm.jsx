import "./Auth.css";

import { useState } from "react";

import useAuth from "../../hooks/useAuth";

function LoginForm({ onSwitch, onSuccess, onToast }) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      const message = "Please fill in all required fields.";

      setError(message);

      if (onToast) {
        onToast(message);
      }

      return;
    }

    const result = login({
      email: email.trim(),
      password,
    });

    if (!result.success) {
      const message = result.message || "Invalid email or password.";

      setError(message);

      if (onToast) {
        onToast(message);
      }

      return;
    }

    setEmail("");
    setPassword("");

    onSuccess(result.message || "Login successful.");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="auth-title">Welcome to AquaLife</h1>

      <p className="auth-subtitle">
        New here?{" "}
        <button
          type="button"
          className="auth-link"
          onClick={onSwitch}
        >
          Create an account
        </button>
      </p>

      {error && (
        <p className="auth-message auth-error" role="alert">
          {error}
        </p>
      )}

      <div className="auth-field">
        <label htmlFor="login-email">
          Email address
          <span>*</span>
        </label>

        <input
          id="login-email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="auth-field">
        <label htmlFor="login-password">
          Password
          <span>*</span>
        </label>

        <input
          id="login-password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
      </div>

      <div className="forgot-wrapper">
        <button
          type="button"
          className="forgot-password"
          onClick={() => {
            if (onToast) {
              onToast(
                "Password recovery is not available yet.",
              );
            }
          }}
        >
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