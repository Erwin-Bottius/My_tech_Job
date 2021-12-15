import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  box: {
    width: '65%',
    minWidth: '950px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: colorTheme.palette.primary.transparentText,
    padding: '3.5% 0',

  },
  span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 700,
  },
  title: {
    fontSize: '2.3rem',
    fontWeight: 700,
    textAlign: 'left',
    marginBottom: '3rem',
  },
  searchCard: {
    padding: '0.7rem 2rem 0.7rem 0',
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
