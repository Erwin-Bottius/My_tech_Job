import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  // *********************** VERSION MOBILE ************************
  filtersMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    marginTop: '0.4rem',
  },
  filtersMobile__information: {
    color: 'rgb(115, 115, 115)',
    fontWeight: 500,
    fontSize: '0.8rem',
  },
  filtersMobile__button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    textTransform: 'capitalize',
    fontWeight: 600,
    padding: '0.6rem 0.7rem',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  filtersMobile__button__image: {
    marginRight: '0.6rem',
    height: '18px',
    width: '15px',
    color: 'white',
  },
  // *********************** VERSION MOBILE ************************

  filtersDesktop: {
    display: 'flex',
    width: 'calc(65% - 2.5rem)',
    minWidth: '1000px',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    flex: '0 1 auto',
  },
  filtersDesktop__information: {
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  filtersDesktop__buttonsContainer: {
    display: 'flex',
  },
  button__container: {
    position: 'relative',
    marginLeft: '3rem',
  },
  filtersDesktop__buttonsContainer__button: {
    display: 'flex',
    textTransform: 'capitalize',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '0.4rem 1rem',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
}));

export default useStyles;
