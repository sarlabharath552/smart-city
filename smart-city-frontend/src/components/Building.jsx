import React from "react";

const Building = ({ position, height }) => {
  const colors = ["#888", "#aaa", "#777", "#999"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <mesh position={position}>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Building;