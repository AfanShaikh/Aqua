import "./Auth.css";

import { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({ show, onClose, onToast }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (show) {
      setIsLogin(false);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  function handleAuthSuccess(message) {
    onClose();

    if (onToast && message) {
      onToast(message);
    }
  }

  function handleToast(message) {
    if (onToast) {
      onToast(message);
    }
  }

  return (
    <div className="auth-overlay">
      <div
        className="auth-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="close-auth"
          aria-label="Close authentication"
          onClick={onClose}
        >
          ×
        </button>

        {isLogin ? (
          <LoginForm
            onSwitch={() => setIsLogin(false)}
            onSuccess={handleAuthSuccess}
            onToast={handleToast}
          />
        ) : (
          <RegisterForm
            onSwitch={() => setIsLogin(true)}
            onSuccess={handleAuthSuccess}
            onToast={handleToast}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;