import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  resultMessage: {
    fontWeight: 'bold',
  },
  span: {
    color: colorTheme.palette.secondary.main,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}));

export default useStyles;
