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
  subHeader: {
    display: 'flex',
    width: 'calc(63% - 2.5rem)',
    minWidth: '1000px',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem 0',
    flex: '0 1 auto',
  },
  subHeader__information: {
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  filtersButtons__container: {
    display: 'flex',
  },
  button__container: {
    position: 'relative',
    marginLeft: '3rem',
  },
  button: {
    display: 'flex',
    textTransform: 'capitalize',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '0.4rem 1rem',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  filters__popup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25rem',
    height: '25rem',
    zIndex: 5,
    borderRadius: '5px',
    backgroundColor: 'white',
    position: 'absolute',
    left: '-7.5rem',
    bottom: '-25.8rem',
    paddingTop: '2rem',
    boxShadow: '0px 3px 5px 1px rgba(110,110,110,0.18)',
    '&:before': {
      position: 'absolute',
      content: '""',
      transform: 'rotate(45deg)',
      boxShadow: '0px -5px 15px -9px black',
      borderRadius: '0 0 20px  0',
      width: '20px',
      height: '20px',
      background: '#ffffff',
      top: '-10px',
      left: 'calc(50% - 10px)',
      right: 0,
    },
  },
  contractType__form: {
    '& label': {
      marginBottom: '1rem',
    },
  },
  contractType__title: {
    marginBottom: '2.5rem',
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  modalFooter: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0 0 5px 5px',
    padding: '0.8rem 2rem',
    background: colorTheme.palette.primary.light,
  },
  cancel: {
    color: colorTheme.palette.primary.pinkColor,
    cursor: 'pointer',
  },
  applyButton: {
    color: colorTheme.palette.primary.pinkColor,
    border: `1px solid ${colorTheme.palette.primary.pinkColor}`,
    transition: 'all 200ms ease-out',
    '&:hover': {
      color: colorTheme.palette.primary.white,
      backgroundColor: colorTheme.palette.primary.pinkColor,
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '65%',
    minWidth: '1000px',
    minHeight: '35rem',
    maxHeight: '98vh',
    marginBottom: '1.5rem',
  },
  card__detail: {
    width: '63%',
    overflowY: 'auto',
    background: 'white',
    marginLeft: '1rem',
    boxShadow: '0px 3px 5px 1px rgba(110,110,110,0.15)',
  },
  informations__container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15vh',
    justifyContent: 'flex-start',
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