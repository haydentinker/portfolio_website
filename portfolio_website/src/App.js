import { Canvas } from "@react-three/fiber";

import { About } from "./components/About";
import { Box } from "@mui/material";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { ScreenSizeProvider } from "./context/ScreenSizeContext";
function App() {
  return (
    <ScreenSizeProvider>
      <Box>
        <NavBar />
        <div id="home" />
        <Canvas
          style={{
            height: "100vh",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
          }}
        >
          <Home></Home>
        </Canvas>
        <div id="about" style={{ paddingTop: "10px" }} />
        <About id="about" />
        <div id="experience" style={{ paddingTop: "10px" }} />
        <Experience id="experience" />

        <div id="projects" style={{ paddingTop: "10px" }} />
        <Projects id="projects" />

        <div id="contact" style={{ paddingTop: "10px" }} />
        <Contact id="contact" />
      </Box>
    </ScreenSizeProvider>
  );
}

export default App;
