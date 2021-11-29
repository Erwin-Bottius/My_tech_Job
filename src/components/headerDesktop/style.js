import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: colorTheme.palette.primary.black,
    backgroundColor: colorTheme.palette.primary.white,
    padding: '2% 5%',
  },
  logo: {
    whiteSpace: 'nowrap',
  },
  resultPageTheme: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.main,
    padding: '2% 3%',
    position: 'relative',

  },
  hr: {
    width: '1.5px',
    background: colorTheme.palette.secondary.light,
    height: '2.5rem',
  },
  searchCard: {
    padding: '0 1rem',
    background: colorTheme.palette.primary.white,
    borderRadius: '5px',
  },
  searchCard_result: {
    padding: '0 1rem',
    background: colorTheme.palette.primary.white,
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    padding: '0.2rem',
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    minWidth: '0',
    '& span': {
      margin: 'auto',
    },
  },

}));

export default useStyles;
