import React, { useState } from "react";
export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello Digvijay! I am your Apex AI Decision Engine. How can I assist with your enterprise telemetry today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }, { sender: "ai", text: "Processing query through neural enterprise nodes..." }]);
    setInput("");
  };

  return (
    <div style={{ padding: "10px", color: "#f8fafc", height: "calc(100vh - 100px)", display: "flex", flexDirection: "column" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Ask AI Assistant</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Enterprise decision intelligence chat assistant.</p>
      
      <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflowY: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", overflowY: "auto", paddingRight: "10px" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", backgroundColor: m.sender === "user" ? "#6366f1" : "#1e293b", color: "#fff", padding: "12px 16px", borderRadius: "10px", maxWidth: "70%", fontSize: "14px" }}>
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask anything about telemetry, inventory, or analytics..." 
            style={{ flex: 1, backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px", padding: "12px 16px", color: "#fff", outline: "none" }}
          />
          <button type="submit" style={{ backgroundColor: "#6366f1", color: "#fff", border: "none", borderRadius: "8px", padding: "0 20px", fontWeight: "600", cursor: "pointer" }}>Send</button>
        </form>
      </div>
    </div>
  );
}
