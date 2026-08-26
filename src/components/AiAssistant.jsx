
export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Apex Neural Core initialized. Ask me regarding resource allocations, risk analysis, or pipeline optimizations." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      let aiResponse = "";
      const lower = userText.toLowerCase();

      if (lower.includes("risk") || lower.includes("threat")) {
        aiResponse = "Telemetry analysis indicates anomaly mitigation stability at 98.4%. Primary risk vector confined to secondary regional subnetworks.";
      } else if (lower.includes("cost") || lower.includes("budget") || lower.includes("capital")) {
        aiResponse = "Fiscal modeling suggests reallocating 6.2% of unallocated reserves toward high-yield pipeline modules to optimize operational margins.";
      } else if (lower.includes("throughput") || lower.includes("speed") || lower.includes("performance")) {
        aiResponse = "Node congestion is currently minimal. Latency averages 14.2ms across active ingestion clusters.";
      } else {
        aiResponse = `Analyzing query parameters for "${userText}". Apex Neural Core recommends cross-referencing live telemetry metrics with recent data ingestion batches for precise anomaly tracking.`;
      }

      setMessages(prev => [...prev, { sender: "ai", text: aiResponse }]);
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{ padding: "24px", color: "#fff", background: "#0f172a", minHeight: "100vh", borderRadius: "12px", display: "flex", flexDirection: "column", height: "85vh" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Apex Neural Assistant</h2>
      <p style={{ color: "#94a3b8", marginBottom: "16px" }}>Context-aware enterprise diagnostic engine.</p>

      <div style={{ flex: 1, background: "#1e293b", borderRadius: "8px", padding: "16px", overflowY: "auto", border: "1px solid #334155", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{ alignSelf: m.sender === "user" ? "flex-end" : "flex-start", background: m.sender === "user" ? "#3b82f6" : "#334155", padding: "10px 14px", borderRadius: "8px", maxWidth: "75%", fontSize: "14px" }}>
            {m.text}
          </div>
        ))}
        {loading && <div style={{ alignSelf: "flex-start", color: "#facc15", fontSize: "13px" }}>Neural processing query...</div>}
      </div>

      <form onSubmit={handleSend} style={{ display: "flex", gap: "12px" }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask enterprise AI regarding risk, costs, or telemetry..."
          style={{ flex: 1, padding: "12px", borderRadius: "6px", border: "1px solid #334155", background: "#1e293b", color: "#fff", outline: "none" }}
        />
        <button type="submit" style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "0 20px", borderRadius: "6px", fontWeight: "500", cursor: "pointer" }}>
          Transmit
        </button>
      </form>
    </div>
  );
}
