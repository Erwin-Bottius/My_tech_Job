import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  card: {
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
    textTransform: 'capitalize',
  },
  cardDesktop: {
    width: '90%',
    marginTop: '1rem',
    padding: '2% 5%',
    margin: 'auto',
    cursor: 'pointer',
    border: '2px solid transparent',
    '&:first-child': {
      marginTop: 0,
    },
    '&:hover': {
      boxShadow: '0px 3px 7px 1px rgba(110,110,110,0.3)',
      border: '2px solid rgba(124,124,124,0.1)',
    },
  },
  selected: {
    border: '2px solid rgb(239, 155, 14)',
    '&:hover': {
      boxShadow: '0px 3px 7px 1px rgba(110,110,110,0.22)',
      border: '2px solid rgb(239, 185, 14)',
    },
  },

}));

export default useStyles;
