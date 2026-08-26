import React, { useState, useEffect } from "react";

export default function DeepTelemetry() {
  const [telemetryLogs, setTelemetryLogs] = useState([
    { id: 1, timestamp: "14:20:01", node: "Cluster-Alpha", status: "Nominal", latency: "12ms" },
    { id: 2, timestamp: "14:20:04", node: "Cluster-Beta", status: "Nominal", latency: "14ms" },
    { id: 3, timestamp: "14:20:08", node: "Edge-Gateway-01", status: "Warning", latency: "42ms" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      const nodes = ["Cluster-Alpha", "Cluster-Beta", "Edge-Gateway-02", "Core-Router"];
      const statuses = ["Nominal", "Nominal", "Nominal", "Optimized"];
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomLatency = `${Math.floor(Math.random() * 20) + 10}ms`;

      setTelemetryLogs(prev => [
        { id: Date.now(), timestamp: timeStr, node: randomNode, status: randomStatus, latency: randomLatency },
        ...prev.slice(0, 5) // Keep last 6 logs
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "24px", color: "#fff", background: "#0f172a", minHeight: "100vh", borderRadius: "12px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Deep System Telemetry</h2>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Real-time event stream monitoring across enterprise infrastructure nodes.</p>

      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "#38bdf8" }}>Live Event Stream (Auto-Polling)</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {telemetryLogs.map((log) => (
            <div key={log.id} style={{ display: "flex", justifyContent: "space-between", background: "#0f172a", padding: "12px 16px", borderRadius: "6px", border: "1px solid #334155", fontSize: "14px" }}>
              <span style={{ color: "#94a3b8" }}>[{log.timestamp}]</span>
              <span style={{ fontWeight: "600", color: "#fff" }}>{log.node}</span>
              <span style={{ color: log.status === "Warning" ? "#facc15" : "#34d399" }}>{log.status}</span>
              <span style={{ color: "#38bdf8" }}>{log.latency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
