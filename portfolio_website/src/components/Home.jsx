import {React} from 'react';
import { DeskSetupModel } from '../models/DeskSetupModel';
import { FiberText } from './FiberText';
import { useScreenSize } from '../context/ScreenSizeContext';


export const Home = ()=> {
 
  var dimensions=useScreenSize();
  var ratio=dimensions.width/dimensions.height;
  var isMobile = dimensions.width < 769;
  return (
    <>

      <ambientLight intensity={.7} />
      <directionalLight intensity={2} position={[0,dimensions.height,1]}/>
      {!isMobile ?( 

      <> 
      
      <FiberText  position={[-3, 2, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>Hello,</FiberText>
          <FiberText  position={[-2, 0.5, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>I'm</FiberText>
          <DeskSetupModel position={[0.002*dimensions.width,1.5 , -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <FiberText  position={[-1, -1, 0]}scale={[.5*ratio, .5*ratio, .5*ratio]}>Hayden</FiberText>
          <FiberText  position={[0, -2.5, 0]} scale={[.5*ratio, .5*ratio, .5*ratio]}>Tinker</FiberText>
        
       </> ):

          //Mobile design
          <>
          <FiberText  position={[-.003*dimensions.width, .002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hello,</FiberText>
          <FiberText  position={[-.002*dimensions.width, .001*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>I'm</FiberText>
          <DeskSetupModel position={[0, 0, -5]} scale={[0.01 * dimensions.width/100, 0.01 * dimensions.width/100, 0.01* dimensions.width/100]} />
          <FiberText  position={[.00008*dimensions.width, -.001*dimensions.height, 0]}scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Hayden</FiberText>
          <FiberText  position={[0.0007*dimensions.width, -.002*dimensions.height, 0]} scale={[0.01 * dimensions.width/15, 0.01 * dimensions.width/15, 0.01* dimensions.width/15]}>Tinker</FiberText>
          </>
          }
   </>
      
  );
};
