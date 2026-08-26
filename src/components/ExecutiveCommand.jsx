import React from "react";
export default function ExecutiveCommand() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Executive Command Center</h2>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>Global enterprise telemetry, financial throughput, and Power BI analytics overview.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ backgroundColor: "#1e293b", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#38bdf8", border: "1px solid #334155" }}>🟢 Region: Global-East</span>
          <span style={{ backgroundColor: "#1e293b", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#34d399", border: "1px solid #334155" }}>⚡ Mode: Autonomous</span>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Total Revenue</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#34d399", margin: 0 }}>₹482,900</p>
          <span style={{ fontSize: "12px", color: "#34d399" }}>↑ +14.2% from last cycle</span>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Active Nodes</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#60a5fa", margin: 0 }}>1,248</p>
          <span style={{ fontSize: "12px", color: "#60a5fa" }}>99.2% cluster efficiency</span>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>System Health</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#34d399", margin: 0 }}>99.8%</p>
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>Zero packet loss</span>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 8px 0" }}>Network Latency</p>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#facc15", margin: 0 }}>14ms</p>
          <span style={{ fontSize: "12px", color: "#34d399" }}>Optimal threshold</span>
        </div>
      </div>

      {/* Power BI Embedded View Box */}
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", margin: 0, color: "#f8fafc" }}>Power BI Enterprise Analytics Live Stream</h3>
          <span style={{ fontSize: "12px", backgroundColor: "#312e81", color: "#818cf8", padding: "4px 10px", borderRadius: "6px" }}>Synced via Cloud Gateway</span>
        </div>
        <div style={{ width: "100%", height: "350px", backgroundColor: "#020617", borderRadius: "8px", border: "1px solid #334155", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {/* Embedded simulated Power BI Dashboard iframe interface */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "20px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", borderBottom: "1px solid #1e293b", paddingBottom: "10px" }}>
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>Report: Enterprise_Performance_Matrix_Q4</span>
              <span style={{ color: "#34d399", fontSize: "13px" }}>● Live Data Connection</span>
            </div>
            <div style={{ display: "flex", gap: "15px", flex: 1 }}>
              <div style={{ flex: 2, backgroundColor: "#0f172a", borderRadius: "6px", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p style={{ color: "#94a3b8", fontSize: "12px", margin: "0 0 10px 0" }}>Regional Sales & Telemetry Throughput Trend</p>
                <div style={{ height: "160px", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  {[50, 70, 45, 90, 85, 95, 60, 75, 100, 85, 90, 95].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i % 2 === 0 ? "#6366f1" : "#38bdf8", borderRadius: "4px 4px 0 0" }}></div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "6px", padding: "15px" }}>
                  <p style={{ color: "#94a3b8", fontSize: "12px", margin: "0 0 5px 0" }}>Conversion Ratio</p>
                  <p style={{ fontSize: "22px", fontWeight: "bold", color: "#34d399", margin: 0 }}>88.4%</p>
                </div>
                <div style={{ flex: 1, backgroundColor: "#0f172a", borderRadius: "6px", padding: "15px" }}>
                  <p style={{ color: "#94a3b8", fontSize: "12px", margin: "0 0 5px 0" }}>Error Rate</p>
                  <p style={{ fontSize: "22px", fontWeight: "bold", color: "#f87171", margin: 0 }}>0.02%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
