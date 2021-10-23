import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  offer__container: {
    width: '100%',
  },
  offer__subHeader: {
    width: '100%',
    borderRadius: '0px',
    boxShadow: '1px 4px 3px 1px rgba(222,222,222,0.28)',
  },
  offer__subHeader__cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  offer__subHeader__avatar: {
    marginRight: '2rem',
    width: theme.spacing(10),
    height: theme.spacing(10),

  },
  offer__card: {
    width: '100%',
    marginBottom: '3rem',
    padding: '1rem 2rem',
  },
  offer__card__hr: {
    height: '0.1rem',
    border: 'none',
    background: colorTheme.palette.secondary.light,
  },
  offer__card__detailTitle: {
    marginBottom: '1.5rem',
  },
  offer__card__subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    fontSize: '0.8rem',
    fontWeight: 'bolder',
  },
  offer__card__description__title: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },
  offer__footer: {
    width: '100%',
    position: 'fixed',
    maxHeight: '4rem',
    bottom: '0',
    padding: '0.3rem 1.5rem',
    borderRadius: '0px',
  },
  offer__footer__cardContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  offer__back__link: {
    width: '10rem',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: colorTheme.palette.primary.pinkColor,
  },
  offer__button: {
    background: colorTheme.palette.secondary.main,
    color: colorTheme.palette.primary.white,
    display: 'inline-block',
  },
}));

export default useStyles;
