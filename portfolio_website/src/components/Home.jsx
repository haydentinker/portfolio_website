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
  const isMobile = window.innerWidth < 769;
  const isDesktop= !isMobile && window.innerWidth<2560;
  const responsiveRatio = viewport.width
  return (
    <>

      <ambientLight intensity={.7} />
      <directionalLight intensity={2} position={[0,viewport.height,1]}/>
      {!isMobile ?( 
        isDesktop?(

      <> 
      
        <DeskSetupModel position={[viewport.width/2, viewport.height/6, -4]} scale={[0.02 * responsiveRatio, 0.02 * responsiveRatio, 0.02 * responsiveRatio]} />
        <ResponsiveText position={[-viewport.width/3, .5, 0]} scale={[0.07 * responsiveRatio, 0.07 * responsiveRatio, 0.07 * responsiveRatio]}>Hello! I'm</ResponsiveText>
        <ResponsiveText position={[-viewport.width/3, -viewport.height / 5 , 0]} scale={[0.08 * responsiveRatio, 0.08 * responsiveRatio, 0.08 * responsiveRatio]}>Hayden Tinker</ResponsiveText>
        </>):
        <> 
        <DeskSetupModel position={[viewport.width/3, viewport.height/5, -4]} scale={[0.01 * responsiveRatio, 0.01 * responsiveRatio, 0.01* responsiveRatio]} />
        <ResponsiveText position={[-viewport.width/3, viewport.height/6, 0]} scale={[0.07 * responsiveRatio, 0.07 * responsiveRatio, 0.07 * responsiveRatio]}>Hello! I'm</ResponsiveText>
        <ResponsiveText position={[-viewport.width/3, -viewport.height / 5 , 0]} scale={[0.08 * responsiveRatio, 0.08 * responsiveRatio, 0.08 * responsiveRatio]}>Hayden Tinker</ResponsiveText>
        </>
        ):

          //Mobile design
          <>
          <ResponsiveText position={[-viewport.width/7, viewport.height/4.5, 1]} scale={[0.09 * responsiveRatio, 0.09 * responsiveRatio, 0.09 * responsiveRatio]}>Hello,</ResponsiveText>
          <ResponsiveText position={[-viewport.width/12, viewport.height /7, 1]} scale={[0.09 * responsiveRatio, 0.09 * responsiveRatio, 0.09 * responsiveRatio]}>I'm</ResponsiveText>
          <DeskSetupModel position={[-viewport.width/12, 0, -7]}scale={[0.15, 0.15, 0.15]} />
          <ResponsiveText position={[-viewport.width/5, -viewport.height/7.5, 2]} scale={[0.09 * responsiveRatio, 0.09 * responsiveRatio, 0.09 * responsiveRatio]}>Hayden</ResponsiveText>
          <ResponsiveText position={[-viewport.width/5, -viewport.height/4.5, 2]} scale={[0.09 * responsiveRatio, 0.09 * responsiveRatio, 0.09 * responsiveRatio]}>Tinker</ResponsiveText>
          </>
          }
    </>
      
  );
};
