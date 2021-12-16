import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  // *************** VERSION MOBILE ***************
  headerHomeMobile: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colorTheme.palette.primary.black,
    backgroundColor: colorTheme.palette.primary.white,
    padding: '4% 5%',
  },
  headerMobile: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.main,
    padding: '4% 5%',
  },
  // *************** VERSION DESKTOP ***************
  headerHomeDesktop: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: colorTheme.palette.primary.black,
    backgroundColor: colorTheme.palette.primary.white,
    padding: '2% 5%',
    flex: '0 1 auto',
  },
  headerDesktop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.main,
    padding: '2% 3%',
    position: 'relative',
    flex: '0 1 auto',
  },
  headerDesktop__searchCard: {
    paddingRight: '1rem',
    marginLeft: '2rem',
    background: colorTheme.palette.primary.white,
    borderRadius: '5px',
  },
  headerDesktop__searchCard__form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerDesktop__searchCard__form__searchButton: {
    padding: '0.2rem',
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    minWidth: '0',
    '& span': {
      margin: 'auto',
    },
  },
  headerDesktop__logo__home: {
    whiteSpace: 'nowrap',
    fontFamily: 'Fredoka One, cursive',
    fontSize: '2rem',
    wordSpacing: '-5px',
    color: colorTheme.palette.secondary.main,
    '& span': {
      color: colorTheme.palette.secondary.blue,
    },
  },
  headerDesktop__logo: {
    whiteSpace: 'nowrap',
    fontFamily: 'Fredoka One, cursive',
    fontSize: '2rem',
    wordSpacing: '-5px',
    color: colorTheme.palette.secondary.white,
    '& span': {
      color: colorTheme.palette.secondary.blue,
    },
  },
}));

export default useStyles;
