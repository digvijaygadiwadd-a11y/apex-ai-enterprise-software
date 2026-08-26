export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    return res.status(200).json({
      reply: `[Neural Core Simulation Mode]: Processed query "${prompt}". System metrics nominal. (Note: Add GROQ_API_KEY to Vercel env variables to activate live cloud LLM generation).`
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are Apex Neural Core, an advanced enterprise AI assistant specialized in supply chain logistics, telemetry analysis, and cloud infrastructure management." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 300
      })
    });

    const data = await response.json();
    const aiReply = data.choices?.[0]?.message?.content || "No response generated from neural cluster.";

    return res.status(200).json({ reply: aiReply });
  } catch (error) {
    return res.status(500).json({ error: "Failed to communicate with neural processing cluster." });
  }
}
