// src/components/SectionGallery.js

import React from "react";
const images = [
  { url: "/assets/tajmahal.jpg", title: "Taj Mahal - Agra" },
  { url: "/assets/hampi.jpg", title: "Hampi Ruins - Karnataka" },
  { url: "/assets/suntemple.jpeg", title: "Sun Temple - Konark" },
  { url: "/assets/gatewayofindia.jpeg", title: "Gateway of India - Mumbai" }
];
const gifs = [
  { url: "/assets/festival.gif", title: "Diwali Festival" },
  { url: "/assets/holi.gif", title: "Holi Festival" }
];
const videos = [
  { url: "https://www.youtube.com/embed/JuCcugJEMEg?si=uqBr_EZG3pZLoknb", title: "Taj Mahal 360° Virtual Tour" },
  { url: "https://www.youtube.com/embed/W5Os9Jd8-1Y?si=eqg83wmst7Zp_IbY", title: "Ajanta Caves 360° Exploration" }
];

export default function SectionGallery() {
  return (
    <div className="page-wrapper" style={{background:"#f7f2e9"}}>
      <h2 style={{color:"#E17000",textAlign:"center",marginBottom:18}}>Heritage Gallery</h2>
      <h4 style={{color:"#005f3b",marginBottom:10}}>Images</h4>
      <div style={{display:"flex",wrap:"wrap",gap:"22px",justifyContent:"center",marginBottom:"24px"}}>
        {images.map(img => (
          <figure key={img.url} style={{textAlign:"center"}}>
            <img src={img.url} alt={img.title} style={{
              width:"200px",
              borderRadius:"12px",
              boxShadow:"0 4px 18px #b39c5b"
            }}/>
            <figcaption style={{marginTop:"8px",fontWeight:"bold"}}>{img.title}</figcaption>
          </figure>
        ))}
      </div>
      <h4 style={{color:"#bf5100",marginBottom:10}}>GIFs</h4>
      <div style={{display:"flex",gap:"18px",justifyContent:"center",marginBottom:"18px"}}>
        {gifs.map(gif => (
          <figure key={gif.url} style={{textAlign:"center"}}>
            <img src={gif.url} alt={gif.title}
              style={{width:"200px",borderRadius:"16px",boxShadow:"0 2px 10px #ef9f3b"}} />
            <figcaption style={{marginTop:"8px",fontWeight:"bold"}}>{gif.title}</figcaption>
          </figure>
        ))}
      </div>
      <h4 style={{color:"#4f3110",marginBottom:10}}>Videos</h4>
      <div style={{display:"flex",gap:"18px",justifyContent:"center"}}>
        {videos.map(vid => (
          <figure key={vid.url} style={{textAlign:"center"}}>
            <iframe width="300" height="180" src={vid.url} title={vid.title} allowFullScreen
              style={{borderRadius:"12px"}}/>
            <figcaption style={{marginTop:"8px",fontWeight:"bold"}}>{vid.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
