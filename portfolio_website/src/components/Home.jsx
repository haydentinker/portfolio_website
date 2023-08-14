import React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { DeskSetupModel } from '../models/DeskSetupModel';
import { useTheme } from '@emotion/react';
import { Text3D } from '@react-three/drei';


const ResponsiveText = ({ position, scale, children }) => {

  const font =
    'https://cdn.rawgit.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json';

  return (
    <Text3D font={font} position={position} scale={scale}>
      {children}
      <meshStandardMaterial attach='material' color='pink' />
    </Text3D>
  );
};

export const Home = () => {
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width
  console.log(viewport.height);
  return (
    <>

      <ambientLight intensity={1} />
      {!isMobile ?( <> <DeskSetupModel position={[3, 0.5, -2]} scale={[0.15, 0.15, 0.15]} />
        <ResponsiveText position={[-7, 1, -3]} scale={[0.07 * responsiveRatio, 0.07 * responsiveRatio, 0.07 * responsiveRatio]}>Hello! I'm</ResponsiveText>
        <ResponsiveText position={[-viewport.width/3, -viewport.height / 2.5 , 0]} scale={[0.08 * responsiveRatio, 0.08 * responsiveRatio, 0.08 * responsiveRatio]}>Hayden Tinker</ResponsiveText></>):
          <ResponsiveText position={[-0.75, isMobile ? -viewport.height / 6 : 0, 0]} scale={[0.09 * responsiveRatio, 0.09 * responsiveRatio, 0.09 * responsiveRatio]}>Hayden Tinker</ResponsiveText>}
    </>
      
  );
};
