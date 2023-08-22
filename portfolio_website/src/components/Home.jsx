import {React} from 'react';
import { DeskSetupModel } from '../models/DeskSetupModel';
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

function Home () {  
 
  var dimensions=useScreenSize();
  var ratio=dimensions.width/dimensions.height;
  var isMobile = dimensions.width < 769;
  return (
    <>

      <ambientLight intensity={.7} />
      <directionalLight intensity={2} position={[0,dimensions.height,1]}/>
      {!isMobile ?( 

      <> 
      
      <ResponsiveText  position={[-3, 2, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>Hello,</ResponsiveText>
          <ResponsiveText  position={[-2, 0.5, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>I'm</ResponsiveText>
          <DeskSetupModel position={[0.002*dimensions.width,1.5 , -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <ResponsiveText  position={[-1, -1, 0]}scale={[.5*ratio, .5*ratio, .5*ratio]}>Hayden</ResponsiveText>
          <ResponsiveText  position={[0, -2.5, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>Tinker</ResponsiveText>
        
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
export default Home;