import React, { useState, useEffect } from "react";
export default function ExecutiveCommand() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Executive Command Center</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>Global enterprise telemetry and operational metrics overview.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Total Revenue</p>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#34d399", margin: "6px 0 0 0" }}>₹482,900</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Active Nodes</p>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#60a5fa", margin: "6px 0 0 0" }}>1,248</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>System Health</p>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#34d399", margin: "6px 0 0 0" }}>99.8%</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Network Latency</p>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#facc15", margin: "6px 0 0 0" }}>14ms</p>
        </div>
      </div>
    </div>
  );
}
