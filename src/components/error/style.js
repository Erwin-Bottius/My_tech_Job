import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  ghost: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: '2rem',
  },
  title: {
    fontWeight: 'bolder',
    marginBottom: '1rem',
  },
  searchButton: {
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
    marginTop: '2rem',
  },
  // *********** DESKTOP
  desktop__container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  ghost__desktop: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: '5rem',
  },
  title__desktop: {
    fontWeight: 700,
    fontSize: '2rem',
    marginBottom: '3rem',
  },
  info__desktop: {
    fontWeight: 500,
    fontSize: '1.2rem',
    marginBottom: '4rem',
  },
}));

export default useStyles;
