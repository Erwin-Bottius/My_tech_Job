import { makeStyles } from '@material-ui/core';
// import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({

  searchModalInput: {
    padding: '1rem 1rem',
    width: '100%',
    '& input::placeholder': {
      fontSize: '1.1rem',
      color: '#848484',
      opacity: 1,
    },
  },
  autoComplete_desktop: {
    width: '55%',
  },
  searchModalInput_desktop: {
    width: '100%',
    textAlign: 'left',
    padding: '0.5rem 0',
    paddingLeft: '2rem',
    '& input': {
      fontWeight: 500,
      fontSize: '1.2rem',
      '&::placeholder': {
        fontSize: '1.2rem',
        color: '#848484',
        fontWeight: 400,
        opacity: 1,
      },
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
    minWidth: '22rem',
    padding: '0.3rem 0',
    '& input::placeholder': {
      fontSize: '1rem',
    },
  },
  autoComplete__desktop__locationInput: {
    width: '100%',
    textAlign: 'left',
    padding: '0.3rem 0',
  },
  searchModalInput_desktop_result: {
    textAlign: 'left',
    width: '100%',
    padding: '0.2rem 2rem 0.2rem 1rem',
    '& input': {
      width: 'auto',
    },
  },
  listBox__container__mobile: {
    borderRadius: '0px  0 4px 4px',
    borderTop: '1px solid #dddddd',
  },
  listBox__container: {
    borderRadius: '0px  0 4px 4px',
    marginTop: '0.7rem',
    borderTop: '1px solid #dddddd',
  },
  listBox__container__result: {
    borderRadius: '0px  0 4px 4px',
    marginTop: '0.3rem',
    borderTop: '1px solid #dddddd',
  },
}));

export default useStyles;
