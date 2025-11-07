// src/components/SectionHome.js

import React from "react";
export default function SectionHome() {
  return (
    <div className="page-wrapper" style={{paddingBottom:32, textAlign: "center"}}>
      <h1 style={{ color: "#E17000", fontWeight: "bold", marginBottom: 10 }}>
        Incredible Indian Heritage Portal
      </h1>
      <h3 style={{ color: "#3A9C35", marginBottom: 16 }}>
        Experience India's Treasures, Culture & History
      </h3>
      <img src="/assets/tajmahal.jpg"
        alt="Taj Mahal"
        style={{ width: 320, borderRadius: 18, boxShadow:"0 8px 28px #ddbe90", marginBottom:20 }} />
      <p style={{ fontSize: "1.21rem", color: "#2A2009"}}>
        Dive into the wonders of India's heritage, explore majestic monuments, vibrant festivals, artistry, and the spirit of its people.<br/>
        Plan, learn, discuss, and virtually travel—all from here!
      </p>
      <img src="/assets/festival.gif" alt="Festival" style={{
        width: 190, margin: "20px", borderRadius: "24px", boxShadow: "0 0 16px #eeb060"
      }} />
      <p style={{ fontSize: "1rem", color: "#d94e31" }}>
        Celebrate Diwali, Holi, and many more vibrant Indian festivals in our cultural gallery below.
      </p>
    </div>
  );
}
