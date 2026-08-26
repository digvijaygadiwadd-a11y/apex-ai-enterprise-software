import React, { useState } from "react";

export default function DeepTelemetry() {
  const [telemetryLogs, setTelemetryLogs] = useState([
    { id: 1, node: "US-East-Primary", latency: "14ms", status: "Optimal", load: "42%" },
    { id: 2, node: "EU-Central-Worker", latency: "28ms", status: "Optimal", load: "68%" },
    { id: 3, node: "AP-South-Cluster", latency: "64ms", status: "Warning", load: "89%" },
    { id: 4, node: "SA-East-Node", latency: "112ms", status: "Critical", load: "95%" }
  ]);

  return (
    <div style={{ backgroundColor: "#0b0f19", padding: "24px", borderRadius: "16px", border: "1px solid #1a2234" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>Live Global Node Telemetry</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #1a2234", color: "#64748b" }}>
            <th style={{ padding: "12px" }}>Node Identifier</th>
            <th style={{ padding: "12px" }}>Latency</th>
            <th style={{ padding: "12px" }}>Status</th>
            <th style={{ padding: "12px" }}>CPU Load</th>
          </tr>
        </thead>
        <tbody>
          {telemetryLogs.map(log => (
            <tr key={log.id} style={{ borderBottom: "1px solid #111827" }}>
              <td style={{ padding: "12px", color: "#f8fafc", fontWeight: "600" }}>{log.node}</td>
              <td style={{ padding: "12px", color: "#94a3b8" }}>{log.latency}</td>
              <td style={{ padding: "12px" }}>
                <span style={{ 
                  padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "700",
                  backgroundColor: log.status === "Optimal" ? "#065f46" : log.status === "Warning" ? "#78350f" : "#7f1d1d",
                  color: log.status === "Optimal" ? "#34d399" : log.status === "Warning" ? "#fbbf24" : "#f87171"
                }}>
                  {log.status}
                </span>
              </td>
              <td style={{ padding: "12px", color: "#38bdf8" }}>{log.load}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
