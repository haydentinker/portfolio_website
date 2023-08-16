import React from 'react'
import { Link,useTheme,useMediaQuery} from '@mui/material';


export const NavLinks = () => {
  const theme=useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  return (
<>


            <Link
              variant={isLgDown? 'h7':'h5'}
              
              color="text.primary"
              href="#about"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              About
            </Link>
            <Link
              variant={isLgDown? 'h7':'h5'}
              color="text.primary"
              href="#experience"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Experience
            </Link>
            <Link
              variant={isLgDown? 'h7':'h5'}
              color="text.primary"
              href="#projects"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Projects
            </Link>
            <Link
              variant={isLgDown? 'h7':'h5'}
              color="text.primary"
              href="#contact"
              sx={{textDecoration:'none', my: 1, mx: 3 }}
            >
              Contact
            </Link>
        </>
  )
}
