import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function ExecutiveCommand() {
  const { dashboardData } = useContext(DashboardContext);

  const categoryData = {
    labels: dashboardData.categoryLabels,
    datasets: [{ label: "Gross Revenue ($)", data: dashboardData.categoryValues, backgroundColor: "#3b82f6", borderRadius: 6 }]
  };

  const warehouseData = {
    labels: dashboardData.warehouseLabels,
    datasets: [{ data: dashboardData.warehouseValues, backgroundColor: ["#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"] }]
  };

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {/* 5 KPI Cards Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "14px", marginBottom: "28px" }}>
        <div style={{ backgroundColor: "#0b0f19", padding: "16px", borderRadius: "12px", border: "1px solid #1a2234" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Total Revenue</p>
          <p style={{ fontSize: "18px", fontWeight: "900", color: "#34d399", margin: "6px 0 0 0" }}>{dashboardData.totalRevenue}</p>
        </div>
        <div style={{ backgroundColor: "#0b0f19", padding: "16px", borderRadius: "12px", border: "1px solid #1a2234" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Total Units Sold</p>
          <p style={{ fontSize: "18px", fontWeight: "900", color: "#60a5fa", margin: "6px 0 0 0" }}>{dashboardData.totalUnits}</p>
        </div>
        <div style={{ backgroundColor: "#0b0f19", padding: "16px", borderRadius: "12px", border: "1px solid #1a2234" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Open Alerts</p>
          <p style={{ fontSize: "18px", fontWeight: "900", color: "#fbbf24", margin: "6px 0 0 0" }}>{dashboardData.openAlerts}</p>
        </div>
        <div style={{ backgroundColor: "#0b0f19", padding: "16px", borderRadius: "12px", border: "1px solid #1a2234" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Supply Health</p>
          <p style={{ fontSize: "15px", fontWeight: "900", color: "#fb7185", margin: "8px 0 0 0" }}>{dashboardData.supplyHealth}</p>
        </div>
        <div style={{ backgroundColor: "#0b0f19", padding: "16px", borderRadius: "12px", border: "1px solid #1a2234" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", margin: 0 }}>Low Stock SKUs</p>
          <p style={{ fontSize: "18px", fontWeight: "900", color: "#f87171", margin: "6px 0 0 0" }}>{dashboardData.lowStockSkus}</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "24px", marginBottom: "28px" }}>
        <div style={{ backgroundColor: "#0b0f19", padding: "20px", borderRadius: "16px", border: "1px solid #1a2234" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#f1f5f9", margin: "0 0 16px 0" }}>Gross Revenue Breakdown (Live Parsed Data)</h3>
          <div style={{ position: "relative", height: "260px" }}>
            <Bar data={categoryData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
          </div>
        </div>
        <div style={{ backgroundColor: "#0b0f19", padding: "20px", borderRadius: "16px", border: "1px solid #1a2234" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#f1f5f9", margin: "0 0 16px 0" }}>Operational Distribution Matrix</h3>
          <div style={{ position: "relative", height: "260px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Doughnut data={warehouseData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "right", labels: { boxWidth: 10, font: { size: 10 }, color: "#94a3b8" } } } }} />
          </div>
        </div>
      </div>

      {/* AI Analyst Report Box */}
      <div style={{ backgroundColor: "#0b0f19", padding: "20px", borderRadius: "16px", border: "1px solid #1a2234" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#38bdf8", margin: "0 0 10px 0" }}>Apex Enterprise Insights & Action Plan</h3>
        <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "13px", color: "#cbd5e1", margin: 0, lineHeight: "1.6" }}>
          {dashboardData.aiReport}
        </pre>
      </div>
    </div>
  );
}
