import React, { useState } from "react";
export default function AiAssistant() {
  const [messages] = useState([
    { sender: "ai", text: "Hello Digvijay! I am your Apex AI Decision Engine. How can I assist with your enterprise telemetry today?" }
  ]);

  return (
    <div style={{ padding: "10px", color: "#f8fafc", height: "calc(100vh - 100px)", display: "flex", flexDirection: "column" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Ask AI Assistant</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Enterprise decision intelligence chat assistant.</p>
      
      <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", backgroundColor: "#1e293b", color: "#fff", padding: "12px 16px", borderRadius: "10px", maxWidth: "70%", fontSize: "14px" }}>
              {m.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
