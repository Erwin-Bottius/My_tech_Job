import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  resultMessage: {
    fontWeight: 'bold',
  },
  span: {
    color: colorTheme.palette.secondary.main,
  },

}));

export default useStyles;
