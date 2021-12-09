import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 6,
    minHeight: '-webkit-fill-available',
    background: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '2rem 10%',
  },
  hidden: {
    display: 'none',
  },
  cross: {
    color: colorTheme.palette.primary.black,
    fontSize: '2rem',
    position: 'absolute',
    top: '2rem',
    right: '6%',
  },
  title: {
    color: 'black',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  hr: {
    width: '100%',
    height: '1px',
    marginTop: '1.2rem',
    border: `1px solid ${colorTheme.palette.secondary.light}`,

  },
  contractType__from: {
    marginTop: '3rem',
  },
  contractType__title: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '3rem 1rem',
    background: colorTheme.palette.primary.light,
  },
  button: {
    fontWeight: 600,
    whiteSpace: 'nowrap',
    padding: '0.5rem 1rem',
    marginLeft: '2rem',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.secondary.main,
  },
  cancel: {
    color: colorTheme.palette.primary.pinkColor,
  },

}));

export default useStyles;
