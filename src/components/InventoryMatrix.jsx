import React from "react";

export default function InventoryMatrix() {
  const items = [
    { sku: "SKU-9021", name: "Enterprise Xeon Server Blade", stock: 142, warehouse: "East-Hub", status: "In Stock" },
    { sku: "SKU-4412", name: "Cisco Catalyst 9300 Switch", stock: 12, warehouse: "North-DC", status: "Low Stock" },
    { sku: "SKU-8831", name: "NVMe 7.68TB Enterprise SSD", stock: 320, warehouse: "South-Hub", status: "In Stock" },
    { sku: "SKU-1029", name: "Redundant Power Supply 1600W", stock: 4, warehouse: "West-DC", status: "Critical" }
  ];

  return (
    <div style={{ backgroundColor: "#0b0f19", padding: "24px", borderRadius: "16px", border: "1px solid #1a2234" }}>
      <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>Global Warehouse Stock Matrix</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #1a2234", color: "#64748b" }}>
            <th style={{ padding: "12px" }}>SKU</th>
            <th style={{ padding: "12px" }}>Product Name</th>
            <th style={{ padding: "12px" }}>Stock Units</th>
            <th style={{ padding: "12px" }}>Warehouse</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.sku} style={{ borderBottom: "1px solid #111827" }}>
              <td style={{ padding: "12px", color: "#38bdf8", fontWeight: "600" }}>{item.sku}</td>
              <td style={{ padding: "12px", color: "#f8fafc" }}>{item.name}</td>
              <td style={{ padding: "12px", color: "#94a3b8" }}>{item.stock}</td>
              <td style={{ padding: "12px", color: "#94a3b8" }}>{item.warehouse}</td>
              <td style={{ padding: "12px", color: item.status === "Critical" ? "#f87171" : item.status === "Low Stock" ? "#fbbf24" : "#34d399", fontWeight: "700" }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
