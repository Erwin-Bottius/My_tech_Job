import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({

  offer__container: {
    position: 'relative',
  },
  offer__subHeader: {
    borderRadius: '0px',
    boxShadow: '1px 4px 3px 1px rgba(222,222,222,0.28)',
    position: 'sticky',
    zIndex: 3,
    top: '0',
    right: '0',
    left: '0',
  },
  offer__subHeader__cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offer__subHeader__avatar: {
    marginRight: '2rem',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
    fontWeight: 600,
    padding: '0.5rem 1.5rem',
    height: 'min-content',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.secondary.main,
    textTransform: 'capitalize',
  },
  offer__card: {
    width: '100%',
    marginBottom: '3rem',
    padding: '1rem 4.2rem',
  },
  offer__card__hr: {
    height: '1px',
    opacity: '0.5',
    border: 'none',
    background: colorTheme.palette.secondary.light,
  },
  offer__card__detailTitle: {
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  offer__card__subtitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  offer__card__description__title: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    fontWeight: '600',
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
