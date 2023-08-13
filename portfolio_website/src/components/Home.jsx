import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Typography, Container,Box } from "@mui/material";
import { Volleyball } from '../models/Volleyball';
import { amber } from '@mui/material/colors';
import { AmbientLight } from 'three';
import {DeskSetupModel} from'../models/DeskSetupModel';

export const Home = () => {
  return (
    <>
    <Container
     sx={{height:'100vh',alignContent:'center',justifyContent:'center',marginTop:'5%', display:'flex',flexDirection:'row'}}>
      <Container>
      <Typography variant='h2'gutterBottom noWrap>Hi,<br/>I'm Hayden,<br/>Software Engineer</Typography>
      </Container>
      <Canvas style={{height:'100%',width:'100%', backgroundColor: "transparent", display: 'flex' }}>
          
    <ambientLight intensity={1} />
    <directionalLight color="red" position={[1, 3, 0]} intensity={1} />
    <directionalLight color="blue" position={[-1, 3, 0]} intensity={1} />
    <DeskSetupModel scale={[0.15, 0.15, 0.15]} />
  </Canvas>
      </Container>
      </>

  );
};
