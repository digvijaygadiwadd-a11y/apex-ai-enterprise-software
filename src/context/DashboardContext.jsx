import React, { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: "482,900",
    activeNodes: "1,248",
    systemHealth: "99.8%",
    latency: "14ms",
    totalUnits: "14,250",
    openAlerts: "3",
    supplyHealth: "94.2%",
    lowStockSkus: "12",
    categoryLabels: ["Electronics", "Apparel", "Logistics", "Raw Materials"],
    categoryValues: [40, 25, 20, 15],
    warehouseLabels: ["North Hub", "East Depots", "West Terminal", "South Gateway"],
    warehouseValues: [35, 28, 22, 15],
    aiReport: "Optimal throughput detected across primary distribution channels.",
    customDataset: null
  });

  const updateWithParsedData = (stats) => {
    setDashboardData(prev => ({
      ...prev,
      totalRevenue: stats.primaryMetric || prev.totalRevenue,
      activeNodes: stats.rowCount ? stats.rowCount.toString() : prev.activeNodes,
      totalUnits: stats.rowCount ? (stats.rowCount * 12).toString() : prev.totalUnits,
      customDataset: stats
    }));
  };

  return (
    <DashboardContext.Provider value={{ dashboardData, updateWithParsedData }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
