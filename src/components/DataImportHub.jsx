import React, { useState, useEffect } from "react";
export default function DataImportHub() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Data Import & AI Hub</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px" }}>Upload enterprise CSVs or connect live database feeds.</p>
      <div style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <p style={{ color: "#fbbf24", margin: 0, fontWeight: "500" }}>Drop CSV files here or click to browse.</p>
      </div>
    </div>
  );
}
