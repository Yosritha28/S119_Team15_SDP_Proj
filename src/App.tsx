// src/App.jsx

import React from "react";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// If you have an Admin page, import it here:
// import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <UserProvider>
      <Router>
        {/* Navbar with Home(dropdown), Profile, Admin, Login/Signup, Role Dropdown */}
        <Navbar />
        {/* Auth Modal handles login/signup/profile setup before user can access main app */}
        <AuthModal />

        {/* Main App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />     {/* Unified Home Page */}
          <Route path="/profile" element={<Profile />} />
          {/* Optionally: <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
