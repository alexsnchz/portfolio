import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function Succulent(props) {
  const { scene } = useGLTF("/models/succulent/cheiridopsis_succulent_4k.gltf");
  const [ref] = useBox(() => ({
    mass: 1,
    ...props,
  }));

  return <primitive ref={ref} object={scene} scale={2} />;
}

export default Succulent;
