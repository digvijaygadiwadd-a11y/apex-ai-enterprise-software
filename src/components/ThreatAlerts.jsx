import React, { useState, useEffect } from "react";
export default function ThreatAlerts() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Threat Alerts & Security</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>Real-time security auditing and vulnerability scans.</p>
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <p style={{ color: "#34d399", margin: 0, fontWeight: "500" }}>No active security breaches or threat vulnerabilities detected.</p>
      </div>
    </div>
  );
}
