import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  notFound: {
    position: 'relative',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFound__button: {
    position: 'absolute',
    top: '5%',
    left: '3%',
    color: colorTheme.palette.primary.pinkColor,
    border: `1px solid ${colorTheme.palette.primary.pinkColor}`,
    transition: 'all 200ms ease-out',
    '&:hover': {
      color: colorTheme.palette.primary.white,
      backgroundColor: colorTheme.palette.primary.pinkColor,
    },
  },
  notFound__title: {
    fontWeight: 900,
    fontSize: '10rem',
    color: colorTheme.palette.secondary.main,
  },

}));

export default useStyles;
