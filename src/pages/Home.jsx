// src/pages/Home.js

import React from "react";
import SectionHome from "../components/SectionHome";
import SectionExplore from "../components/SectionExplore";
import SectionGallery from "../components/SectionGallery";
import SectionVirtualTours from "../components/SectionVirtualTours";
import SectionBoard from "../components/SectionBoard";
//import SectionFoodCulture from "../components/SectionFoodCulture";
//import SectionDressCulture from "../components/SectionDressCulture";
//import SectionDanceStyles from "../components/SectionDanceStyles";

export default function Home() {
  return (
    <div style={{
      position:"relative",
      minHeight:"100vh",
      background:"#fffbe6",
      overflowX:"hidden"
    }}>
      {/* Motion BG Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/assets/hampi.mp4"
        style={{
          position: 'fixed',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          opacity: 0.26,
          pointerEvents: 'none'
        }}
      />

      {/* All Sections, With IDs for Navbar dropdown link */}
      <section id="home"><SectionHome /></section>
      <hr style={{margin: "40px 0", border: "none", borderTop: "3px dashed #E17000"}} />
      <section id="explore"><SectionExplore /></section>
      <hr style={{margin: "40px 0", border: "none", borderTop: "3px dashed #3a9c35"}} />
      <section id="gallery"><SectionGallery /></section>
      <hr style={{margin: "40px 0", border: "none", borderTop: "3px dashed #b39c5b"}} />
      <section id="virtualtours"><SectionVirtualTours /></section>
      <hr style={{margin: "40px 0", border: "none", borderTop: "3px dashed #e18b26"}} />
      <section id="board"><SectionBoard /></section>
    </div>
  );
}