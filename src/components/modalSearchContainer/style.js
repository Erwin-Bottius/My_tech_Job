import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: colorTheme.palette.primary.transparentText,
    paddingTop: '8rem',
    padding: '5% 10%',
  },
  searchCard: {
    width: '100%',
    marginTop: '1rem',
    background: colorTheme.palette.primary.white,
    paddingBottom: '1rem',
    borderRadius: '4px',
  },
  searchModalInput: {
    padding: '1rem 1rem',
    width: '100%',
  },
  cross: {
    color: colorTheme.palette.primary.white,
    fontSize: '2rem',
    position: 'absolute',
    top: '2%',
    right: '5%',
  },
  span: {
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
  },
  searchButton: {
    background: colorTheme.palette.primary.pinkColor,
    color: colorTheme.palette.primary.white,
    fontWeight: 'bolder',
    width: '80%',
    display: 'block',
    margin: 'auto',
    marginTop: '1rem',
  },
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
