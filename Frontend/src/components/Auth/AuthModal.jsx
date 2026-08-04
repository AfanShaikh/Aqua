import "./Auth.css";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({
  show,
  onClose,
}) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (show) {
      setIsLogin(false);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="auth-overlay"
      onClick={onClose}
    >
      <div
        className="auth-panel"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="close-auth"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {!isLogin ? (
          <RegisterForm
            onSwitch={() => setIsLogin(true)}
          />
        ) : (
          <LoginForm
            onSwitch={() => setIsLogin(false)}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;