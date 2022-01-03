import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  navbarClose: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    background: 'rgb(64, 41, 101)',
    top: '5rem',
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
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
    fontSize: '1.1rem',
    marginLeft: '2rem',
    padding: '1.2rem 0',
  },
  hr: {
    width: '100%',
    borderTop: '1px solid rgb(87, 55, 138)',
  },
}));

export default useStyles;
