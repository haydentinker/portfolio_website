import { Box, Container, Typography, Paper, Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Roman } from '../models/Roman'
import React from 'react'
import pugs from '../assets/images/pugs.png'
export const Experience = () => {
  return (
    <Box >
    <Typography variant='h2' textAlign={'center'}  padding={'1rem'} >Experience</Typography>
    <Grid container>
     
      <Grid item xs={6} paddingTop={'2rem'}>
          
          <Typography padding='2rem' variant='h4' gutterBottom color='primary.text' textAlign={'center'} lineHeight={'1.5'} >
            Future owner of The World's First Pug Army and recent graduate with a BS in Computer Science and Business Administration.
            I'm passionate about the world of Software Engineering and can't wait to explore exciting opportunities.
            I'm actively seeking roles that will allow me to apply my skills and contribute to innovative projects.
          </Typography>
      </Grid>
    </Grid>
    </Box>
  )
}