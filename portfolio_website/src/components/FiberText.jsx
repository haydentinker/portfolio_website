import React from 'react'
import { Text3D } from '@react-three/drei';
export const FiberText =({ position, scale, children }) => {

    const font =
      'https://cdn.rawgit.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json';
  
    return (
      <Text3D font={font} position={position} scale={scale}>
        {children}
        <meshStandardMaterial attach='material' color='pink' />
      </Text3D>
    );
  };