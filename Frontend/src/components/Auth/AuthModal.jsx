import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({
  show,
  onClose,
}) {
  const [isLogin, setIsLogin] =
    useState(true);

  if (!show) {
    return null;
  }

  return (
    <div
      className="auth-overlay"
      onClick={onClose}
    >
      <div
        className="auth-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="auth-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${
              isLogin ? "active" : ""
            }`}
            onClick={() =>
              setIsLogin(true)
            }
          >
            Login
          </button>

          <button
            className={`auth-tab ${
              !isLogin ? "active" : ""
            }`}
            onClick={() =>
              setIsLogin(false)
            }
          >
            Sign Up
          </button>
        </div>

        <div className="auth-body">
          {isLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;