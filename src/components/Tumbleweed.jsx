import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

function Tumbleweed(props) {
  const forceX = 0.02; // Force constant for x movement
  const forceY = 5.2; // Force constant for y bouncing

  // "Tumbleweed" (https://skfb.ly/6uLqK) by biggreenorange is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
  const { nodes, materials } = useGLTF("/models/tumbleweed/scene.gltf");

  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    ...props,
  }));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const windStrengthX = Math.tan(t) * forceX;
    const windStrengthY = Math.cos(t) * forceY;

    api.applyForce([windStrengthX, windStrengthY, 0], [0, 0, 0]);
  });

  return (
    <group ref={ref} scale={[0.3, 0.3, 0.3]}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Plane007_Material001_0.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

export default Tumbleweed;
