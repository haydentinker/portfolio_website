import React, { Suspense, lazy} from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import { ScreenSizeProvider } from "./context/ScreenSizeContext";
import { Loading } from "./components/Loading";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const Home = lazy(() => import('./components/Home'));

function App() {
  
  return (
    <ScreenSizeProvider>
      <NavBar />
      <Box>
        <div id="home"/>
        <Suspense fallback={<Loading />}>
          
          <Canvas
            style={{
              height: "100vh",
              top: 0,
              left: 0,
              backgroundColor: "transparent",
            }}
          >
            <Home/>
          </Canvas>
        
          
        </Suspense>
      
        <Section id="about">
          <About />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact" >
          <Contact />
        </Section>
      </Box>
    </ScreenSizeProvider>
  );
}


const Section = ({ id, children }) => (
  <div id={id} style={{ paddingTop: "10px" }} >
    {children}
  </div>
);

export default App;
