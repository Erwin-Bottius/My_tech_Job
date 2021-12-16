import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({

  // ************************  Mobile ****************
  resultPageMobile: {
    width: '100%',
  },
  errorContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  // ************************  DESKTOP ****************
  resultPageDesktop: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    paddingLeft: '0.5rem',
  },
  resultPageDesktop__main: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '65%',
    minWidth: '1000px',
    height: '42rem',
    maxHeight: '98vh',
    marginBottom: '1.5rem',
  },
  resultPageDesktop__main__offerDetail: {
    width: '63%',
    overflowY: 'auto',
    background: 'white',
    marginLeft: '1rem',
    boxShadow: '0px 3px 5px 1px rgba(110,110,110,0.15)',
  },
  resultPageDesktop__main__defaultOfferDetail: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15vh',
    justifyContent: 'flex-start',
  },
  resultPageDesktop__main__defaultOfferDetail__avatar: {
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
  resultPageDesktop__main__defaultOfferDetail__informations: {
    fontSize: '1.2rem',
    padding: '0 15%',
    fontWeight: '700',
    textAlign: 'center',
  },

}));

export default useStyles;
