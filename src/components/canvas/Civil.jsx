import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Civil = ({ isMobile }) => {
  const laptop = useGLTF("./desktop_pc/scene.gltf", true); // Added true for preload
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.y = isMobile ? -2 : -3.25;
      meshRef.current.rotation.y = -0.2;
    }
  }, [isMobile]);

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.5} groundColor="#000000" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[0, -1, 0]} color="#915EFF" />
      <primitive
        object={laptop.scene}
        scale={isMobile ? 0.45 : 0.65}
        position={[0, 0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const CivilCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
      style={{ position: 'relative', zIndex: 0 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Civil isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const Building = () => {
  return (
    <mesh>
      {/* Base/Foundation */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[8, 0.5, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      {/* Main Building Structure */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[6, 6, 6]} />
        <meshStandardMaterial color="#915EFF" opacity={0.8} transparent />
      </mesh>

      {/* Columns */}
      {[[-2.5, 0, -2.5], [2.5, 0, -2.5], [-2.5, 0, 2.5], [2.5, 0, 2.5]].map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <cylinderGeometry args={[0.3, 0.3, 4]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      ))}

      {/* Roof */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[7, 0.5, 7]} />
        <meshStandardMaterial color="#555555" />
      </mesh>
    </mesh>
  );
};

const BuildingCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Building />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const Bridge = () => {
  return (
    <group>
      {/* Main Bridge Deck - Larger and more detailed */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[20, 0.8, 4]} />
        <meshStandardMaterial color="#915EFF" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Bridge Towers - Taller and more detailed */}
      {[[-4, 0], [4, 0]].map((x, i) => (
        <group key={i}>
          {/* Main Tower Structure */}
          <mesh position={[x[0], 5, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 10]} />
            <meshStandardMaterial color="#444444" metalness={0.7} roughness={0.2} />
          </mesh>

          {/* Tower Details */}
          <mesh position={[x[0], 9.5, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 1]} />
            <meshStandardMaterial color="#915EFF" metalness={0.6} roughness={0.2} />
          </mesh>

          {/* Cables - More cables for detail */}
          {[-1.8, -1.2, -0.6, 0, 0.6, 1.2, 1.8].map((z, j) => (
            <group key={j}>
              <mesh position={[x[0], 5, z]}>
                <cylinderGeometry args={[0.05, 0.05, 10]} rotation={[0, 0, Math.PI / 6]} />
                <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Support Pillars - More substantial */}
      {[[-8, 0], [8, 0]].map((x, i) => (
        <mesh key={i} position={[x[0], -3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 6]} />
          <meshStandardMaterial color="#555555" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}

      {/* Road Surface with Details */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[20, 0.1, 3.8]} />
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </mesh>

      {/* Bridge Railings - More detailed */}
      {[-1, 1].map((side, i) => (
        <group key={i}>
          <mesh position={[0, 0.8, side * 1.9]}>
            <boxGeometry args={[20, 0.4, 0.1]} />
            <meshStandardMaterial color="#915EFF" opacity={0.8} transparent metalness={0.6} />
          </mesh>
          {/* Railing posts */}
          {Array.from({ length: 20 }).map((_, j) => (
            <mesh key={j} position={[-9.5 + j, 0.6, side * 1.9]}>
              <boxGeometry args={[0.05, 0.8, 0.05]} />
              <meshStandardMaterial color="#915EFF" opacity={0.8} transparent />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

const BridgeCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [25, 8, 25], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
        <pointLight intensity={1} position={[0, -1, 0]} color="#915EFF" />
        <Bridge />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BridgeCanvas;