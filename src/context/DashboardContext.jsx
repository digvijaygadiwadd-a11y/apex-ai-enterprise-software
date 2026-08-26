import React, { createContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: "$7,482,000",
    totalUnits: "15,630",
    openAlerts: "6",
    supplyHealth: "Action Req.",
    lowStockSkus: "6",
    categoryLabels: ["Cloud Infrastructure", "Cybersecurity", "Hardware", "Networking", "Software License", "Storage"],
    categoryValues: [1100000, 1200000, 1550000, 1100000, 2050000, 350000],
    warehouseLabels: ["East-Hub", "North-DC", "South-Hub", "Virtual", "West-DC"],
    warehouseValues: [35, 25, 20, 15, 5],
    aiReport: "System running on default baseline metrics. Upload a custom company file in the Data Import Hub to override and generate live analytical metrics."
  });

  const updateDashboard = (newData) => {
    setDashboardData(prev => ({ ...prev, ...newData }));
  };

  return (
    <DashboardContext.Provider value={{ dashboardData, updateDashboard }}>
      {children}
    </DashboardContext.Provider>
  );
}
