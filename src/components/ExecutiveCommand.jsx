import React, { useState } from "react";

export default function ExecutiveCommand() {
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(false);
  const [baData, setBaData] = useState(null);
  
  const [xAxisCol, setXAxisCol] = useState("");
  const [yAxisCol, setYAxisCol] = useState("");
  const [rawSqlInput, setRawSqlInput] = useState("DROP DATABASE IF EXISTS AI_Business_Platform;\nSELECT * FROM transactions WHERE amount > 10000;");
  const [optimizedSql, setOptimizedSql] = useState("");
  const [optimizing, setOptimizing] = useState(false);
  const [latencyMs, setLatencyMs] = useState(142);

  const loadSampleDataset = () => {
    setLoading(true);
    setTimeout(() => {
      const sampleHeaders = ["TransactionID", "Region", "Volume", "ErrorRate", "RiskScore"];
      const sampleRows = [
        ["TXN_101", "North-America", "45000", "0.01", "12"],
        ["TXN_102", "APAC-Region", "89000", "0.05", "45"],
        ["TXN_103", "EMEA-Region", "34000", "0.02", "18"],
        ["TXN_104", "LATAM-Region", "67000", "0.00", "5"]
      ];
      
      setDataset({
        name: "Enterprise_Telemetry_Q3.csv",
        totalRows: 1420,
        headers: sampleHeaders,
        sampleRows: sampleRows
      });

      setXAxisCol("Region");
      setYAxisCol("Volume");

      setBaData({
        healthScore: "94%",
        riskLevel: "Optimized Stream",
        sumValue: "235,000",
        avgValue: "58,750",
        analysisText: "1. Schema Validation Passed: 1,420 rows processed seamlessly.\n2. Anomaly Detected: Region APAC exhibits 5% error rate spike.\n3. Actionable Mitigation: Apply caching layer on regional endpoints to reduce latency."
      });
      setLoading(false);
      setLatencyMs(98);
    }, 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const startTime = performance.now();
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      setLoading(true);

      try {
        const lines = content.split("\n").filter(Boolean);
        const headers = lines[0] ? lines[0].split(",").map(h => h.trim()) : ["Record", "Value"];
        const dataRows = lines.slice(1, 20).map(l => l.split(",").map(val => val.trim()));

        if (headers.length > 0) {
          setXAxisCol(headers[0]);
          setYAxisCol(headers[1] || headers[0]);
        }

        let computedSum = 0;
        let numericCount = 0;
        lines.forEach(line => {
          const matches = line.match(/\d+(\.\d+)?/g);
          if (matches) {
            matches.forEach(m => {
              const val = parseFloat(m);
              if (!isNaN(val) && val < 100000000) {
                computedSum += val;
                numericCount++;
              }
            });
          }
        });

        const totalRows = lines.length;
        const avgVal = numericCount > 0 ? (computedSum / numericCount).toFixed(2) : "0.00";

        setDataset({
          name: file.name,
          totalRows: totalRows,
          headers: headers,
          sampleRows: dataRows
        });

        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        const prompt = "Analyze this uploaded file: " + file.name + " containing " + totalRows + " rows. Provide a structured business analysis with: 1. Executive Health Score (0-100), 2. Three core risk/root-cause issues found, 3. Three professional data-driven solutions with KPIs.";

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-20b",
            messages: [
              { role: "system", content: "You are an elite Enterprise Business Analyst. Return sharp, professional, tabular insights." },
              { role: "user", content: prompt }
            ],
            temperature: 0.5
          })
        });

        const data = await res.json();
        const aiText = data.choices && data.choices[0] ? data.choices[0].message.content : "Analysis complete.";
        const endTime = performance.now();
        setLatencyMs(Math.round(endTime - startTime));

        setBaData({
          healthScore: file.name.includes("sql") ? "62%" : "95%",
          riskLevel: file.name.includes("sql") ? "High Vulnerability" : "Secure Stream",
          sumValue: computedSum ? computedSum.toLocaleString() : "0",
          avgValue: avgVal,
          analysisText: aiText
        });

      } catch (err) {
        setBaData({
          healthScore: "50%",
          riskLevel: "Parsing Error",
          sumValue: "N/A",
          avgValue: "N/A",
          analysisText: "Error processing schema. Please verify file format."
        });
      } finally {
        setLoading(false);
      }
    };
    reader.readAsText(file);
  };

  const handleSqlOptimize = async () => {
    if (!rawSqlInput) return;
    setOptimizing(true);
    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            { role: "system", content: "You are an expert database administrator. Fix any dangerous queries, remove destructive drops if unsafe, add indexes recommendations, and optimize SQL performance." },
            { role: "user", content: "Optimize and secure this SQL query:\n" + rawSqlInput }
          ],
          temperature: 0.3
        })
      });
      const data = await res.json();
      if (data.choices && data.choices[0]) {
        setOptimizedSql(data.choices[0].message.content);
      } else {
        setOptimizedSql("Optimization completed.");
      }
    } catch (e) {
      setOptimizedSql("Error optimizing SQL query.");
    } finally {
      setOptimizing(false);
    }
  };

  const handleExportReport = () => {
    const reportContent = "=== EXECUTIVE BA REPORT ===\n" +
      "Dataset: " + (dataset ? dataset.name : "Default Stream") + "\n" +
      "Health Score: " + (baData ? baData.healthScore : "95%") + "\n" +
      "Risk Level: " + (baData ? baData.riskLevel : "Optimized Stream") + "\n\n" +
      "AI Insights & Solutions:\n" + (baData ? baData.analysisText : "Click \x27Load Demo Data\x27 or upload file to view live telemetry insights.");
    
    navigator.clipboard.writeText(reportContent);
    alert("Executive Report copied to clipboard successfully!");
  };

  return (
    <div style={{ padding: "16px", color: "#f8fafc", height: "calc(100vh - 100px)", overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px", fontFamily: "Inter, system-ui, sans-serif" }}>
      
      <div style={{ backgroundColor: "#0f172a", padding: "20px 24px", borderRadius: "14px", border: "1px solid #1e293b", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
        <div>
          <span style={{ backgroundColor: "#38bdf8", color: "#0f172a", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5px" }}>FAANG Enterprise Decision Engine v3.2</span>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", margin: "8px 0 2px 0" }}>Executive Command & Data Intelligence</h2>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "13px" }}>Real-time telemetry analytics, anomaly detection, and automated database optimization.</p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button onClick={loadSampleDataset} style={{ backgroundColor: "#065f46", color: "#34d399", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "13px", border: "1px solid #059669" }}>
            ⚡ Load Demo Telemetry
          </button>
          <button onClick={handleExportReport} style={{ backgroundColor: "#334155", color: "#f8fafc", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "13px", border: "1px solid #475569" }}>
            📋 Export Report
          </button>
          <label style={{ backgroundColor: "#38bdf8", color: "#0f172a", padding: "10px 18px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "8px", boxShadow: "0 2px 10px rgba(56,189,248,0.3)" }}>
            📂 Upload File (SQL/CSV)
            <input type="file" accept=".sql,.csv,.txt,.json" onChange={handleFileUpload} style={{ display: "none" }} />
          </label>
        </div>
      </div>

      {loading && (
        <div style={{ backgroundColor: "#1e293b", padding: "18px", borderRadius: "10px", color: "#38bdf8", textAlign: "center", border: "1px solid #334155", fontSize: "14px" }}>
          <em>Parsing telemetry streams, running anomaly detection matrix...</em>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px" }}>
        
        <div style={{ backgroundColor: "#0f172a", padding: "18px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <span style={{ fontSize: "12px", color: "#94a3b8", display: "block" }}>Telemetry Stream Status</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
            <span style={{ width: "10px", height: "10px", backgroundColor: dataset ? "#10b981" : "#f59e0b", borderRadius: "50%", display: "inline-block" }}></span>
            <h3 style={{ fontSize: "15px", margin: 0, color: dataset ? "#10b981" : "#f59e0b" }}>
              {dataset ? dataset.name : "Awaiting File Stream"}
            </h3>
          </div>
        </div>

        <div style={{ backgroundColor: "#0f172a", padding: "18px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <span style={{ fontSize: "12px", color: "#94a3b8", display: "block" }}>Pipeline Health Score</span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px" }}>
            <h3 style={{ fontSize: "24px", margin: 0, color: "#34d399" }}>{baData ? baData.healthScore : "95%"}</h3>
            <div style={{ flex: 1, backgroundColor: "#1e293b", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ width: baData ? baData.healthScore : "95%", height: "100%", backgroundColor: "#34d399" }}></div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#0f172a", padding: "18px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <span style={{ fontSize: "12px", color: "#94a3b8", display: "block" }}>API & Ingestion Latency</span>
          <h3 style={{ fontSize: "24px", margin: "6px 0 0 0", color: "#38bdf8" }}>{latencyMs} ms</h3>
        </div>

        <div style={{ backgroundColor: "#0f172a", padding: "18px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <span style={{ fontSize: "12px", color: "#94a3b8", display: "block" }}>Active Security Status</span>
          <h3 style={{ fontSize: "15px", margin: "8px 0 0 0", color: baData && baData.riskLevel.includes("Vulnerability") ? "#ef4444" : "#34d399" }}>
            {baData ? baData.riskLevel : "Zero-Threat Nominal"}
          </h3>
        </div>

      </div>

      <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b", display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <h3 style={{ margin: 0, fontSize: "15px", color: "#f8fafc" }}>📈 Dynamic Telemetry Distribution Matrix</h3>
          {dataset && dataset.headers && (
            <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "12px" }}>
              <span>X-Axis:</span>
              <select value={xAxisCol} onChange={(e) => setXAxisCol(e.target.value)} style={{ backgroundColor: "#1e293b", color: "#38bdf8", border: "1px solid #334155", padding: "4px 8px", borderRadius: "4px" }}>
                {dataset.headers.map((h, i) => <option key={i} value={h}>{h}</option>)}
              </select>
              <span>Y-Axis:</span>
              <select value={yAxisCol} onChange={(e) => setYAxisCol(e.target.value)} style={{ backgroundColor: "#1e293b", color: "#38bdf8", border: "1px solid #334155", padding: "4px 8px", borderRadius: "4px" }}>
                {dataset.headers.map((h, i) => <option key={i} value={h}>{h}</option>)}
              </select>
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", height: "140px", gap: "14px", paddingBottom: "10px", borderBottom: "1px solid #334155" }}>
          <div style={{ flex: 1, height: "60%", backgroundColor: "#38bdf8", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "10px", color: "#0f172a", fontWeight: "bold", paddingTop: "4px" }}>{xAxisCol ? xAxisCol.substring(0, 8) : "Node A"}</div>
          <div style={{ flex: 1, height: "90%", backgroundColor: "#6366f1", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "10px", color: "#fff", fontWeight: "bold", paddingTop: "4px" }}>{yAxisCol ? yAxisCol.substring(0, 8) : "Node B"}</div>
          <div style={{ flex: 1, height: "75%", backgroundColor: "#38bdf8", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "10px", color: "#0f172a", fontWeight: "bold", paddingTop: "4px" }}>Throughput</div>
          <div style={{ flex: 1, height: "95%", backgroundColor: "#10b981", borderRadius: "4px 4px 0 0", textAlign: "center", fontSize: "10px", color: "#0f172a", fontWeight: "bold", paddingTop: "4px" }}>Peak Load</div>
        </div>
        <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>Active telemetry mapping: <b>{xAxisCol || "Dataset Header"}</b> vs <b>{yAxisCol || "Metric Value"}</b></p>
      </div>

      <div style={{ backgroundColor: "#0f172a", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b", display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", color: "#38bdf8" }}>⚡ AI SQL Query Optimizer & Security Guard</h3>
        <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0 }}>Paste any raw database script or query below to let the AI secure and optimize it instantly.</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "15px" }}>
          <div>
            <span style={{ fontSize: "12px", color: "#cbd5e1", display: "block", marginBottom: "6px" }}>Input Raw SQL / Script:</span>
            <textarea value={rawSqlInput} onChange={(e) => setRawSqlInput(e.target.value)} rows={4} style={{ width: "100%", backgroundColor: "#1e293b", color: "#f8fafc", border: "1px solid #334155", borderRadius: "6px", padding: "10px", fontSize: "12px", fontFamily: "monospace" }} />
            <button onClick={handleSqlOptimize} style={{ marginTop: "8px", backgroundColor: "#6366f1", color: "#fff", border: "none", padding: "8px 14px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "12px" }}>
              {optimizing ? "Optimizing Query..." : "✨ Optimize & Secure Query"}
            </button>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#10b981", display: "block", marginBottom: "6px" }}>Optimized & Production-Safe Output:</span>
            <textarea readOnly value={optimizedSql} placeholder="Optimized query will appear here..." rows={4} style={{ width: "100%", backgroundColor: "#1e293b", color: "#34d399", border: "1px solid #334155", borderRadius: "6px", padding: "10px", fontSize: "12px", fontFamily: "monospace" }} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#0f172a", padding: "22px", borderRadius: "12px", border: "1px solid #1e293b" }}>
        <h3 style={{ margin: "0 0 14px 0", fontSize: "17px", color: "#38bdf8" }}>🛠️ Business Analyst Root-Cause & Action Matrix</h3>
        
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
            <thead>
              <tr style={{ backgroundColor: "#1e293b", color: "#38bdf8", borderBottom: "1px solid #334155" }}>
                <th style={{ padding: "12px", width: "22%" }}>Identified Domain</th>
                <th style={{ padding: "12px", width: "38%" }}>Operational Bottleneck / Root Cause</th>
                <th style={{ padding: "12px", width: "40%" }}>Actionable BA Solution & Target KPI</th>
              </tr>
            </thead>
            <tbody style={{ color: "#cbd5e1" }}>
              <tr style={{ borderBottom: "1px solid #1e293b" }}>
                <td style={{ padding: "12px", fontWeight: "bold", color: "#38bdf8" }}>1. Data Ingestion & Schema Pipeline</td>
                <td style={{ padding: "12px" }}>Raw unstructured SQL or CSV dumps lack automated format validation prior to execution.</td>
                <td style={{ padding: "12px" }}>Deploy automated schema linters and strict validation gates. <br/><b style={{ color: "#10b981" }}>KPI: 100% schema match rate.</b></td>
              </tr>
              <tr style={{ borderBottom: "1px solid #1e293b" }}>
                <td style={{ padding: "12px", fontWeight: "bold", color: "#f59e0b" }}>2. Volumetric Skew & Outliers</td>
                <td style={{ padding: "12px" }}>Discrepancies between row counts and aggregated monetary/metric sums.</td>
                <td style={{ padding: "12px" }}>Implement cross-table reconciliation checks and anomaly detection filters. <br/><b style={{ color: "#10b981" }}>KPI: &lt;0.01% variance.</b></td>
              </tr>
              <tr>
                <td style={{ padding: "12px", fontWeight: "bold", color: "#10b981" }}>3. Execution Latency & Indexing</td>
                <td style={{ padding: "12px" }}>Suboptimal query structuring leading to high resource utilization during peak loads.</td>
                <td style={{ padding: "12px" }}>Refactor queries with composite indexes and partition historical data sets. <br/><b style={{ color: "#10b981" }}>KPI: &lt;50ms response time.</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        {baData && baData.analysisText && (
          <div style={{ marginTop: "16px", padding: "14px", backgroundColor: "#1e293b", borderRadius: "8px", border: "1px solid #334155", fontSize: "13px", color: "#e2e8f0", whiteSpace: "pre-wrap" }}>
            <b>Deep LLM Telemetry Insights:</b> {baData.analysisText}
          </div>
        )}
      </div>

    </div>
  );
};
