import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  jobsInput__container: {
    width: '100%',
    padding: '1.5rem 0 1rem 0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  jobsInput: {
    padding: '0 1rem',
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
}));

export default useStyles;
