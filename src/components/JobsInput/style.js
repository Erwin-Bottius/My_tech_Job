import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  jobsInput__container: {
    width: '100%',
    padding: '1.5rem 0 1rem 0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  jobsInput__container_desktop: {
    width: '40%',
    textAlign: 'left',
    '& input::placeholder': {
      fontSize: '1.3rem',
    },
  },
  jobsInput: {
    padding: '0 1rem',
    width: '100%',
  },
  jobsInput__ul: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },
  jobsInput__chip: {
    color: colorTheme.palette.primary.white,
    marginLeft: '5px',
    marginBottom: '5px',
    backgroundColor: colorTheme.palette.secondary.main,
  },
  jobsInput__notice: {
    color: colorTheme.palette.secondary.light,
    width: '100%',
    paddingLeft: '1rem',
    paddingBottom: '0.3rem',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
  },
  jobsInput__container_desktop_result: {
    display: 'flex',
    '& input': {
      width: 'auto',
      '& ::placeholder': {
        fontSize: '1rem',
      },
    },
  },
  jobsInput__ul_desktop_result: {
    display: 'flex',
    flexBasis: '50rem',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
