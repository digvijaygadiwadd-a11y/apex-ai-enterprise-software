import React, { useState, useEffect } from "react";
export default function DeepTelemetry() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Deep Telemetry Analytics</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>Advanced system metrics, server performance, and logs overview.</p>
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <p style={{ color: "#38bdf8", margin: 0, fontWeight: "500" }}>Telemetry pipeline is streaming live nodes data smoothly.</p>
      </div>
    </div>
  );
}
