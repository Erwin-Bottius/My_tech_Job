import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 4,
    overflowX: 'hidden',
    background: colorTheme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: colorTheme.palette.primary.transparentText,
    paddingTop: '6rem',
    padding: '5% 5%',
    overflowY: 'auto',
  },
  container: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
  title: {
    fontWeight: 700,
  },
  searchCard: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '2rem',
    background: colorTheme.palette.primary.white,
    paddingBottom: '1rem',
    borderRadius: '6px',
  },
  cross: {
    color: colorTheme.palette.primary.white,
    fontSize: '2rem',
    position: 'absolute',
    top: '2%',
    right: '5%',
  },
  span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
  },
  searchButton: {
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
    width: '80%',
    display: 'block',
    margin: 'auto',
    marginTop: '1rem',
  },
  populatSearches_title: {
    marginBottom: '1rem',
    fontWeight: 700,
  },
}));

export default useStyles;
