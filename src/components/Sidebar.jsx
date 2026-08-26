import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Executive Command", icon: "⚡" },
    { id: "import", label: "Data Import & AI Hub", icon: "📁" },
    { id: "analytics", label: "Deep Telemetry", icon: "📊" },
    { id: "inventory", label: "Inventory Matrix", icon: "📦" },
    { id: "alerts", label: "Threat Alerts", icon: "🚨" },
    { id: "ai", label: "Ask AI Assistant", icon: "🤖" },
  ];

  return (
    <div style={{ width: "260px", height: "100vh", backgroundColor: "#090d16", borderRight: "1px solid #1e293b", display: "flex", flexDirection: "column", padding: "20px 16px", boxSizing: "border-box" }}>
      {/* Brand Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "30px", paddingLeft: "8px" }}>
        <div style={{ width: "36px", height: "36px", backgroundColor: "#6366f1", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px", color: "#fff" }}>
          A
        </div>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold", margin: 0, color: "#f8fafc" }}>Apex AI</h1>
          <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>DECISION ENGINE</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                padding: "12px 14px",
                backgroundColor: isActive ? "#1e293b" : "transparent",
                color: isActive ? "#38bdf8" : "#94a3b8",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: isActive ? "600" : "400",
                textAlign: "left",
                transition: "all 0.2s ease"
              }}
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </div>

      {/* System Status Footer */}
      <div style={{ padding: "12px", backgroundColor: "#0f172a", borderRadius: "8px", border: "1px solid #1e293b" }}>
        <p style={{ fontSize: "11px", color: "#64748b", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>System State</p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "8px", height: "8px", backgroundColor: "#34d399", borderRadius: "50%" }}></div>
          <span style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: "500" }}>Live Operational</span>
        </div>
      </div>
    </div>
  );
}
