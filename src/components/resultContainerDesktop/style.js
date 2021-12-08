import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    background: '#f4f4f4',
    display: 'flex',
    flexFlow: 'column',
  },
  card__message__container: {
    width: '100%',
    backgroundColor: colorTheme.palette.primary.white,
    boxShadow: '0px 3px 10px 2px #ededed',
    padding: '3rem 0',
    flex: '0 1 auto',
  },
  card__message: {
    width: 'calc(63% - 2.5rem)',
    minWidth: '1000px',
    margin: 'auto',
  },
  resultMessage: {
    fontWeight: '900',
  },
  span: {
    color: colorTheme.palette.secondary.main,
  },
  filtersContainer: {
    display: 'flex',
    width: 'calc(63% - 2.5rem)',
    minWidth: '1000px',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    flex: '0 1 auto',
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
    width: '62%',
    minWidth: '1000px',
    height: '47rem',
  },
  card__detail: {
    width: '61%',
    overflowY: 'auto',
    background: 'white',
    marginLeft: '1rem',
    boxShadow: '0px 3px 5px 1px rgba(110,110,110,0.15)',
  },
  informations__container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    width: '6rem',
    height: '6rem',
    borderRadius: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorTheme.palette.secondary.main,
    color: 'white',
    fontWeight: '600',
    margin: '0 auto 4rem auto',

  },
  informations: {
    fontSize: '1.2rem',
    padding: '0 15%',
    fontWeight: '700',
    textAlign: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
