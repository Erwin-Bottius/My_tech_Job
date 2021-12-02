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
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorTheme.palette.primary.light,
  },
  '@global': {
    '*::-webkit-scrollbar': {
      backgroundColor: '#f2f2f2',
      width: '10px',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#babac0',
      borderRadius: '16px',
    },
  },
}));

export default useStyles;
