import React, { useState } from "react";
import City from "./components/City";
import Dashboard from "./components/Dashboard";
import useWebSocket from "./hooks/useWebSocket";
import MapView from "./components/MapView";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);

  const data = useWebSocket(
    "ws://127.0.0.1:8000/ws?lat=17.3850&lon=78.4867"
  );

  // 🔐 Login check
  if (!token) return <Login setToken={setToken} />;

  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar Dashboard */}
      <Dashboard data={data} />

      {/* Main Content */}
      <div style={{ flex: 1, position: "relative" }}>
        
        {/* 3D City */}
        <div style={{ width: "100%", height: "100vh" }}>
          <City data={data} />
        </div>

        {/* Map Overlay (bottom right) */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            width: "300px",
            height: "200px",
            borderRadius: "10px",
            overflow: "hidden",
            border: "2px solid white",
          }}
        >
          <MapView />
        </div>

      </div>
    </div>
  );
}

export default App;