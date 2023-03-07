import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Canvas } from "react-three-fiber";

import "./Card3d.scss";

function Card3D() {
  const ref = useRef();

  useFrame(() => {
    // Rotate the card on the y-axis every frame
    ref.current.rotation.y += 0.01;
  });

  return (
    <Canvas ref={ref}>
      <mesh position={[0, 0, 0]}>
        <boxBufferGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </Canvas>
  );
}

export default Card3D;
