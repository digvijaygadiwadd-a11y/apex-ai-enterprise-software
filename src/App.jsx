import React, { useState, Component } from "react";
import { DashboardProvider } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import ExecutiveCommand from "./components/ExecutiveCommand";
import DeepTelemetry from "./components/DeepTelemetry";
import InventoryMatrix from "./components/InventoryMatrix";
import ThreatAlerts from "./components/ThreatAlerts";
import AiAssistant from "./components/AiAssistant";
import DataImportHub from "./components/DataImportHub";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error) { console.error("Error:", error); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "30px", color: "#fb7185", backgroundColor: "#0f172a", borderRadius: "16px", border: "1px solid #1e293b", margin: "20px" }}>
          <h3 style={{ margin: "0 0 8px 0" }}>⚠️ Module Loading Notice</h3>
          <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>This view is initializing or syncing with live backend telemetry.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

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
          <ErrorBoundary>
            {activeTab === "dashboard" && <ExecutiveCommand />}
            {activeTab === "analytics" && <DeepTelemetry />}
            {activeTab === "inventory" && <InventoryMatrix />}
            {activeTab === "alerts" && <ThreatAlerts />}
            {activeTab === "ai" && <AiAssistant />}
            {activeTab === "import" && <DataImportHub />}
          </ErrorBoundary>
        </main>
      </div>
    </DashboardProvider>
  );
}
