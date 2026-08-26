import Papa from "papaparse";
import { useDashboard } from "../context/DashboardContext";

export default function DataImportHub() {
  const { updateWithParsedData } = useDashboard();
  const [fileName, setFileName] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setError("");
    setLoading(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setLoading(false);
        if (results.errors.length > 0 && results.data.length === 0) {
          setError("Failed to parse CSV file. Please check format.");
          return;
        }

        const data = results.data;
        const rowCount = data.length;
        const keys = Object.keys(data[0] || {});
        let numericKey = keys.find(k => !isNaN(parseFloat(data[0][k])));
        let sum = 0;
        if (numericKey) {
          sum = data.reduce((acc, row) => acc + (parseFloat(row[numericKey]) || 0), 0);
        }

        const computedStats = {
          rowCount,
          columns: keys.length,
          primaryMetric: numericKey ? sum.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "N/A",
          metricName: numericKey ? `Total ${numericKey}` : "Total Records"
        };

        setStats(computedStats);
        // Feed real parsed data back into the global dashboard context!
        updateWithParsedData(computedStats);
      },
      error: (err) => {
        setLoading(false);
        setError(err.message);
      }
    });
  };

  return (
    <div style={{ padding: "24px", color: "#fff", background: "#0f172a", minHeight: "100vh", borderRadius: "12px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Data Ingestion & Parsing Hub</h2>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Upload enterprise datasets (CSV) to propagate real-time metrics across the global dashboard ecosystem.</p>
      <div style={{ border: "2px dashed #334155", padding: "32px", textAlign: "center", borderRadius: "8px", background: "#1e293b" }}>
        <input type="file" accept=".csv, .txt" onChange={handleFileUpload} style={{ display: "none" }} id="csv-upload" />
        <label htmlFor="csv-upload" style={{ cursor: "pointer", background: "#3b82f6", color: "#fff", padding: "12px 24px", borderRadius: "6px", fontWeight: "500", display: "inline-block" }}>
          Select CSV Dataset
        </label>
        {fileName && <p style={{ marginTop: "12px", color: "#38bdf8" }}>Loaded: {fileName} (Synced to Dashboard)</p>}
      </div>
      {loading && <p style={{ marginTop: "20px", color: "#facc15" }}>Parsing dataset streams...</p>}
      {error && <p style={{ marginTop: "20px", color: "#ef4444" }}>Error: {error}</p>}
      {stats && (
        <div style={{ marginTop: "32px", background: "#1e293b", padding: "20px", borderRadius: "8px", border: "1px solid #334155" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "#38bdf8" }}>Parsed Telemetry Summary (Global State Synced)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            <div style={{ background: "#0f172a", padding: "16px", borderRadius: "6px" }}>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>Total Rows Processed</p>
              <p style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>{stats.rowCount}</p>
            </div>
            <div style={{ background: "#0f172a", padding: "16px", borderRadius: "6px" }}>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>Schema Columns</p>
              <p style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>{stats.columns}</p>
            </div>
            <div style={{ background: "#0f172a", padding: "16px", borderRadius: "6px" }}>
              <p style={{ color: "#94a3b8", fontSize: "14px" }}>{stats.metricName}</p>
              <p style={{ fontSize: "22px", fontWeight: "bold", marginTop: "4px" }}>{stats.primaryMetric}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
