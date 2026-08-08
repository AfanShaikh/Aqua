import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const USERS_KEY = "aqualife_users";
const CURRENT_USER_KEY = "aqualife_current_user";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);

        if (parsedUser && parsedUser.id && parsedUser.email) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem(CURRENT_USER_KEY);
        }
      } catch (error) {
        console.error("Failed to load current user:", error);

        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }

    setLoading(false);
  }, []);

  function getUsers() {
    const savedUsers = localStorage.getItem(USERS_KEY);

    if (!savedUsers) {
      return [];
    }

    try {
      const users = JSON.parse(savedUsers);

      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error("Failed to load users:", error);

      return [];
    }
  }

  function register({ name, email, password }) {
    const users = getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find(
      (existingUser) => existingUser.email?.toLowerCase() === normalizedEmail,
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: normalizedEmail,
      password,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    const loggedInUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

    setUser(loggedInUser);

    return {
      success: true,
      message: "Account created successfully.",
      user: loggedInUser,
    };
  }

  function login({ email, password }) {
    const users = getUsers();

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find(
      (existingUser) =>
        existingUser.email?.toLowerCase() === normalizedEmail &&
        existingUser.password === password,
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const loggedInUser = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

    setUser(loggedInUser);

    return {
      success: true,
      message: "Login successful.",
      user: loggedInUser,
    };
  }

  function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);

    setUser(null);

    return {
      success: true,
      message: "Logged out successfully.",
    };
  }

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
