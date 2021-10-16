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
}));

export default useStyles;
