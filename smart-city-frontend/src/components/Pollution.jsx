const Pollution = ({ aqi }) => {
  let color = "#00ff00";

  if (aqi > 4) color = "#ff0000";
  else if (aqi > 2) color = "#ffaa00";

  return (
    <mesh position={[0, 5, 0]}>
      <boxGeometry args={[50, 10, 50]} />
      <meshStandardMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

export default Pollution;