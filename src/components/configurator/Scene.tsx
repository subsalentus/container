"use client";

import { Canvas } from "@react-three/fiber";
import { 
  OrbitControls, 
  Grid, 
  ContactShadows, 
  Edges, 
  PerspectiveCamera 
} from "@react-three/drei";

function ContainerBox() {
  // 20ft shipping container dimensions (in meters)
  const length = 6.058; // X axis
  const height = 2.591; // Y axis
  const width = 2.438;  // Z axis

  return (
    <mesh position={[0, height / 2, 0]}>
      {/* Box representing the 20ft container */}
      <boxGeometry args={[length, height, width]} />
      <meshStandardMaterial 
        color="#B2C3B8" // Low-profile Mint Sage pastel paint finish
        roughness={0.5} 
        metalness={0.2} 
      />
      {/* Blueprint Edges helper for a clean architectural sketch look */}
      <Edges 
        threshold={15} 
        color="#4B5563" // Charcoal-600
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full relative bg-[#F3F2EE]">
      {/* Subtle UI Overlay in the 3D Canvas */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none font-mono text-[10px] text-zinc-400 space-y-0.5">
        <div>ORBIT: Left Click + Drag</div>
        <div>PAN: Right Click + Drag</div>
        <div>ZOOM: Scroll Wheel</div>
      </div>

      <Canvas shadows gl={{ antialias: true, preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={45} />
        
        {/* Day Studio Lights */}
        <ambientLight intensity={0.7} />
        <hemisphereLight 
          color="#ffffff" 
          groundColor="#e5e7eb" 
          intensity={0.6} 
        />
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        
        {/* 3D Scene Objects */}
        <ContainerBox />
        
        {/* Soft Contact Shadows below the container */}
        <ContactShadows 
          position={[0, 0, 0]} 
          opacity={0.35} 
          scale={15} 
          blur={2.0} 
          far={1.8} 
        />
        
        {/* Grid helper for blueprint vibe */}
        <Grid 
          position={[0, -0.01, 0]}
          args={[30, 30]}
          cellSize={1} 
          cellThickness={0.5} 
          cellColor="#d1d5db" // Gray-300
          sectionSize={5} 
          sectionThickness={1.0} 
          sectionColor="#9ca3af" // Gray-400
          fadeDistance={25}
          infiniteGrid
        />
        
        {/* Navigation Controls */}
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          maxPolarAngle={Math.PI / 2 - 0.05} // Prevent camera going below ground
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
