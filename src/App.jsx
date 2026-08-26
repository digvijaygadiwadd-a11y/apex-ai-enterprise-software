import { DashboardProvider } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import ExecutiveCommand from "./components/ExecutiveCommand";
import DataImportHub from "./components/DataImportHub";
import DeepTelemetry from "./components/DeepTelemetry";
import InventoryMatrix from "./components/InventoryMatrix";
import ThreatAlerts from "./components/ThreatAlerts";
import AiAssistant from "./components/AiAssistant";

function AppContent() {
  const [activeTab, setActiveTab] = useState("command");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", backgroundColor: "#07090e", color: "#f8fafc", fontFamily: "system-ui, sans-serif", overflow: "hidden", margin: 0, padding: 0, boxSizing: "border-box" }}>
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flex: 1, padding: "32px", overflowY: "auto", boxSizing: "border-box", backgroundColor: "#07090e" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", borderBottom: "1px solid #1a2234", paddingBottom: "20px" }}>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#fff", margin: 0 }}>
              {activeTab === "command" && "Apex Intelligence Hub"}
              {activeTab === "import" && "Apex Data Ingestion & Intelligence Hub"}
              {activeTab === "telemetry" && "Advanced Deep Telemetry"}
              {activeTab === "inventory" && "Global Inventory Matrix"}
              {activeTab === "threats" && "Security Threat Alerts"}
              {activeTab === "askai" && "Ask AI - Senior Business Analyst Core"}
            </h2>
            <p style={{ fontSize: "13px", color: "#64748b", margin: "4px 0 0 0" }}>Real-time business orchestration, metrics, and generative AI diagnostics.</p>
          </div>
        </div>

        {activeTab === "command" && <ExecutiveCommand />}
        {activeTab === "import" && <DataImportHub />}
        {activeTab === "telemetry" && <DeepTelemetry />}
        {activeTab === "inventory" && <InventoryMatrix />}
        {activeTab === "threats" && <ThreatAlerts />}
        {activeTab === "askai" && <AiAssistant />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <DashboardProvider>
      <AppContent />
    </DashboardProvider>
  );
}

