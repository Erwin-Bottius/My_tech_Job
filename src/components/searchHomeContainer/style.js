import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme'

const useStyles = makeStyles(() => ({

  box: {
    width: '75%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: colorTheme.palette.primary.transparentText,

  },
  root: {
    borderRadius: '100px',
    color: colorTheme.palette.primary.main,
    fontWeight: 'bold',
    marginTop: '1rem',
    background: colorTheme.palette.primary.white,
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
