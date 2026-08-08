import { FaUser, FaRightFromBracket } from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";

function UserMenu({ user, onLogout }) {
  const { logout } = useAuth();

  function handleLogout() {
    const result = logout();

    if (result.success && onLogout) {
      onLogout(result.message);
    }
  }

  return (
    <div className="user-menu">
      <div className="user-menu-profile">
        <FaUser />

        <span>{user?.name || "User"}</span>
      </div>

      <button type="button" className="user-menu-logout" onClick={handleLogout}>
        <FaRightFromBracket />

        <span>Logout</span>
      </button>
    </div>
  );
}

export default UserMenu;
