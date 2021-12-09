import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  box: {
    width: '75%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: colorTheme.palette.primary.transparentText,

  },
  title: {
    fontWeight: '500',
    marginBottom: '2rem',
    fontSize: '1.5rem',
  },
  button: {
    borderRadius: '100px',
    color: colorTheme.palette.primary.main,
    fontSize: '1.2rem',
    marginTop: '1rem',
    background: colorTheme.palette.primary.white,
    textTransform: 'capitalize',
    '&:hover': {
      background: colorTheme.palette.primary.white,
    },
  },
  span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
  },
  searchIcon: {
    color: colorTheme.palette.primary.pinkColor,
  },
}));

export default useStyles;
