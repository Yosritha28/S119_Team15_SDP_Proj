// src/components/SectionVirtualTours.js

import React, { useState } from "react";
const tours = [
  {
    name: "Taj Mahal",
    //img: "/assets/tajmahal_360.jpg",
    info: "360° walk inside India's iconic mausoleum. Experience the marble gardens and architectural splendor.",
    url: "https://www.youtube.com/embed/JuCcugJEMEg?si=uqBr_EZG3pZLoknb"
  },
  {
    name: "Qutb Minar",
    //img: "/assets/qutbminar_360.jpg",
    info: "Scale the heights of Delhi's medieval wonder in a full panorama tour.",
    url: "https://www.youtube.com/embed/Qy1wM3i0elk?si=rcbX6j4hJQINItEL"
  },
  {
    name: "Ajanta Caves",
    //img: "/assets/ajanta.jpg",
    info: "Explore ancient Buddhist cave paintings and carvings.",
    url: "https://www.youtube.com/embed/W5Os9Jd8-1Y?si=eqg83wmst7Zp_IbY"
  }
];
export default function SectionVirtualTours() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="page-wrapper" style={{background:"#ede3d1"}}>
      <h2 style={{color:"#3a9c35",textAlign:'center',marginBottom:18}}>360° Virtual Tours</h2>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:'18px'}}>
        <h3 style={{color:"#E17000"}}>{tours[current].name}</h3>
        <img src={tours[current].img} alt={tours[current].name}
          style={{width:"290px",borderRadius:"14px",marginBottom:"8px"}}/>
        <iframe
          width="430"
          height="260"
          src={tours[current].url}
          title={tours[current].name + " Virtual Tour"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{borderRadius:"12px",boxShadow:"0 4px 22px #eeb060"}}
        />
        <div style={{maxWidth:"390px",textAlign:'center',fontSize:"1.07rem",color:"#2A2009",margin:"8px 0"}}>
          <b>About Tour:</b> {tours[current].info}
        </div>
        <div style={{marginTop:"8px"}}>
          <button onClick={() => setCurrent((current - 1 + tours.length) % tours.length)}
            style={{padding:"10px 20px",margin:"0 10px",background:"#E17000",color:"#fff",border:"none",borderRadius:8,cursor:"pointer"}}>
              Previous
          </button>
          <button onClick={() => setCurrent((current + 1) % tours.length)}
            style={{padding:"10px 20px",background:"#3a9c35",color:"#fff",border:"none",borderRadius:8,cursor:"pointer"}}>
              Next
          </button>
        </div>
      </div>
      <p style={{marginTop:"20px",fontStyle:"italic",textAlign:"center"}}>
        Explore all virtual tours—get inspired for your future travels!
      </p>
    </div>
  );
}
