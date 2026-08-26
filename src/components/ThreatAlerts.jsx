import React from "react";
export default function ThreatAlerts() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Threat Alerts & Security</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Real-time security auditing, firewall telemetry, and vulnerability scans.</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ backgroundColor: "#0f172a", padding: "16px 20px", borderRadius: "12px", border: "1px solid #1e293b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h4 style={{ margin: "0 0 4px 0", fontSize: "15px", color: "#34d399" }}>🛡️ Perimeter Firewall Active</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>All inbound traffic is being filtered through zero-trust neural filters.</p>
          </div>
          <span style={{ fontSize: "12px", color: "#34d399", backgroundColor: "rgba(52, 211, 153, 0.1)", padding: "4px 10px", borderRadius: "6px" }}>SECURE</span>
        </div>
        <div style={{ backgroundColor: "#0f172a", padding: "16px 20px", borderRadius: "12px", border: "1px solid #1e293b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h4 style={{ margin: "0 0 4px 0", fontSize: "15px", color: "#60a5fa" }}>🔍 Automated Vulnerability Audit</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>Last deep scan completed successfully with 0 critical findings.</p>
          </div>
          <span style={{ fontSize: "12px", color: "#60a5fa", backgroundColor: "rgba(96, 165, 250, 0.1)", padding: "4px 10px", borderRadius: "6px" }}>PASSED</span>
        </div>
      </div>
    </div>
  );
}
