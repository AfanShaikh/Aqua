import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

function RegisterForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [acceptTerms, setAcceptTerms] =
    useState(false);

  const [
    subscribeNewsletter,
    setSubscribeNewsletter,
  ] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      alert(
        "Please accept the Terms & Conditions."
      );
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
        Register to start shopping.
      </p>

      <div className="auth-field">
        <label>Full Name</label>

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
            placeholder="Create password"
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

      <div className="auth-field">
        <label>Confirm Password</label>

        <div className="password-wrapper">
          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value
              )
            }
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            {showConfirmPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        </div>
      </div>

      <div className="auth-checkboxes">
        <label className="checkbox-item">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={() =>
              setAcceptTerms(
                !acceptTerms
              )
            }
          />

          I accept the Terms &
          Conditions
        </label>

        <label className="checkbox-item">
          <input
            type="checkbox"
            checked={subscribeNewsletter}
            onChange={() =>
              setSubscribeNewsletter(
                !subscribeNewsletter
              )
            }
          />

          Subscribe to newsletter
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary auth-btn"
      >
        Create Account
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

export default RegisterForm;