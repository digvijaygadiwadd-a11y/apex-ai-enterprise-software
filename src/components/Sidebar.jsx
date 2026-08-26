
export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "command", label: "Executive Command", icon: "⚡" },
    { id: "import", label: "Data Import & AI Hub", icon: "📂" },
    { id: "telemetry", label: "Deep Telemetry", icon: "📊" },
    { id: "inventory", label: "Inventory Matrix", icon: "📦" },
    { id: "threats", label: "Threat Alerts", icon: "🚨" },
    { id: "askai", label: "Ask AI Assistant", icon: "🤖" },
  ];

  return (
    <aside style={{ width: "280px", backgroundColor: "#0b0f19", borderRight: "1px solid #1a2234", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px 18px", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px", paddingLeft: "4px" }}>
          <div style={{ width: "42px", height: "42px", backgroundColor: "#2563eb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", color: "#fff", fontSize: "20px", boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)" }}>A</div>
          <div>
            <h1 style={{ fontSize: "20px", fontWeight: "900", color: "#fff", margin: 0, letterSpacing: "1px" }}>Apex AI</h1>
            <span style={{ fontSize: "11px", color: "#60a5fa", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.5px" }}>Decision Engine</span>
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {menuItems.map(item => {
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
                  color: isActive ? "#fff" : "#94a3b8",
                  border: isActive ? "1px solid #334155" : "1px solid transparent",
                  borderRadius: "10px",
                  fontWeight: isActive ? "700" : "500",
                  fontSize: "13px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s"
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div style={{ backgroundColor: "#07090e", padding: "14px", borderRadius: "12px", border: "1px solid #1a2234" }}>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", margin: "0 0 4px 0", textTransform: "uppercase" }}>System State</p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", backgroundColor: "#34d399", borderRadius: "50%", display: "inline-block" }}></span>
          <span style={{ fontSize: "12px", color: "#cbd5e1", fontWeight: "600" }}>Live Operational</span>
        </div>
      </div>
    </aside>
  );
}
