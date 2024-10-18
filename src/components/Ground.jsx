import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { Vector2, RepeatWrapping } from "three";

function Ground(props) {
  const terrainTextures = useTexture({
    map: "/textures/mud_cracked_dry_03_diff_4k.jpg",
    displacementMap: "/textures/mud_cracked_dry_03_disp_4k.jpg",
    aoMap: "/textures/mud_cracked_dry_03_ao_4k.jpg",
    roughnessMap: "/textures/mud_cracked_dry_03_rough_4k.jpg",
    metalnessMap: "/textures/mud_cracked_dry_03_arm_4k.jpg",
    normalMap: "/textures/mud_cracked_dry_03_nor_gl_4k.jpg",
    /*     map: "/textures/aerial_beach_02_diff_4k.jpg",
    displacementMap: "/textures/aerial_beach_02_disp_4k.jpg",
    aoMap: "/textures/aerial_beach_02_ao_4k.jpg",
    roughnessMap: "/textures/aerial_beach_02_rough_4k.jpg",
    metalnessMap: "/textures/aerial_beach_02_arm_4k.jpg",
    normalMap: "/textures/aerial_beach_02_nor_gl_4k.jpg", */
  });

  Object.values(terrainTextures).forEach((texture) => {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(50, 50); // Ajusta el número de repeticiones
  });

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 0,
    position: [0, -1, 0],
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000, 350, 350]} />
      <meshStandardMaterial
        {...terrainTextures}
        transparent
        displacementScale={1}
        roughness={1}
        metalness={0}
        metalnessMap={null}
        normalScale={new Vector2(1, 1)}
      />
    </mesh>
  );
}

export default Ground;
