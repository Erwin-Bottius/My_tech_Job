import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colorTheme.palette.primary.white,
    color: colorTheme.palette.primary.black,
    padding: '3% 5%',
  },
  resultPageTheme: {
    padding: '3% 5%',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.main,
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
  },

}));

export default useStyles;
