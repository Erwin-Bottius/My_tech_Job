import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  // *************** VERSION MOBILE ********************
  homeMobile: {
    width: '75%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '35% 0',
    color: colorTheme.palette.primary.transparentText,

  },
  homeMobile__title: {
    fontWeight: '500',
    marginBottom: '2rem',
    fontSize: '1.5rem',
  },
  homeMobile__title__span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
  },
  homeMobile__button: {
    borderRadius: '100px',
    color: colorTheme.palette.primary.main,
    fontSize: '1.2rem',
    marginTop: '1rem',
    background: colorTheme.palette.primary.white,
    textTransform: 'capitalize',
    '&:hover': {
      background: colorTheme.palette.primary.white,
    },
  },
  homeMobile__button__searchIcon: {
    color: colorTheme.palette.primary.pinkColor,
  },
  // *************** VERSION DESKTOP ********************
  homeDesktop: {
    width: '70%',
    minWidth: '950px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: colorTheme.palette.primary.transparentText,
    padding: '3.5% 0',

  },
  homeDesktop__title: {
    fontSize: '2.3rem',
    fontWeight: 700,
    textAlign: 'left',
    marginBottom: '3rem',
  },
  homeDesktop__title__span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 700,
  },
  homeDesktop__searchCard: {
    padding: '0.7rem 2rem 0.7rem 0',
    background: colorTheme.palette.primary.white,
    borderRadius: '4px',
    width: '100%',
  },
  homeDesktop__searchCard__form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeDesktop__searchCard__form__button: {
    padding: '0.6rem 1rem',
    background: colorTheme.palette.primary.pinkColor,
    opacity: 0.80,
    color: colorTheme.palette.primary.white,
    minWidth: '0',
    '& span': {
      margin: 'auto',
    },
  },
  homeDesktop__popularSearches__title: {
    textAlign: 'left',
    marginTop: '3rem',
    marginBottom: '1rem',
    color: colorTheme.palette.primary.white,
  },
  homeDesktop__popularSearches__basesContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
