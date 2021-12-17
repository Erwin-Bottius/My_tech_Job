import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  // ***************** VERSION MOBILE *******************
  footer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colorTheme.palette.primary.main,
    color: 'white',
    padding: '3rem 0',
  },
  footer__logo: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontFamily: 'Fredoka One, cursive',
    fontSize: '2rem',
    wordSpacing: '-5px',
    marginBottom: '2rem',
    color: colorTheme.palette.secondary.white,
    '& span': {
      color: colorTheme.palette.secondary.blue,
    },
  },
  footer__socialMedia: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  footer__socialMedia__link: {
    display: 'block',
    padding: '0 0.5rem',
    '& svg path': {
      transition: 'fill ease 300ms',
      fill: 'white',
    },
    '&:hover path': {
      fill: colorTheme.palette.secondary.blue,
    },
  },
  footer__copyright: {
    textAlign: 'center',
  },

  // ***************** VERSION DESKTOP *******************
  footerDesktop: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colorTheme.palette.primary.main,
    color: 'white',
    padding: '3rem 0',
  },
  footerDesktop__logo: {
    textAlign: 'center',
    flexGrow: 1,
    whiteSpace: 'nowrap',
    fontFamily: 'Fredoka One, cursive',
    fontSize: '2rem',
    wordSpacing: '-5px',
    color: colorTheme.palette.secondary.white,
    '& span': {
      color: colorTheme.palette.secondary.blue,
    },
  },
  footerDesktop__socialMedia: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  footerDesktop__socialMedia__link: {
    display: 'block',
    marginLeft: '2rem',
    '& svg path': {
      transition: 'fill ease 300ms',
      fill: 'white',
    },
    '&:hover path': {
      fill: colorTheme.palette.secondary.blue,
    },
  },
  footerDesktop__copyright: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default useStyles;
