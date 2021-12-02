import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
  filtersContainer: {
    display: 'flex',
    width: '75%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 1rem',
  },
  filtersButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    padding: '0.6rem 1rem',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  filtersButton__img: {
    marginRight: '0.6rem',
    height: '18px',
    width: '15px',
    color: 'white',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '75%',
  },
  card__detail: {
    width: '60%',
    height: '45rem',
    overflowY: 'auto',
    background: 'white',
  },
}));

export default useStyles;
