import React from "react";
export default function DeepTelemetry() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Deep Telemetry Analytics</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Advanced system metrics, server performance distribution, and real-time logs overview.</p>
      
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
        <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 16px 0" }}>CPU & Memory Load Distribution</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                <span style={{ color: "#94a3b8" }}>Cluster Node Alpha (CPU)</span>
                <span style={{ color: "#38bdf8", fontWeight: "600" }}>78%</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#1e293b", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "78%", height: "100%", backgroundColor: "#38bdf8" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                <span style={{ color: "#94a3b8" }}>Cluster Node Beta (Memory)</span>
                <span style={{ color: "#34d399", fontWeight: "600" }}>62%</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#1e293b", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "62%", height: "100%", backgroundColor: "#34d399" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                <span style={{ color: "#94a3b8" }}>Database IOPS Throughput</span>
                <span style={{ color: "#facc15", fontWeight: "600" }}>84%</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#1e293b", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "84%", height: "100%", backgroundColor: "#facc15" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 16px 0" }}>Power BI Stream</h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>Live data connectors are active and securely pushing analytics to enterprise cloud sinks.</p>
          <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#1e293b", borderRadius: "8px", borderLeft: "4px solid #34d399" }}>
            <span style={{ fontSize: "12px", color: "#34d399", fontWeight: "600" }}>STATUS: SYNCHRONIZED</span>
            <p style={{ fontSize: "13px", color: "#e2e8f0", margin: "4px 0 0 0" }}>Last sync: 2 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
