import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
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
        Welcome Back
      </h2>

      <p className="auth-subtitle">
        Login to continue shopping.
      </p>

      <div className="auth-field">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />
      </div>

      <div className="auth-field">
        <label>Password</label>

        <div className="password-wrapper">
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        </div>
      </div>

      <div className="auth-options">
        <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() =>
              setRememberMe(
                !rememberMe
              )
            }
          />

          Remember me
        </label>

        <button
          type="button"
          className="forgot-password"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="btn btn-primary auth-btn"
      >
        Login
      </button>

      <div className="auth-divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-btn"
      >
        <FaGoogle />

        Continue with Google
      </button>
    </form>
  );
}

export default LoginForm;