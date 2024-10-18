import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const particlesRef = useRef();
  const particleCount = 100000; // Número de partículas

  // Creamos las posiciones iniciales de las partículas
  const positions = new Float32Array(particleCount * 3); // 3 valores por partícula (x, y, z)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = Math.random() * 100 - 50; // Posiciones X aleatorias
    positions[i * 3 + 1] = Math.random() * 50; // Posiciones Y (altura)
    positions[i * 3 + 2] = Math.random() * 100 - 50; // Posiciones Z aleatorias
  }

  // Actualizamos el frame para animar las partículas
  useFrame(() => {
    const positionsArray =
      particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3 + 1] -= Math.random() * 0.002;
      positionsArray[i * 3] += (Math.floor(Math.random() * 2) || -1) * 0.0005;

      // Reiniciar la partícula si sale de la vista (efecto bucle)
      if (positionsArray[i * 3 + 1] < -5) {
        positionsArray[i * 3 + 1] = 50;
      }
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#888" size={0.05} />
    </points>
  );
}

export default Particles;
