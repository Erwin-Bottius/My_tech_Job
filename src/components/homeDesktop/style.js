import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  box: {
    width: '75%',
    minWidth: '45rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: colorTheme.palette.primary.transparentText,

  },
  span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'left',
    marginBottom: '3rem',
  },
  hr: {
    width: '1.5px',
    background: colorTheme.palette.secondary.light,
    height: '2.5rem',
  },
  searchCard: {
    width: '100%',
    padding: '0.3rem 1rem',
    background: colorTheme.palette.primary.white,
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  searchButton: {
    padding: '0.6rem',
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    minWidth: '0',
    '& span': {
      margin: 'auto',
    },
  },
  populatSearches_title: {
    textAlign: 'left',
    marginTop: '3rem',
    marginBottom: '1rem',
    color: colorTheme.palette.primary.white,
  },
  guided__container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
