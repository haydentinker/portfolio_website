import React from 'react';
import { Canvas } from 'react-three-fiber';

const ObjectViewer = ({ objFile }) => {

  return (
    <Canvas>
      <mesh>
        <boxGeometry>
          <meshStandardMaterial/>
        </boxGeometry>
      </mesh>
    </Canvas>
  );
};

export default ObjectViewer;
