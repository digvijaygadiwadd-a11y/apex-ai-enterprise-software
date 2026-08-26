import React from "react";
export default function ExecutiveCommand() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Executive Command Center</h2>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>Global enterprise telemetry, financial throughput, and operational metrics overview.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ backgroundColor: "#1e293b", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#38bdf8", border: "1px solid #334155" }}>🟢 Region: Global-East</span>
          <span style={{ backgroundColor: "#1e293b", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#34d399", border: "1px solid #334155" }}>⚡ Mode: Autonomous</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Total Revenue</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#34d399", margin: 0 }}>₹482,900</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Active Nodes</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#60a5fa", margin: 0 }}>1,248</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>System Health</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#34d399", margin: 0 }}>99.8%</p>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Network Latency</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#facc15", margin: 0 }}>14ms</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 16px 0", color: "#f8fafc" }}>Operational Status & Throughput Flow</h3>
        <div style={{ height: "160px", display: "flex", alignItems: "flex-end", gap: "12px", padding: "10px 0" }}>
          {[40, 65, 45, 85, 95, 75, 60, 90, 100, 80, 70, 88].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i % 2 === 0 ? "#6366f1" : "#38bdf8", borderRadius: "4px 4px 0 0" }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
