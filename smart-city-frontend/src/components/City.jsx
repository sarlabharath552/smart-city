import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Building from "./Building";
import Traffic from "./Traffic";
import Vehicle from "./Vehicle";

const City = ({ data }) => {
  const aqi = data?.pollution?.list?.[0]?.main?.aqi || 1;
  const windSpeed = data?.weather?.wind?.speed || 1;
  const trafficLevel = windSpeed * 20;

  const fogColor =
    aqi > 4 ? "#ff0000" : aqi > 2 ? "#ffaa00" : "#00ff00";

  const gridSize = 10;
  const spacing = 2;

  return (
    <Canvas camera={{ position: [15, 15, 15], fov: 60 }}>
      {/* LIGHTING */}
      <ambientLight intensity={0.4} />
      <hemisphereLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} />

      {/* FOG (Pollution) */}
      <fog attach="fog" args={[fogColor, 10, 60]} />

      <OrbitControls
        enablePan
        enableZoom
        maxPolarAngle={Math.PI / 2.2}
      />

      {/* GROUND */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* BUILDINGS */}
      {Array.from({ length: gridSize }).map((_, i) =>
        Array.from({ length: gridSize }).map((_, j) => {
          if (i % 3 === 0 || j % 3 === 0) return null;

          return (
            <Building
              key={`${i}-${j}`}
              position={[
                i * spacing - 10,
                1,
                j * spacing - 10
              ]}
              height={Math.random() * 4 + 1}
            />
          );
        })
      )}

      {/* TRAFFIC */}
      <Traffic level={trafficLevel} />

      {/* VEHICLES */}
      {[...Array(12)].map((_, i) => (
        <Vehicle
          key={i}
          startX={-20 + i * 3}
          speed={0.05 + Math.random() * 0.05}
          z={(i % 3) * 4 - 6}
        />
      ))}
    </Canvas>
  );
};

export default City;