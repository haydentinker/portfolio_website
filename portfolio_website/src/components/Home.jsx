import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Typography, Container, Box } from "@mui/material";
import { Volleyball } from '../models/Volleyball';
import { amber } from '@mui/material/colors';
import { AmbientLight } from 'three';
import { DeskSetupModel } from '../models/DeskSetupModel';

export const Home = () => {
  return (
    <Container
      sx={{
        marginTop: '10%',
      }}
    >
      <Typography
        variant='h1'
        gutterBottom
        noWrap
        style={{ position: 'absolute', zIndex: '1' }}
      >
        Hi,
        <br />
        I'm Hayden,
        <br />
        Software Engineer
      </Typography>
      <Canvas
        style={{
  
          backgroundColor: 'transparent',
          zIndex: '-5',
        }}
      >
        <ambientLight intensity={1} />
        <DeskSetupModel scale={[0.15, 0.15, 0.15]} />
      </Canvas>
    </Container>
  );
};
