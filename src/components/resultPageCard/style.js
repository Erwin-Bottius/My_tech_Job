import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginTop: '1rem',
    padding: '2% 5%',
    margin: 'auto',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2% 5%',
  },
  button: {
    fontWeight: 'bold',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.secondary.main,
  },

}));

export default useStyles;
