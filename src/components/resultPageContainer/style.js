import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  errorContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  card__message: {
    borderRadius: '0px',
    boxShadow: '1px 4px 3px 1px rgba(222,222,222,0.28)',
  },
  resultMessage: {
    fontWeight: 'bold',
  },
  span: {
    color: colorTheme.palette.secondary.main,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  loadMore: {
    fontWeight: 'bold',
    display: 'block',
    margin: '2rem auto',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  filtersContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
  },
  filtersButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  // DESKTOP ****************
  container__desktop: {
    width: '37%',
    height: '100%',
    overflowY: 'auto',
    paddingLeft: '0.5rem',
  },

}));

export default useStyles;
