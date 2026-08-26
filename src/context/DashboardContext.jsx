import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [dataset, setDataset] = useState(null);
  const [businessInsights, setBusinessInsights] = useState([]);

  const ingestData = (fileData, insights) => {
    setDataset(fileData);
    setBusinessInsights(insights);
  };

  return (
    <DashboardContext.Provider value={{ dataset, businessInsights, ingestData }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
};
