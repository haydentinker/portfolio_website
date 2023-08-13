import { Box, Container, Typography } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import {Roman } from '../models/Roman'
import React from 'react'

export const About = () => {
  return (
    <Box sx={{backgroundColor:'primary.main'}}>
      <Typography textAlign={'center'} variant='h4' gutterBottom>About me</Typography>
      <Container sx={{display:'flex'}}>
      <Canvas style={{ height:'50vh',backgroundColor: "transparent"}}>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, -1, 5]} intensity={1} />
        <Roman/>
        </Canvas>
      <Typography variant='p' gutterBottom>
        Recent graduate with a BS in Computer Science and Business Administration.
        I'm passionate about the world of Software Engineering and can't wait to explore exciting opportunities.
        I'm actively seeking roles that will allow me to apply my skills and contribute to innovative projects.
         </Typography>
       
      </Container>
    </Box>
  )
}
