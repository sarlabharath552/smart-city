import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Vehicle = ({ startX, speed, z }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.x += speed;

    if (ref.current.position.x > 20) {
      ref.current.position.x = -20;
    }
  });

  return (
    <mesh ref={ref} position={[startX, 0.2, z]}>
      <boxGeometry args={[0.5, 0.3, 1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};

export default Vehicle;