import React, { useState, useEffect } from "react";
export default function AiAssistant() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Ask AI Assistant</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>Enterprise decision intelligence chat assistant.</p>
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <p style={{ color: "#818cf8", margin: 0, fontWeight: "500" }}>AI model is ready for enterprise queries.</p>
      </div>
    </div>
  );
}
