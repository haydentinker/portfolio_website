import React from 'react'
import {Box, Container,Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
export const Loading = ()=> {

  return (
    <Box height={'100vh'} display="flex" justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h4'  textAlign={'center'}>Loading...</Typography>
        </Box>
  )
}
