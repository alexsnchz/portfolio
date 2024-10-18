import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Sky, Float } from "@react-three/drei";
import Tumbleweed from "./components/Tumbleweed";
import Ground from "./components/Ground";
import { Physics } from "@react-three/cannon";
import { Suspense } from "react";

function CameraLogger() {
  const { camera } = useThree();

  useFrame(() => {
    console.log("Camera position:", camera.position);
    console.log("Camera rotation:", camera.rotation);
    console.log("Camera rotation:", camera.fov);
  });

  return null;
}

function App() {
  return (
    <div className="App h-screen">
      <Canvas camera={{ position: [-5.19, 0.6, 6.8], fov: 50 }}>
        <ambientLight />
        <directionalLight
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <Sky
          distance={450000}
          sunPosition={[100, 20, 100]}
          inclination={0}
          azimuth={0.25}
        />

        <Float speed={1}>
          <Text
            position={[0, 0, 0]}
            fontSize={1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {"Under construction"}
          </Text>
        </Float>

        <Physics>
          <Suspense fallback={null}>
            <Tumbleweed position={[-50, 2, 5]} />
            <Tumbleweed position={[-20, 0.5, 5]} />
            <Tumbleweed position={[-10, 0.5, 1]} />
            <Tumbleweed position={[0, 0.5, -4]} />
            <Tumbleweed position={[-15, 0.5, -9]} />
            <Ground position={[0, -1, 0]} />
          </Suspense>
        </Physics>
        <OrbitControls makeDefault enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default App;
