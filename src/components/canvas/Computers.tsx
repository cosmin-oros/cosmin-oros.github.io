import React from "react";
import { useGLTF } from "@react-three/drei";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF('./old_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.30} groundColor="black"/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 1}
        position={isMobile ? [0, -2, 0] : [0, -2, 0]}
        rotation={[0, 1.25, 0]}
      />
    </mesh>
  )
}

export default Computers