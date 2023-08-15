import { Box, Container, Typography, Paper, Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Roman } from '../models/Roman'
import React from 'react'

export const About = () => {
  return (
    <Box sx={{height:'100vh', backgroundColor: 'primary.main', display:'flex' }} >
      <Box flex={'.5'}>
        <Canvas style={{ backgroundColor: "transparent" }}>
          <ambientLight intensity={1} />
          <directionalLight color="white" position={[0, -1, 5]} intensity={1} />
          <Roman />
        </Canvas>
      </Box>
      <Box flex={'.5'}  paddingRight={'2rem'} justifyItems={'center'}>

      
          <Typography padding='2rem' variant='h4' gutterBottom color='primary.text' textAlign={'center'} lineHeight={'2'} >
            Future owner of The World's First Pug Army and recent graduate with a BS in Computer Science and Business Administration.
            I'm passionate about the world of Software Engineering and can't wait to explore exciting opportunities.
            I'm actively seeking roles that will allow me to apply my skills and contribute to innovative projects.
          </Typography>
    
      </Box>
    </Box>
  )
}
