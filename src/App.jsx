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
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Tab Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "30px", color: "#fb7185", backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", margin: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>⚠️ Module Loading Error</h3>
          <p style={{ fontSize: "14px", color: "#94a3b8" }}>This module encountered a rendering issue. Please check console or try another tab.</p>
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
