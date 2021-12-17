import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  appHomeMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  app: {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    flexFlow: 'column',
    backgroundColor: colorTheme.palette.primary.white,
  },
  appHomeDesktop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colorTheme.palette.primary.main,
    alignItems: 'center',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      backgroundColor: '#e8e8e8',
      width: '10px',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#babac0',
      borderRadius: '16px',
    },
    '#root': {
      minHeight: '100%',
    },
    html: {
      height: '100%',
    },
    body: {
      minHeight: '100%',
      fontFamily: colorTheme.typography.fontFamily,
    },
    '.pinkButton': {
      opacity: 0.8,
      transition: '200ms ease-out opacity',
      '&:hover': {
        background: colorTheme.palette.primary.pinkColor,
        opacity: 1,
      },
    },
    '.mainButton': {
      opacity: 0.8,
      transition: '200ms ease-out opacity',
      '&:hover': {
        background: colorTheme.palette.secondary.main,
        opacity: 1,
      },
    },
  },
}));

export default useStyles;
