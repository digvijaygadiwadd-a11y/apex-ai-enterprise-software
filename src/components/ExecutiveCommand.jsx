import React from "react";
import { useDashboard } from "../context/DashboardContext";

export default function ExecutiveCommand() {
  const { dashboardData } = useDashboard();

  return (
    <div style={{ padding: "24px", color: "#fff", background: "#0f172a", minHeight: "100vh", borderRadius: "12px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Executive Command Center</h2>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Global enterprise telemetry and operational metrics overview.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
        <div style={{ background: "#1e293b", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>Total Revenue / Metric</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "4px" }}>{dashboardData.totalRevenue}</p>
        </div>
        <div style={{ background: "#1e293b", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>Active Nodes / Units</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "4px" }}>{dashboardData.activeNodes}</p>
        </div>
        <div style={{ background: "#1e293b", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>System Health</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "4px", color: "#34d399" }}>{dashboardData.systemHealth}</p>
        </div>
        <div style={{ background: "#1e293b", padding: "16px", borderRadius: "8px", border: "1px solid #334155" }}>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>Network Latency</p>
          <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "4px" }}>{dashboardData.latency}</p>
        </div>
      </div>

      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#38bdf8" }}>Operational Status Report</h3>
        <p style={{ color: "#cbd5e1", fontSize: "15px" }}>{dashboardData.aiReport}</p>
        {dashboardData.customDataset && (
          <div style={{ marginTop: "16px", padding: "12px", background: "#0f172a", borderRadius: "6px", border: "1px solid #3b82f6" }}>
            <p style={{ color: "#38bdf8", fontWeight: "600" }}>Active CSV Dataset Loaded:</p>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Rows Processed: {dashboardData.customDataset.rowCount} | Columns: {dashboardData.customDataset.columns}</p>
          </div>
        )}
      </div>
    </div>
  );
}
