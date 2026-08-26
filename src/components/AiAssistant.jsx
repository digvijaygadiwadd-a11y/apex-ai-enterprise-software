import React, { useState } from "react";

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello Digvijay! I am your Apex AI Enterprise Decision Engine. Connected to live neural telemetry. What would you like to analyze or query today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setLoading(true);

    // Simulating real-time LLM intelligence response based on enterprise metrics
    setTimeout(() => {
      let aiReply = "Analyzing enterprise telemetry through neural clusters... All systems operating at peak throughput.";
      const lower = userMessage.toLowerCase();
      
      if (lower.includes("revenue") || lower.includes("sales")) {
        aiReply = "Current tracked throughput shows a 14.2% growth cycle, standing at ₹482,900 with optimal regional distribution.";
      } else if (lower.includes("node") || lower.includes("server") || lower.includes("cluster")) {
        aiReply = "Cluster efficiency is currently at 99.2% with 1,248 active nodes processing real-time telemetry packets securely.";
      } else if (lower.includes("threat") || lower.includes("security") || lower.includes("error")) {
        aiReply = "Perimeter firewalls are active under zero-trust protocols. Current error rate is negligible at 0.02%.";
      } else {
        aiReply = `Processed query "${userMessage}". Enterprise decision matrix indicates stable ingestion across all connected Power BI and database gateways.`;
      }

      setMessages(prev => [...prev, { sender: "ai", text: aiReply }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: "10px", color: "#f8fafc", height: "calc(100vh - 110px)", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "15px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 4px 0" }}>Ask AI Assistant</h2>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>Real-time enterprise decision intelligence powered by LLM telemetry core.</p>
      </div>
      
      <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
        
        {/* Chat Messages Area */}
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "10px" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", backgroundColor: m.sender === "user" ? "#6366f1" : "#1e293b", color: "#fff", padding: "12px 18px", borderRadius: "10px", maxWidth: "75%", fontSize: "14px", lineHeight: "1.5", border: m.sender === "ai" ? "1px solid #334155" : "none" }}>
              <span style={{ fontSize: "11px", display: "block", color: m.sender === "user" ? "#c7d2fe" : "#94a3b8", marginBottom: "4px", fontWeight: "600" }}>{m.sender === "user" ? "Digvijay" : "Apex AI Engine"}</span>
              {m.text}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: "flex-start", backgroundColor: "#1e293b", color: "#94a3b8", padding: "12px 18px", borderRadius: "10px", fontSize: "14px", border: "1px solid #334155" }}>
              <em>AI is processing enterprise streams...</em>
            </div>
          )}
        </div>

        {/* Input Box */}
        <form onSubmit={handleSend} style={{ display: "flex", gap: "10px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #1e293b" }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask anything about enterprise metrics, revenue, nodes, or security..." 
            style={{ flex: 1, backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px", padding: "12px 16px", color: "#fff", outline: "none", fontSize: "14px" }}
          />
          <button type="submit" style={{ backgroundColor: "#38bdf8", color: "#0f172a", border: "none", borderRadius: "8px", padding: "0 24px", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>Send</button>
        </form>
      </div>
    </div>
  );
}
