import {React} from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LaunchIcon from '@mui/icons-material/Launch';
export const Contact = () => {
   
    return (
        <Grid container sx={{
            
            py:'2rem',marginY: '4rem',spacing:'2', borderTop: '1px solid white', 
            '& a:visited': {
                color: 'text.secondary',
                textDecoration: 'none'
            },
            '& a:link': {
                color: 'text.secondary',
                textDecoration: 'none'
            }
        }}>
        
       
            <Grid item xs={12} md={6} sx={{ paddingTop: '3rem', gridRow: { xs: 'auto', md: 'span 2' } }}>
                <Container>
                    <Typography variant='h4'gutterBottom>Contact Me</Typography>
                
                    <Typography variant='p' color='text.secondary'textAlign={'left'} lineHeight={3}>Thank you for visiting my website! Feel free to reach out through any of these platforms 
                    if you're interested in collaborating or have any questions.
                    </Typography>
                    
                </Container>
            </Grid>
            <Grid container md={6}> 
            <Grid item xs={12} md={6} sx={{ paddingTop: '3rem' }}>

                <Container>
                    <Typography variant='h5' color='text.main' gutterBottom>Resume:</Typography>
                    <a href="./assets/HaydenTinker_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Box display='flex' alignItems='center'>
                                <LaunchIcon />
                                <Typography p color='text.secondary'>Link to Resume</Typography>
                            </Box>
                        </a>
                </Container>
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingTop: '3rem' }}>
                <Container>
                <Typography variant='h5' gutterBottom>Social Media:</Typography>
                <Box display='flex' alignItems='center' paddingTop={"5px"}>
                        <a href="https://www.linkedin.com/in/hayden-tinker/" target="_blank" rel="noopener noreferrer" style={{marginRight:'1rem'}}>
                            <LinkedInIcon/>
                        </a>
                        <a href="https://github.com/haydentinker" target="_blank" rel="noopener noreferrer" style={{marginLeft:'1rem'}}>
                            <GitHubIcon/>
                        </a>
                    </Box>
                </Container>
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingTop: '3rem' }}>

                <Container>
                    <Typography variant='h5' color='text.main' gutterBottom >Email:</Typography>
                
                        <a href="mailto:haydentinker613@gmail.com" >

                            <Box display='flex' alignItems='center'>
                                <EmailIcon />
                                <Typography p color='text.secondary'>haydentinker613@gmail.com</Typography>
                            </Box></a>

                </Container>
            </Grid>
            <Grid item  xs={12} md={6} sx={{ paddingTop: '3rem' }}>
                <Container display="flex">
                    <Typography variant='h5' color='text.main' gutterBottom>Phone:</Typography>
                    <a href='tel:831-588-5167'>
                        <Box display='flex' alignItems='center'>
                            <PhoneIcon />
                            <Typography p color='text.secondary'>(831) 588-5167</Typography>
                        </Box>
                    </a>

                </Container>
            </Grid>
        </Grid>
        </Grid>
    )
}
