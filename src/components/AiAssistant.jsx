import React, { useState } from "react";

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello Digvijay! Debugging Groq Cloud connection..." }
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

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      console.log("Using API Key prefix:", apiKey ? apiKey.substring(0, 8) + "..." : "NOT FOUND");

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are Apex AI, an advanced assistant built for Digvijay." },
            { role: "user", content: userMessage }
          ],
          temperature: 0.7
        })
      });

      const data = await res.json();
      console.log("Groq API Full Response:", data);

      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMessages(prev => [...prev, { sender: "ai", text: data.choices[0].message.content }]);
      } else if (data.error) {
        setMessages(prev => [...prev, { sender: "ai", text: `Groq Error: ${data.error.message}` }]);
      } else {
        setMessages(prev => [...prev, { sender: "ai", text: "Error: Unexpected response format from Groq. Check F12 console." }]);
      }
    } catch (err) {
      console.error("Fetch Exception:", err);
      setMessages(prev => [...prev, { sender: "ai", text: `Network Exception: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "10px", color: "#f8fafc", height: "calc(100vh - 110px)", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "15px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 4px 0" }}>Ask AI Assistant (Groq Debug)</h2>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>Connected with live console diagnostics.</p>
      </div>
      
      <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
        
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "10px" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", backgroundColor: m.sender === "user" ? "#6366f1" : "#1e293b", color: "#fff", padding: "12px 18px", borderRadius: "10px", maxWidth: "75%", fontSize: "14px", lineHeight: "1.5", border: m.sender === "ai" ? "1px solid #334155" : "none" }}>
              <span style={{ fontSize: "11px", display: "block", color: m.sender === "user" ? "#c7d2fe" : "#94a3b8", marginBottom: "4px", fontWeight: "600" }}>{m.sender === "user" ? "Digvijay" : "Groq AI"}</span>
              {m.text}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: "flex-start", backgroundColor: "#1e293b", color: "#38bdf8", padding: "12px 18px", borderRadius: "10px", fontSize: "14px", border: "1px solid #334155" }}>
              <em>Querying Groq Cloud...</em>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} style={{ display: "flex", gap: "10px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #1e293b" }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type your message..." 
            style={{ flex: 1, backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px", padding: "12px 16px", color: "#fff", outline: "none", fontSize: "14px" }}
          />
          <button type="submit" style={{ backgroundColor: "#38bdf8", color: "#0f172a", border: "none", borderRadius: "8px", padding: "0 24px", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>Send</button>
        </form>
      </div>
    </div>
  );
}