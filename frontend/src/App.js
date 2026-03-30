import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    fetch("http://localhost:5000/health")
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("down"));
  }, []);

  const isHealthy = status === "ok";

  return (
    <div style={{
      background: "linear-gradient(to right, #0f172a, #1e293b)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>

      <div style={{
        background: "#111827",
        padding: "40px",
        borderRadius: "16px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.5)"
      }}>

        <h1 style={{ color: "#fff" }}>☁️ Cloud Service</h1>
        <p style={{ color: "#9ca3af" }}>Backend Health Monitor</p>

        <div style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          background: isHealthy ? "#064e3b" : "#7f1d1d"
        }}>
          <h2 style={{
            color: isHealthy ? "#22c55e" : "#ef4444"
          }}>
            {isHealthy ? "SYSTEM OPERATIONAL" : "SYSTEM DOWN"}
          </h2>

          <p style={{ color: "#d1d5db" }}>
            Status: {status.toUpperCase()}
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;