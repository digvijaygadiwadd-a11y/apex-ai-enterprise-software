import React from "react";
export default function DataImportHub() {
  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Data Import & AI Hub</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Upload enterprise CSVs or connect live database feeds seamlessly.</p>
      
      <div style={{ backgroundColor: "#0f172a", padding: "40px", borderRadius: "12px", border: "2px dashed #334155", textAlign: "center", cursor: "pointer" }}>
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>📁</div>
        <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px 0" }}>Drop Enterprise Datasets Here</h3>
        <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 20px 0" }}>Support for CSV, Excel, and Power BI telemetry exports</p>
        <button style={{ backgroundColor: "#38bdf8", color: "#0f172a", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Browse Files</button>
      </div>
    </div>
  );
}
