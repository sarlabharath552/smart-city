import React from "react";

const Traffic = ({ level }) => {
  let color = "green";

  if (level > 70) color = "red";
  else if (level > 40) color = "orange";

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
};

export default Traffic;