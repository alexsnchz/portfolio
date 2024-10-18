import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function DeadTree(props) {
  const { scene } = useGLTF("/models/dead_tree/dead_tree_trunk_02_4k.gltf");
  const [ref] = useBox(() => ({
    mass: 1,
    ...props,
  }));

  return <primitive ref={ref} object={scene} scale={2} />;
}

export default DeadTree;
