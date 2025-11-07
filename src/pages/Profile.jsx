/*import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user, logout } = useContext(UserContext);
  if (!user) return <div style={{textAlign:"center",marginTop:"80px"}}>
    Please log in to view your profile.
  </div>;

  return (
    <div className="page-wrapper" style={{maxWidth:500,margin:"50px auto",textAlign:"center"}}>
      <h1 style={{color:"#E17000"}}>Profile</h1>
      <img src="/assets/icon.jpg" alt="User Icon" style={{width:"90px",borderRadius:"60px",marginBottom:"12px"}}/>
      <h3 style={{color:"#3a9c35",marginBottom:10}}>Full Name: {user.name}</h3>
      <h3 style={{color:"#005f3b",marginBottom:10}}>Email: {user.email}</h3>
      <h3 style={{color:"#e4880a",marginBottom:10}}>Role: {user.role}</h3>
      <button onClick={logout}
        style={{
          padding: "10px 22px", background: "#d94e31", color: "#fff",
          borderRadius: 8, border: "none", fontWeight: "bold", marginTop: 26
        }}>
        Logout
      </button>
    </div>
  );
}*/


// src/pages/Profile.js

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      Please log in to view your profile.
    </div>
  );

  return (
    <div className="page-wrapper" style={{ maxWidth: 500, margin: "50px auto", textAlign: "center" }}>
      <h1 style={{ color: "#E17000" }}>Profile</h1>
      <img src="/assets/icon.jpg" alt="User Icon" style={{ width: "90px", borderRadius: "60px", marginBottom: "12px" }} />
      <h3 style={{ color: "#3a9c35", marginBottom: 10 }}>Full Name: {user.name}</h3>
      <h3 style={{ color: "#005f3b", marginBottom: 10 }}>Email: {user.email}</h3>
      <h3 style={{ color: "#e4880a", marginBottom: 10 }}>Role: {user.role}</h3>

      <div style={{ marginTop: 26 }}>
        <button onClick={logout}
          style={{
            padding: "10px 22px", background: "#d94e31", color: "#fff",
            borderRadius: 8, border: "none", fontWeight: "bold", marginRight: 16
          }}>
          Logout
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 22px", background: "#E17000", color: "#fff",
            borderRadius: 8, border: "none", fontWeight: "bold"
          }}>
          Home
        </button>
      </div>
    </div>
  );
}
