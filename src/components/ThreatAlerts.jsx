
export default function ThreatAlerts() {
  const alerts = [
    { id: "ALT-501", severity: "High", source: "API Gateway Firewall", desc: "Brute-force login anomaly detected from IP block 185.220.x.x", time: "4 mins ago" },
    { id: "ALT-502", severity: "Medium", source: "North-DC Switch Cluster", desc: "High packet loss ratio recorded on uplink port 4", time: "18 mins ago" },
    { id: "ALT-503", severity: "Low", source: "Auth Service", desc: "Expired SSL certificate warning on secondary subdomain", time: "2 hours ago" }
  ];

  return (
    <div style={{ backgroundColor: "#0b0f19", padding: "24px", borderRadius: "16px", border: "1px solid #1a2234" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>Security & Infrastructure Threat Alerts</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {alerts.map(alert => (
          <div key={alert.id} style={{ backgroundColor: "#0f172a", padding: "16px", borderRadius: "12px", border: "1px solid #1e293b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "6px", backgroundColor: alert.severity === "High" ? "#7f1d1d" : alert.severity === "Medium" ? "#78350f" : "#1e3a8a", color: alert.severity === "High" ? "#f87171" : alert.severity === "Medium" ? "#fbbf24" : "#60a5fa" }}>{alert.severity}</span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#fff" }}>{alert.source}</span>
                <span style={{ fontSize: "11px", color: "#64748b" }}>({alert.id})</span>
              </div>
              <p style={{ fontSize: "13px", color: "#cbd5e1", margin: 0 }}>{alert.desc}</p>
            </div>
            <span style={{ fontSize: "11px", color: "#64748b", whiteSpace: "nowrap" }}>{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
