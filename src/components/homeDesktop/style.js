import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  box: {
    width: '70%',
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
  searchCard: {
    padding: '0.7rem 1rem 0.7rem 0',
    background: colorTheme.palette.primary.white,
    borderRadius: '4px',
    width: '100%',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    padding: '0.6rem 1rem',
    background: colorTheme.palette.primary.pinkColor,
    opacity: 0.80,
    color: colorTheme.palette.primary.white,
    minWidth: '0',
    '& span': {
      margin: 'auto',
    },
  },
  popularSearches_title: {
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
