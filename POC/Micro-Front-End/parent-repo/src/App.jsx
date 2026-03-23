import React, { Suspense, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

const AppA = React.lazy(() =>
  import("appA/App").catch((err) => {
    console.error("Failed to load appA:", err);
    throw err;
  })
);
const AppB = React.lazy(() =>
  import("appB/App").catch((err) => {
    console.error("Failed to load appB:", err);
    throw err;
  })
);
const AppC = React.lazy(() =>
  import("appC/App").catch((err) => {
    console.error("Failed to load appC:", err);
    throw err;
  })
);
const AppD = React.lazy(() =>
  import("appD/App").catch((err) => {
    console.error("Failed to load appD:", err);
    throw err;
  })
);

function App() {
  const [currentApp, setCurrentApp] = useState("appA");

  const renderApp = () => {
    switch (currentApp) {
      case "appA":
        return (
          <ErrorBoundary>
            <AppA />
          </ErrorBoundary>
        );
      case "appB":
        return (
          <ErrorBoundary>
            <AppB />
          </ErrorBoundary>
        );
      case "appC":
        return (
          <ErrorBoundary>
            <AppC />
          </ErrorBoundary>
        );
      case "appD":
        return (
          <ErrorBoundary>
            <AppD />
          </ErrorBoundary>
        );
      default:
        return (
          <ErrorBoundary>
            <AppA />
          </ErrorBoundary>
        );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "200px", background: "#f0f0f0", padding: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <button
              onClick={() => setCurrentApp("appA")}
              style={{
                display: "block",
                padding: "10px",
                background: currentApp === "appA" ? "#ccc" : "#ddd",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
            >
              Sidebar 1 (Home)
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentApp("appB")}
              style={{
                display: "block",
                padding: "10px",
                background: currentApp === "appB" ? "#ccc" : "#ddd",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
            >
              Sidebar 2
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentApp("appC")}
              style={{
                display: "block",
                padding: "10px",
                background: currentApp === "appC" ? "#ccc" : "#ddd",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
            >
              Sidebar 3
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentApp("appD")}
              style={{
                display: "block",
                padding: "10px",
                background: currentApp === "appD" ? "#ccc" : "#ddd",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
            >
              Sidebar 4
            </button>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Suspense fallback={<div>Loading...</div>}>
          {renderApp()}
        </Suspense>
      </div>
    </div>
  );
}

export default App;