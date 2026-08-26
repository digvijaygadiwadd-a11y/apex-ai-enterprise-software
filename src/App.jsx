import React, { useState } from "react";
import { DashboardProvider } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import ExecutiveCommand from "./components/ExecutiveCommand";
import DeepTelemetry from "./components/DeepTelemetry";
import InventoryMatrix from "./components/InventoryMatrix";
import ThreatAlerts from "./components/ThreatAlerts";
import AiAssistant from "./components/AiAssistant";
import DataImportHub from "./components/DataImportHub";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <DashboardProvider>
      <div style={{ display: "flex", width: "100vw", height: "100vh", backgroundColor: "#020617", color: "#f8fafc", fontFamily: "system-ui, sans-serif", overflow: "hidden", margin: 0, padding: 0, boxSizing: "border-box" }}>
        {/* Sidebar */}
        <div style={{ width: "260px", height: "100vh", flexShrink: 0 }}>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Content Area */}
        <main style={{ flex: 1, height: "100vh", padding: "24px 32px", overflowY: "auto", boxSizing: "border-box" }}>
          {activeTab === "dashboard" && <ExecutiveCommand />}
          {activeTab === "analytics" && <DeepTelemetry />}
          {activeTab === "inventory" && <InventoryMatrix />}
          {activeTab === "alerts" && <ThreatAlerts />}
          {activeTab === "ai" && <AiAssistant />}
          {activeTab === "import" && <DataImportHub />}
        </main>
      </div>
    </DashboardProvider>
  );
}
