import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  navbarClose: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    background: colorTheme.palette.secondary.main,
    top: '5rem',
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    padding: '2rem 0',
    animation: `$navbarClose 500ms ${theme.transitions.easing.easeOut}`,
  },
  '@keyframes navbarClose': {
    '0%': {
      bottom: '100%',
    },
    '100%': {
      bottom: '0',
    },
  },
  navbarOpen: {
    position: 'absolute',
    background: colorTheme.palette.secondary.main,
    top: '5rem',
    right: 0,
    left: 0,
    bottom: '100%',
    zIndex: 10,
    visibility: 'hidden',
    display: 'none',
    animation: `$navbarOpen 500ms ${theme.transitions.easing.easeOut}`,
  },
  '@keyframes navbarOpen': {
    '0%': {
      bottom: 0,
    },
    '100%': {
      bottom: '100%',
    },
  },
  navbar__link: {
    color: 'white',
    fontSize: '1.3rem',
  },
  hr: {
    width: '60%',
    borderTop: '1px solid white',
    marginTop: '0.4rem',
    marginBottom: '1.3rem',
  },
}));

export default useStyles;
