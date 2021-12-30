import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  offer: {
    width: '90%',
    marginTop: '1rem',
    padding: '2% 5%',
    height: '15rem',
    borderRadius: '6px',
    background: '#fff',
    margin: 'auto',
    boxShadow: '0px 3px 8px 1px rgba(110,110,110,0.15)',
    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
  loadMore: {
    fontWeight: 'bold',
    display: 'block',
    margin: '2rem auto',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  // ****************** VERSION DESKTOP *************************
  jobsOffersDesktop: {
    overflowY: 'auto',
    paddingLeft: '1rem',
    width: '37%',
  },
  offerDesktop: {
    borderRadius: '8px',
    height: '15rem',
    marginTop: '1rem',
    marginRight: '1rem',
    background: '#fff',
    margin: 'auto',
    boxShadow: '0px 3px 8px 1px rgba(110,110,110,0.10)',
    cursor: 'pointer',
    border: '2px solid transparent',
    '&:first-child': {
      marginTop: '0',
    },
    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
}));

export default useStyles;
