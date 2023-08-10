import { Canvas } from "@react-three/fiber";
import { David } from "./components/David";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Home } from "./components/Home";
function App() {
  return (
    <>
      <AppBar
        position="static"
  
        sx={{ bgcolor: "transparent", padding: "1%", backdropFilter: "blur(5px)" }}
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
            <Typography variant="h4" >
              Hayden Tinker
            </Typography>
          </Container>
          <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent:'space-between',
            width:'100%',

          }}>
            <Typography variant="h5" noWrap>
              Home
            </Typography>
            <Typography variant="h5" noWrap >
              About
            </Typography>
            <Typography variant="h5" noWrap >
              Experience 
            </Typography>
            <Typography variant="h5" noWrap >
              Contact
            </Typography>
          </Container>
        </Container>
      </AppBar>
      <Home></Home>
      <Canvas style={{ height: "100vh" }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <David />
      </Canvas>
    </>
  );
}

export default App;
