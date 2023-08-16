import React from 'react'
import { Typography, Box, Container,} from "@mui/material";
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import AppBar from "@mui/material/AppBar";
import logo from '../assets/images/favicon.png';
export const NavBar = () => {
    return (
        <AppBar

            sx={{
                bgColor: "transparent",
                backdropFilter: "blur(5px)",
            }}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img src={logo} style={{ maxHeight: '55px', marginRight: '10px' }}/>
          <Typography variant="h3" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Hayden Tinker
          </Typography>
          <nav>
            <Link
              variant='h5'
              
              color="text.primary"
              href="#about"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              About
            </Link>
            <Link
              variant='h5'
              color="text.primary"
              href="#experience"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Experience
            </Link>
            <Link
              variant='h5'
              color="text.primary"
              href="#projects"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Projects
            </Link>
            <Link
              variant='h5'
              color="text.primary"
              href="#contact"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Contact
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    )
}
