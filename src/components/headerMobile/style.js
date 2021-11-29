import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colorTheme.palette.primary.black,
    backgroundColor: colorTheme.palette.primary.white,
    padding: '4% 5%',
  },
  resultPageTheme: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.main,
    padding: '4% 5%',

  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
  },

}));

export default useStyles;
