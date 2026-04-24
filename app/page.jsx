"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, desc })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 30 }}>
      <h1 style={{ fontSize: 32 }}>Content Builder</h1>

      <input
        placeholder="Business name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginTop: 20,
          marginBottom: 10
        }}
      />

      <textarea
        placeholder="Business description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          height: 100
        }}
      />

      <button
        onClick={generate}
        style={{
          marginTop: 15,
          padding: 12,
          width: "100%",
          background: "#6366f1",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: 16
        }}
      >
        {loading ? "Generating..." : "Generate Content"}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>Generated Ideas</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
