import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  filtersPopup: {
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
  filtersPopup__form: {
    '& label': {
      marginBottom: '1rem',
    },
  },
  filtersPopup__form__title: {
    marginBottom: '2.5rem',
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  filtersPopup__footer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0 0 5px 5px',
    padding: '0.8rem 2rem',
    background: colorTheme.palette.primary.light,
  },
  filtersPopup__footer__cancel: {
    color: colorTheme.palette.primary.pinkColor,
    cursor: 'pointer',
  },
  filtersPopup__footer__applyButton: {
    color: colorTheme.palette.primary.pinkColor,
    border: `1px solid ${colorTheme.palette.primary.pinkColor}`,
    transition: 'all 200ms ease-out',
    '&:hover': {
      color: colorTheme.palette.primary.white,
      backgroundColor: colorTheme.palette.primary.pinkColor,
    },
  },
}));

export default useStyles;
