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
  card__company: {
    color: colorTheme.palette.secondary.main,
    fontWeight: 500,
  },
  button: {
    fontWeight: 600,
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.secondary.main,
    textTransform: 'capitalize',
  },
  cardDesktop: {
    borderRadius: '8px',
    marginTop: '1rem',
    marginRight: '1rem',
    padding: '2% 5%',
    margin: 'auto',
    boxShadow: '0px 3px 8px 1px rgba(110,110,110,0.05)',
    cursor: 'pointer',
    transition: 'all ease-out 150ms',
    border: '2px solid transparent',
    '&:first-child': {
      marginTop: 0,
    },
    '&:hover': {
      boxShadow: '0px 3px 8px 1px rgba(110,110,110,0.19)',
      border: '2px solid rgba(110,110,110,0.15)',
    },
  },
  selected: {
    border: '2px solid rgb(239, 155, 14)',
    boxShadow: '0px 3px 7px 1px rgba(110,110,110,0.05)',
    '&:hover': {
      boxShadow: '0px 3px 8px 1px rgba(110,110,110,0.19)',
      border: '2px solid rgb(239, 185, 14)',
    },
  },

}));

export default useStyles;
