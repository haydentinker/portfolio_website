import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// Custom component to display the GLTF model
const GLTFModel = () => {
  const { scene } = useGLTF('./objects/scene.gltf'); // Load the entire scene

  return (
    <primitive object={scene} />
  );
};


// Main component
const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <GLTFModel />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
