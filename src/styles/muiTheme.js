import { createTheme } from '@mui/material';
import { Main } from './palettes';

export const theme = createTheme({
  palette: {
    primary: {
      main: Main.main,
    },
    error: {
      main: Main.error,
    },
    green: {
      main: Main.green,
    },
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      color: '#1d1c1d',
      fontSize: '2.8rem',
      fontWeight: '700',
    },
    h2: {
      color: '#1d1c1d',
      fontSize: '2.6rem',
      fontWeight: '700',
    },
    h3: {
      color: '#1d1c1d',
      fontSize: '2.4rem',
      fontWeight: '700',
    },
    h4: {
      color: '#1d1c1d',
      fontSize: '2.2rem',
      fontWeight: '700',
    },
    h5: {
      color: '#1d1c1d',
      fontSize: '2rem',
      fontWeight: '700',
    },
    h6: {
      color: '#1d1c1d',
      fontSize: '1.8rem',
      fontWeight: '700',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: 'flex',
          gap: '4px',
          padding: '8px 12px',
          fontSize: '0.9rem',
          color: '#fff',
          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: '#1D1C1D',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#444344',
          },
          '&:disabled': {
            opacity: 0.6,
            color: '#fff',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 'max-content',
          height: 'max-content',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(85, 85, 85, 0.15)',
          borderRadius: '8px !important',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#555',
          fontWeight: '500',
        },
      },
    },
  },
});