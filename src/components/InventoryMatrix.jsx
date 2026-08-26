import React from "react";
export default function InventoryMatrix() {
  const inventoryItems = [
    { id: "INV-001", name: "AI Accelerator Unit H100", stock: 142, status: "Optimal", warehouse: "Zone A" },
    { id: "INV-002", name: "Enterprise Server Blade 3U", stock: 85, status: "Stable", warehouse: "Zone B" },
    { id: "INV-003", name: "Quantum Security Module", stock: 19, status: "Low Stock", warehouse: "Zone C" },
    { id: "INV-004", name: "Fiber Optic Transceiver 10G", stock: 512, status: "Optimal", warehouse: "Zone A" },
  ];

  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Inventory Matrix</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Stock levels, warehouse distributions, and supply chain tracking.</p>
      
      <div style={{ backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "#1e293b", color: "#94a3b8", fontSize: "12px", textTransform: "uppercase" }}>
              <th style={{ padding: "14px 20px" }}>Item ID</th>
              <th style={{ padding: "14px 20px" }}>Component Name</th>
              <th style={{ padding: "14px 20px" }}>Stock Count</th>
              <th style={{ padding: "14px 20px" }}>Warehouse</th>
              <th style={{ padding: "14px 20px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item, index) => (
              <tr key={index} style={{ borderTop: "1px solid #1e293b" }}>
                <td style={{ padding: "14px 20px", color: "#38bdf8", fontWeight: "500" }}>{item.id}</td>
                <td style={{ padding: "14px 20px" }}>{item.name}</td>
                <td style={{ padding: "14px 20px" }}>{item.stock}</td>
                <td style={{ padding: "14px 20px", color: "#94a3b8" }}>{item.warehouse}</td>
                <td style={{ padding: "14px 20px" }}>
                  <span style={{ padding: "4px 10px", borderRadius: "6px", fontSize: "12px", backgroundColor: item.status === "Low Stock" ? "rgba(251, 113, 133, 0.1)" : "rgba(52, 211, 153, 0.1)", color: item.status === "Low Stock" ? "#fb7185" : "#34d399" }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
