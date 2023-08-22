import { React, useState } from 'react'
import { Link, Typography, Box, useMediaQuery } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@emotion/react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLinks } from './NavLinks';
import Button from '@mui/material/Button';
import logo from '../assets/images/favicon.png'
export const NavBar = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXsDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (event) => {
    setDrawerOpen(!drawerOpen);
  };

  const navDrawer = () => (
    <Box
      sx={{

        width: 250,
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >

      <NavLinks />
    </Box>
  );
  return (
    <AppBar
      sx={{
        bgColor: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <img src={logo} alt={`Hayden Tinker's logo`} style={{ maxHeight: '55px', marginRight: '10px' }} />
        {!isXsDown ? <Link color="text.primary"
          href="#home"
          sx={{ textDecoration: 'none', flexGrow: 1 }}><Typography variant="h4" color="inherit" noWrap >
            Hayden Tinker
          </Typography> </Link >
          : <></>}
        {isMdDown ? (
          <Box display={'flex'} justifyContent={'right'}>

            <Button onClick={toggleDrawer} > <MenuIcon /></Button>

            <Drawer
              PaperProps={{
                sx: {
                  height: 'auto',
                },
              }}
              anchor={"top"}
              onClose={toggleDrawer}
              open={drawerOpen}
            >
              {navDrawer()}
            </Drawer>
          </Box>) :

          <NavLinks />}
      </Toolbar>
    </AppBar>
  )
}
