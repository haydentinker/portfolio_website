import {React,useState} from 'react'
import { Box, Container, Typography, Paper, Grid } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Roman } from '../models/Roman'
import pugs from '../assets/images/pugs.png'
export const About = () => {
  const [hovered,setHovered]= useState(true);
  const handleMouseHover=()=>{
    setHovered(!hovered);

  };
  return (
    <>
    <Typography variant='h2' textAlign={'center'} >About Me</Typography>
    <Grid container marginBottom={'15rem'}>
     
      <Grid item xs={6}>
        
        <Typography padding='2rem' variant='h4' gutterBottom color='primary.text' textAlign={'center'} lineHeight={'2'} >
          Future owner of The World's First Pug Army and recent graduate with a BS in Computer Science and Business Administration.
          I'm passionate about the world of Software Engineering and can't wait to explore exciting opportunities.
          I'm actively seeking roles that will allow me to apply my skills and contribute to innovative projects.
        </Typography>
      </Grid>
      <Grid item xs={6}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={pugs}
          alt="Pugs"
          style={{
            maxWidth: '75%',
            height: 'auto',
            border: '10px solid grey',
            borderRadius: '10px',
            filter: hovered ? 'grayscale(100%)' : 'none',
            transition:'filter 0.5s ease',
          }}
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover}
        />
      </Grid>

    </Grid>
    </>
  )
}
