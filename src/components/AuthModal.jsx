import React, { useState, useContext } from "react";
import { UserContext, roleList } from "../context/UserContext";

export default function AuthModal() {
  const {
    user, setUser, setRole,
    authModal, setAuthModal,
    authStep, setAuthStep
  } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "", password: "", name: "", role: ""
  });

  // Step: "choose" - initial choice
  // Step: "signup" - signup credentials
  // Step: "profile" - mandatory profile setup (first-time only)
  // Step: "login" - login for existing user

  // Simulated localStorage for "accounts": only one demo user for simplicity
  function handleLogin() {
    const stored = localStorage.getItem("portalUser");
    if (!stored) {
      alert("No account found. Please signup first!");
      setAuthStep("signup");
      return;
    }
    const u = JSON.parse(stored);
    if (form.email === u.email && form.password === u.password) {
      setUser(u);
      setAuthModal(false);
    } else {
      alert("Invalid credentials. Try again.");
    }
  }

  function handleSignup() {
    if (!form.email || !form.password) {
      alert("Email and Password required");
      return;
    }
    setAuthStep("profile");
  }

  function finishProfileSetup() {
    if (!form.name || !form.role) {
      alert("Name and Role required");
      return;
    }
    setUser(form);
    setAuthModal(false);
    // Save new user
    localStorage.setItem("portalUser", JSON.stringify(form));
  }

  if (!authModal) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.65)", zIndex: 99,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#fffbe6", borderRadius: 20, padding: 30,
        minWidth: 330, boxShadow: "0 2px 28px #bb883b"
      }}>
        {/* Choose signup/login for first-time visitors */}
        {authStep === "choose" && (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#E17000" }}>Welcome to Indian Heritage Portal</h2>
            <p style={{ fontSize: "1.15rem", marginBottom: 22 }}>Please Login or Signup to continue.</p>
            <button
              style={mainBtn}
              onClick={() => setAuthStep("login")}
            >Login</button>
            <button
              style={mainBtn}
              onClick={() => setAuthStep("signup")}
            >Signup</button>
          </div>
        )}
        {/* Login for existing users */}
        {authStep === "login" && (
          <form style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h2 style={{ color: "#E17000" }}>Login</h2>
            <input
              type="email" placeholder="Email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputField}
            />
            <input
              type="password" placeholder="Password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              style={inputField}
            />
            <button type="button"
              style={mainBtn}
              onClick={handleLogin}
            >
              Login
            </button>
            <div style={{ marginTop: 18, textAlign: "center" }}>
              <span>Don't have an account?&nbsp;
                <span style={linkStyle} onClick={() => setAuthStep("signup")}>Signup</span>
              </span>
            </div>
          </form>
        )}
        {/* Signup for first timers */}
        {authStep === "signup" && (
          <form style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <h2 style={{ color: "#E17000" }}>Signup</h2>
            <input
              type="email" placeholder="Email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputField}
            />
            <input
              type="password" placeholder="Password"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              style={inputField}
            />
            <button type="button"
              style={mainBtn}
              onClick={handleSignup}
            >Continue to Profile Setup</button>
            <div style={{marginTop:18,textAlign:"center"}}>
              <span>Already have an account?&nbsp;
                <span style={linkStyle} onClick={() => setAuthStep("login")}>Login</span>
              </span>
            </div>
          </form>
        )}
        {/* Profile setup – For new signup users only! */}
        {authStep === "profile" && (
          <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ color: "#E17000" }}>Setup Your Profile</h2>
            <input
              type="text" placeholder="Full Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputField}
            />
            <label htmlFor="role" style={{ fontWeight: "bold", color: "#E17000" }}>Choose your role for exploring the portal:</label>
            <select
              id="role"
              value={form.role}
              onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
              style={{
                padding: "10px", borderRadius: 8, border: '1.5px solid #3a9c35',
                fontWeight: "bold", marginBottom: 16
              }}
            >
              <option value="">-- Select Role --</option>
              {roleList.map(role => (
                <option value={role} key={role}>{role}</option>
              ))}
            </select>
            <button type="button"
              style={mainBtn}
              onClick={finishProfileSetup}
            >Finish & Explore</button>
          </form>
        )}
      </div>
    </div>
  );
}

const mainBtn = {
  padding:"12px 24px",
  marginTop:12,
  background:"#E17000",
  color:"#fff",
  border:"none",
  borderRadius:9,
  fontWeight:"bold",
  cursor:"pointer",
  fontSize:"1.04rem"
};
const inputField = {
  padding:"10px",
  borderRadius:8,
  border:'1.5px solid #E17000'
};
const linkStyle = {
  textDecoration:"underline",
  color:"#3a9c35",
  cursor:"pointer",
  fontWeight:"bold"
};
