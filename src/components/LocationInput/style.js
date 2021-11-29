import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

  searchModalInput: {
    padding: '1rem 1rem',
    width: '100%',
  },
  autoComplete_desktop: {
    width: '55%',
  },
  searchModalInput_desktop: {
    width: '100%',
    textAlign: 'left',
    padding: '0.5rem 0',
    paddingLeft: '2rem',
    '& input::placeholder': {
      fontSize: '1.3rem',
    },
  },
  optionLabelIcon: {
    marginRight: '0.5rem',
  },
  inputbase_container: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  autoComplete_desktop_result: {
    textAlign: 'left',
    padding: '0.3rem 0',
    '& input::placeholder': {
      fontSize: '1rem',
    },
  },
  searchModalInput_desktop_result: {
    textAlign: 'left',
    padding: '0.2rem 2rem 0.2rem 1rem',
    '& input': {
      width: 'auto',
    },
  },
}));

export default useStyles;
