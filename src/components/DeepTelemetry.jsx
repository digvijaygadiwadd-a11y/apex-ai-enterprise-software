import React from "react";
export default function DeepTelemetry() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Deep Telemetry Analytics</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Advanced system metrics, server performance distribution, and real-time logs overview.</p>
      
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 16px 0" }}>Cluster Node Load Distribution</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
              <span style={{ color: "#94a3b8" }}>Cluster Node Alpha (CPU)</span>
              <span style={{ color: "#38bdf8", fontWeight: "600" }}>78%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: "#1e293b", borderRadius: "4px" }}>
              <div style={{ width: "78%", height: "100%", backgroundColor: "#38bdf8", borderRadius: "4px" }}></div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
              <span style={{ color: "#94a3b8" }}>Cluster Node Beta (Memory)</span>
              <span style={{ color: "#34d399", fontWeight: "600" }}>62%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: "#1e293b", borderRadius: "4px" }}>
              <div style={{ width: "62%", height: "100%", backgroundColor: "#34d399", borderRadius: "4px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
