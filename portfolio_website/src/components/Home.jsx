import React from 'react';
import { Canvas} from '@react-three/fiber';
import { DeskSetupModel } from '../models/DeskSetupModel';
import { useTheme } from '@emotion/react';
import { Text3D } from '@react-three/drei';


export const Home = () => {
  const materialUiTheme=useTheme();
  const font = materialUiTheme.typography.fontFamily;
  return (
    <Canvas
    style={{
      height:'100vh',
      width:'100%',
      backgroundColor: 'transparent',
    }}
  >
    <ambientLight intensity={1} />
    <DeskSetupModel  position={[3,.5,-2]}scale={[0.15, 0.15, 0.15]}  />
    <Text3D  position={[-7,1,-3]} font={
      'https://cdn.rawgit.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json'
    }>
      Hello! I'm 
      <meshStandardMaterial attach='material' color="pink" />
    </Text3D>
    <Text3D  position={[-4.5,-2,1]}  font={
      'https://cdn.rawgit.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json'
    }>
      Hayden Tinker
      <meshStandardMaterial attach='material' color="pink" />
    </Text3D>
  </Canvas>
      // {/* <Typography
      //   variant='h1'
      //   gutterBottom
      //   noWrap
      //   style={{ position: 'relative', zIndex: '1' }}
      // >
      //   Hi,
      //   <br />
      //   I'm Hayden,
      //   <br />
      //   Software Engineer
      // </Typography> */}

  );
};
