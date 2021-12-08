import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
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
      height: '100%',
    },
    body: {
      height: '100%',
      fontFamily: colorTheme.typography.fontFamily,
    },
  },
}));

export default useStyles;
