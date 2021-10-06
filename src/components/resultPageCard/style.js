import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '1rem',
    padding: '2% 5%',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2% 5%',
  },
  button: {
    fontWeight: 'bolder',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.secondary.main,
  },

}));

export default useStyles;
