import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  // ************** VERSION MOBILE ****************************
  appStores: {
    width: '92%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    background: colorTheme.palette.secondary.main,
    marginBottom: '4rem',
    borderRadius: '4px',
  },
  appStores__card: {
    width: '100%',
    padding: '1rem',
    color: 'white',

  },
  appStores__card__title: {
    fontWeight: 600,
    width: '100%',
    padding: '0 1rem',
    fontSize: '1.5rem',
    wordSpacing: '-1px',
    margin: 'auto',
    marginBottom: '2rem',
  },
  appStores__card__information: {
    width: '100%',
    margin: 'auto',
    padding: '0 3rem',
    marginBottom: '2rem',
  },
  appStores__card__storesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  appStores__card__storesContainer__svg: {
    width: '200px',
    marginBottom: '1.5rem',
  },
  appStores__animation: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colorTheme.palette.primary.main,
    borderRadius: '0 8px 8px 0',
  },
  appStores__animation__image: {
    width: '100%',
    borderRadius: '0 8px 8px 0',
  },
  // ************** VERSION DESKTOP ****************************
  boxDesktop: {
    width: '100%',
    background: colorTheme.palette.primary.white,
    padding: '4rem 0',
  },
  appStoresDesktop: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'strench',
  },
  appStoresDesktop__card: {
    width: '50%',
    padding: '5rem 2rem',
    borderRadius: '8px 0 0 8px',
    background: colorTheme.palette.secondary.main,
    color: 'white',

  },
  appStoresDesktop__card__title: {
    fontWeight: 600,
    width: '100%',
    padding: '0 3rem',
    fontSize: '1.5rem',
    wordSpacing: '-1px',
    margin: 'auto',
    marginBottom: '2rem',
  },
  appStoresDesktop__card__information: {
    width: '100%',
    margin: 'auto',
    padding: '0 3rem',
    marginBottom: '2rem',
  },
  appStoresDesktop__card__storesContainer: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  appStoresDesktop__card__storesContainer__svg: {
    height: '65px',
  },
  appStoresDesktop__animation: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colorTheme.palette.primary.main,
    borderRadius: '0 8px 8px 0',
  },
  appStoresDesktop__animation__image: {
    width: '100%',
    borderRadius: '0 8px 8px 0',
  },
}));

export default useStyles;
