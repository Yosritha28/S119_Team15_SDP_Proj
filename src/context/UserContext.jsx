import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const roleList = [
  "Cultural Enthusiast",
  "Content Creator",
  "Tour Guide",
  "Admin"
];

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("portalUser");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("portalUser", JSON.stringify(user));
  }, [user]);

  const [authModal, setAuthModal] = useState(!user);
  const [authStep, setAuthStep] = useState("choose"); // "choose", "signup", "profile", "login"

  function logout() {
    setUser(null);
    localStorage.removeItem("portalUser");
    setAuthModal(true);
    setAuthStep("choose");
  }

  // Used for switching roles
  const setRole = role => setUser(user => user ? { ...user, role } : user);

  return (
    <UserContext.Provider
      value={{
        user, setUser,
        logout,
        setRole,
        authModal, setAuthModal, authStep, setAuthStep
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
