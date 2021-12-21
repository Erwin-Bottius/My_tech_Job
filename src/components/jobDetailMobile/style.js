import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  offer__container: {
    width: '100%',
  },
  offer__subHeader: {
    width: '100%',
    borderRadius: '0px',
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
  company: {
    color: colorTheme.palette.secondary.main,
    fontWeight: 500,
  },
  offer__card: {
    width: '100%',
    padding: '1rem 2rem',
    background: 'white',
    boxShadow: '1px 4px 3px 5px rgba(230,230,233, 1)',
  },
  offer__card__hr: {
    height: '0.1rem',
    border: 'none',
    borderTop: '1px solid #e5e5e5',
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
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    height: '5rem',
    bottom: '0',
    padding: '0 1rem;',
    borderRadius: '0px',
  },
  offer__footer__cardContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Roboto',
  },
  offer__card__description: {
    marginBottom: '2.5rem',
  },
  offer__back__link: {
    width: '10rem',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: colorTheme.palette.primary.pinkColor,
    whiteSpace: 'nowrap',
    '& span': {
      fontSize: '1.7rem',
      marginRight: '0.4rem',
    },
  },
  offer__button: {
    background: colorTheme.palette.secondary.main,
    color: colorTheme.palette.primary.white,
    fontWeight: 'bold',
  },
}));

export default useStyles;
