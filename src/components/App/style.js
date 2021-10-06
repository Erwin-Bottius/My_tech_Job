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
}));

export default useStyles;
