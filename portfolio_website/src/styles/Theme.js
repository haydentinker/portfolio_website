import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  overrides: {
    // You can target specific components here and apply the background image
    MuiCssBaseline: {
      '@global': {
        // Use the desired background image URL
        body: {
          backgroundImage: 'url("/path/to/your/image.jpg")',
          backgroundSize: 'cover', // Adjust this based on your preference
          backgroundRepeat: 'no-repeat', // Adjust this based on your preference
        },
      },
    },
  },
});

export default theme;