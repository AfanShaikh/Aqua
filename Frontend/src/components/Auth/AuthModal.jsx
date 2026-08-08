import "./Auth.css";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({ show, onClose }) {
  const [isLogin, setIsLogin] = useState(false);

  // console.log("AuthModal show:", show);

  useEffect(() => {
    if (show) {
      setIsLogin(false);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  function handleAuthSuccess() {
    onClose();
  }

  return (
    <div
      className="auth-overlay"
      onClick={onClose}
    >
      <div
        className="auth-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-auth"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {isLogin ? (
          <LoginForm
            onSwitch={() => setIsLogin(false)}
            onSuccess={handleAuthSuccess}
          />
        ) : (
          <RegisterForm
            onSwitch={() => setIsLogin(true)}
            onSuccess={handleAuthSuccess}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;