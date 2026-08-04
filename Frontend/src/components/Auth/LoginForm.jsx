import "./Auth.css";

import { useState } from "react";

function LoginForm({
  onSwitch,
}) {
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !email.trim() ||
      !password.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login functionality will be added later.");
  }

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >
      <h2 className="auth-title">
        Welcome to AquaLife
      </h2>

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

      <div className="auth-field">
        <label>
          Email address
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
          Password
          <span>*</span>
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
        />
      </div>

      <div className="forgot-wrapper">
        <button
          type="button"
          className="forgot-password"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="auth-submit"
      >
        SIGN IN
      </button>
    </form>
  );
}

export default LoginForm;