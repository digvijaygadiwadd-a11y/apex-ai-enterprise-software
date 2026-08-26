import React, { useState } from "react";

export default function DataImportHub() {
  const [status, setStatus] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStatus(`Successfully uploaded: ${file.name}`);
    }
  };

  return (
    <div style={{ padding: "10px", color: "#f8fafc" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "bold", margin: "0 0 6px 0" }}>Data Import & AI Hub</h2>
      <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "14px" }}>Upload enterprise CSVs or connect live database feeds seamlessly.</p>
      
      <div style={{ backgroundColor: "#0f172a", padding: "40px", borderRadius: "12px", border: "2px dashed #334155", textAlign: "center", position: "relative" }}>
        <input 
          type="file" 
          onChange={handleFileUpload} 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }} 
        />
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>📁</div>
        <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px 0" }}>Drop Enterprise Datasets Here</h3>
        <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 20px 0" }}>Support for CSV, Excel, and Power BI telemetry exports</p>
        <span style={{ backgroundColor: "#38bdf8", color: "#0f172a", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", display: "inline-block" }}>Browse Files</span>
      </div>

      {status && (
        <div style={{ marginTop: "20px", padding: "14px", backgroundColor: "#1e293b", border: "1px solid #34d399", borderRadius: "8px", color: "#34d399", fontSize: "14px" }}>
          {status}
        </div>
      )}
    </div>
  );
}
