// src/components/SectionBoard.js

import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function SectionBoard() {
  const { userRole } = useContext(UserContext);
  const [posts, setPosts] = useState([
    { user: "GuideAnil", role: "Tour Guide", text: "Welcome! Ask me anything about Hampi or temple festivals." },
    { user: "HistoryFan", role: "Cultural Enthusiast", text: "Fascinated by the carvings in Konark Sun Temple. Any facts?" },
    { user: "ExplorerRani", role: "Tour Guide", text: "Best time for Ajanta Caves tour is November–February." },
  ]);
  const [input, setInput] = useState("");

  function addPost() {
    if (input.trim()) setPosts([...posts, { user: "You", role: userRole, text: input }]);
    setInput("");
  }

  return (
    <div className="page-wrapper" style={{maxWidth:"700px",margin:"auto",textAlign:"center"}}>
      <h2 style={{color:"#d94e31"}}>Cultural Discussion Board</h2>
      <div style={{maxHeight:240,overflowY:"auto",margin:"16px auto",border:"2px solid #E17000",borderRadius:"12px",background:"#ffd9a3"}}>
        {posts.map((p, i) => (
          <div key={i} style={{
            borderBottom:"1px solid #dab26b",
            padding:"14px",
            color:"#2a2009",
            fontSize:"1.09rem"
          }}>
            <strong>{p.user}</strong> <span style={{color:'#3a9c35'}}>({p.role})</span>: {p.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Share your thoughts..."
        style={{padding:'10px',borderRadius:8,border:'1px solid #E17000',width:"58%",marginBottom:"12px"}}
      />
      <button onClick={addPost}
        style={{padding:"10px 18px",marginLeft:"12px",background:"#3a9c35",color:"#fff",border:"none",borderRadius:8,cursor:"pointer"}}>
        Post
      </button>
      {userRole === "Admin" &&
        <button onClick={() => setPosts([])}
          style={{marginLeft:"18px",color:"white",background:"#d94e31",padding:"10px 18px",border:"none",borderRadius:8,cursor:"pointer"}}>
          Clear All
        </button>
      }
      <p style={{marginTop:"20px",color:"#e18b26"}}>
        Join the conversation! Share travel tips, monument stories, or festival moments.
      </p>
    </div>
  );
}