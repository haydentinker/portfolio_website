import { Canvas } from '@react-three/fiber'
import {David} from './components/David';
import { Nav } from './components/Nav';
function App() {
 

  return (
    <Canvas style={{height:'100vh'}}>
  <ambientLight intensity={0.1} />
  <directionalLight color="white" position={[0, 0, 5]} />
    <David />
</Canvas>
  );
}

export default App;