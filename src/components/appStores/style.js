import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  box: {
    width: '100%',
    background: colorTheme.palette.primary.white,
    padding: '4rem 0',
  },
  appStores: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'strench',
  },
  appStores__card: {
    width: '50%',
    padding: '5rem',
    borderRadius: '8px 0 0 8px',
    background: colorTheme.palette.secondary.main,
    color: 'white',

  },
  appStores__card__title: {
    fontWeight: 600,
    width: '100%',
    fontSize: '1.5rem',
    wordSpacing: '-1px',
    margin: 'auto',
    marginBottom: '2rem',
  },
  appStores__card__information: {
    width: '100%',
    margin: 'auto',
    marginBottom: '2rem',
  },
  appStores__card__storesContainer: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appStores__card__storesContainer__svg: {
    height: '70px',
  },
  appStores__animation: {
    width: '50%',
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
}));

export default useStyles;
