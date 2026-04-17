import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ data }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!data) return;

    const aqi = data?.pollution?.list?.[0]?.main?.aqi || 1;

    setHistory((prev) => [
      ...prev.slice(-10),
      { time: new Date().toLocaleTimeString(), aqi },
    ]);
  }, [data]);

  const temp = data?.weather?.main?.temp
    ? (data.weather.main.temp - 273.15).toFixed(1)
    : "--";

  const aqi = data?.pollution?.list?.[0]?.main?.aqi || "--";

  const wind = data?.weather?.wind?.speed || "--";

  const predictions = data?.predictions || [];

  const mergedData = history.map((h, i) => ({
  ...h,
  predicted: predictions[i] || null,
}));
  

  return (
    <div
      style={{ 
        width: "300px",
        height: "100vh",
        background: "#111",
        padding: "15px",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      <h2 style={{ color: "white" }}>Smart City Dashboard</h2>

      <StatsCard title="Temperature (°C)" value={temp} color="cyan" />
      <StatsCard title="AQI Level" value={aqi} color="orange" />
      <StatsCard title="Wind Speed" value={wind} color="lightgreen" />

      <h4 style={{ color: "white", marginTop: "20px" }}>AQI Trend</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={history}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="aqi" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>


      <Line type="monotone" dataKey="aqi" stroke="#ff7300" />
      <Line type="monotone" dataKey="predicted" stroke="#00ffcc" />
    </div>
  );
};

export default Dashboard;