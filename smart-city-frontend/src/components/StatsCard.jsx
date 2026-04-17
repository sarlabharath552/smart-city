import React from "react";

const StatsCard = ({ title, value, color }) => {
  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        color: "white",
      }}
    >
      <h4>{title}</h4>
      <p style={{ fontSize: "20px", color }}>{value}</p>
    </div>
  );
};

export default StatsCard;