import React from 'react'
import {Box, Typography } from '@mui/material';

export const Loading = ()=> {

  return (
    <Box height={'100vh'} display="flex" justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h4'  textAlign={'center'}>Loading...</Typography>
        </Box>
  )
}
