import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: "482,900",
    activeNodes: "1,248",
    systemHealth: "99.8%",
    latency: "14ms",
    customDataset: null
  });

  const updateWithParsedData = (stats) => {
    setDashboardData(prev => ({
      ...prev,
      totalRevenue: stats.primaryMetric || prev.totalRevenue,
      activeNodes: stats.rowCount ? stats.rowCount.toString() : prev.activeNodes,
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
