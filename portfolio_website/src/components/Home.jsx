import {React} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { DeskSetupModel } from '../models/DeskSetupModel';
import { useTheme } from '@emotion/react';
import { Text3D } from '@react-three/drei';
import { useScreenSize } from '../context/ScreenSizeContext';

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
 

  const dimensions=useScreenSize();
  var isMobile = dimensions.width < 769;
  const isDesktop= !isMobile && dimensions.width<2560;
  return (
    <>

      <ambientLight intensity={.7} />
      <directionalLight intensity={2} position={[0,dimensions.height,1]}/>
      {!isMobile ?( 

      <> 
      
      <ResponsiveText  position={[-.0025*dimensions.width, .0015*dimensions.height, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Hello,</ResponsiveText>
          <ResponsiveText  position={[-.002*dimensions.width, .0005*dimensions.height, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>I'm</ResponsiveText>
          <DeskSetupModel position={[0.002*dimensions.width, .0005*dimensions.height , -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <ResponsiveText  position={[-.0017*dimensions.width, -.0009*dimensions.height, 0]}scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Hayden</ResponsiveText>
          <ResponsiveText  position={[-.001*dimensions.width, -.002*dimensions.height, 0]} scale={[0.01 * dimensions.width/25, 0.01 * dimensions.width/25, 0.01* dimensions.width/25]}>Tinker</ResponsiveText>
        
       </> ):

          //Mobile design
          <>
          <ResponsiveText  position={[-.003*dimensions.width, .002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hello,</ResponsiveText>
          <ResponsiveText  position={[-.002*dimensions.width, .001*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>I'm</ResponsiveText>
          <DeskSetupModel position={[0, 0, -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <ResponsiveText  position={[.00008*dimensions.width, -.001*dimensions.height, 0]}scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hayden</ResponsiveText>
          <ResponsiveText  position={[0.0007*dimensions.width, -.002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Tinker</ResponsiveText>
          </>
          }
    </>
      
  );
};
