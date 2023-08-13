import { Canvas } from "@react-three/fiber";
import AppBar from "@mui/material/AppBar";
import { About } from "./components/About";
import { Typography, Box,Container } from "@mui/material";
import { Home } from "./components/Home";
import { Moka } from "./models/Moka";
import { Roman } from "./models/Roman";
import { Table } from "./models/Table";
import { Volleyball } from "./models/Volleyball";
import { Vector3 } from "three";
import bg from './assets/images/background.png';
import { Experience } from "./components/Experience";
function App() {
  return (
    <Box  sx={{
      // background: `url(${bg}) no-repeat center/cover`
      
    }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "transparent",
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
      <Home></Home>
      {/* <Canvas style={{ height:'50vh',backgroundColor: "white" }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, -1, 5]} intensity={2} />
        <Moka position={new Vector3(5.5,0.2,0)}/>
        <Table position={new Vector3(5,-3,-1)}/>
        <Roman position={new Vector3(-1,-1,0)}/>
        <Volleyball position={new Vector3(-1,-5,0)}/>
      </Canvas> */}
      <About/>
      <Experience/>
    </Box>
  );
}

export default App;
