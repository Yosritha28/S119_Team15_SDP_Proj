// src/components/SectionExplore.js

import React from "react";
import MonumentCard from "./MonumentCard";

// Fill this with real monuments!
const monuments = [
  {
    name: "Taj Mahal",
    img: "/assets/tajmahal.jpg",
    location: "Agra, Uttar Pradesh",
    description: "UNESCO World Heritage Site. Built by Shah Jahan as a tribute to Mumtaz Mahal. One of the seven wonders of the world, famous for its pure white marble architecture and beautiful gardens."
  },
  {
    name: "Sun Temple",
    img: "/assets/suntemple.jpeg",
    location: "Konark, Odisha",
    description: "13th-century temple, designed as a chariot for the sun god Surya, with 24 wheels and six horses. Renowned for its stone carvings and engineering marvel."
  },
  {
    name: "Hampi",
    img: "/assets/hampi.jpg",
    location: "Karnataka",
    description: "Ancient city of the Vijayanagara Empire, filled with ruins, temples, and spectacular boulder landscapes. A center for art and architecture."
  },
  {
    name: "Qutb Minar",
    img: "/assets/qutbminar.jpg",
    location: "Delhi",
    description: "Tallest brick minaret in the world (73m). Built in 1193, notable for Indo-Islamic architecture and detailed carvings."
  },
  {
    name: "Gateway of India",
    img: "/assets/gatewayofindia.jpeg",
    location: "Mumbai",
    description: "Iconic arch monument built to commemorate King George V’s visit in 1911, blending Indo-Saracenic styles. Overlooks the Arabian Sea."
  }
];

export default function SectionExplore() {
  return (
    <div className="page-wrapper" style={{background:"#fffbe6"}}>
      <h2 style={{ textAlign:'center', color: "#3a9c35", marginBottom: 28 }}>Explore India's Wonders</h2>
      <div style={{display:"flex", justifyContent:"center", gap:"32px", flexWrap: "wrap", marginBottom:"16px"}}>
        {monuments.map((mon, i) => <MonumentCard key={i} {...mon} />)}
      </div>
      <p style={{textAlign:"center", marginTop:"20px", color:"#5d5519", fontSize:"1.09rem"}}>
        From regal palaces to ancient temples, each monument tells a story—tap any card for details and virtual tours!
      </p>
    </div>
  );
}
