import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls, Environment } from "@react-three/drei";

const GoldCoin = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float rotationIntensity={0.4}>
            <mesh>
              <cylinderGeometry args={[2, 2, 0.4, 64]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.21]}>
              <cylinderGeometry args={[1.8, 1.8, 0.05, 64]} />
              <meshStandardMaterial color="#FFF5E0" metalness={0.6} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, -0.21]}>
              <cylinderGeometry args={[1.8, 1.8, 0.05, 64]} />
              <meshStandardMaterial color="#FFF5E0" metalness={0.6} roughness={0.2} />
            </mesh>
          </Float>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default GoldCoin;