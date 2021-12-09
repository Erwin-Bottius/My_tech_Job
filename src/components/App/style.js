import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colorTheme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultPageTheme: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexFlow: 'column',
    backgroundColor: colorTheme.palette.primary.light,
  },
  footer: {
    flexFlow: '0 1 auto',
    textAlign: 'center',
    padding: '1rem 0',
    width: '100%',
    background: 'white',
    border: '1px solid #f7f7f7',
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
      height: '100%',
    },
    html: {
      height: '-webkit-fill-available',
    },
    body: {
      height: '100%',
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
  '@supports (-webkit-touch-callout: none)': {
    body: {
      /* The hack for Safari */
      minHeight: '-webkit-fill-available',
    },
  },
}));

export default useStyles;
