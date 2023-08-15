import React from 'react'
import { Paper,Typography,Box} from '@mui/material'
export const TimelineElement = ({companyName, date,description}) => {
  return (
    <Box margin={'5rem'} display={'flex'} >
    <Paper border={'1px solid white'} elevation={6}>
         <Typography  variant='h4'  color='primary.light' textAlign={'center'}  >
            {companyName}
          </Typography>
          <Typography paddingBottom='2rem' variant='h6' color='secondary.light' textAlign={'center'}  >
            {date}
          </Typography>
          <Typography padding='2rem' variant='p' gutterBottom color='primary.text' textAlign={'center'} lineHeight={'1.5'} >
            {description}
          </Typography>
          </Paper>
          </Box>
  )
}
