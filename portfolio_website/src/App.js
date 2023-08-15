import { Canvas } from "@react-three/fiber";
import AppBar from "@mui/material/AppBar";
import { About } from "./components/About";
import { Typography, Box,Container } from "@mui/material";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
function App() {
  return (
    <Box>
      <AppBar
       
        sx={{
          bgColor: "transparent",
          padding: "1%",
          backdropFilter: "blur(5px)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4">Hayden Tinker</Typography>
          </Container>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h5" noWrap>
              Home
            </Typography>
            <Typography variant="h5" noWrap>
              About
            </Typography>
            <Typography variant="h5" noWrap>
              Experience
            </Typography>
            <Typography variant="h5" noWrap>
              Contact
            </Typography>
          </Container>
        </Container>
      </AppBar>
      <Canvas
        style={{
          height:'100vh',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
        }}
      >
      <Home></Home>
      </Canvas>
      <About/>
      <Experience/>
      <Projects/>
    </Box>
  );
}

export default App;
