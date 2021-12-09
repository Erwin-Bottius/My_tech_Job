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
    display: 'flex',
    '& input': {
      width: 'auto',
      '&::placeholder': {
        fontSize: '1.2rem',
      },
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
    borderRadius: '4px',
    fontFamily: 'Roboto',
  },
  jobsInput__notice: {
    color: colorTheme.palette.secondary.light,
    width: '100%',
    paddingLeft: '1rem',
    paddingBottom: '0.3rem',
    fontStyle: 'italic',
  },
  listBox__container__mobile: {
    borderRadius: '0px  0 4px 4px',
    marginTop: '0.3rem',
    borderTop: '1px solid #dddddd',
  },

  listBox__container: {
    borderRadius: '0px  0 4px 4px',
    marginTop: '1rem',
    borderTop: '1px solid #dddddd',
  },
  listBox__container__result: {
    borderRadius: '0px  0 4px 4px',
    marginTop: '0.3rem',
    borderTop: '1px solid #dddddd',
  },
  optionLabel: {
    width: '5px',
    height: '0px',
    padding: '0.8rem',
  },
  optionLabel__chip: {
    color: colorTheme.palette.primary.white,
    fontSize: '1rem',
    position: 'absolute',
    top: '35%',
    right: '20%',
    left: '20%',
    backgroundColor: colorTheme.palette.secondary.main,
    borderRadius: '4px',
  },
  optionLabel__chip__desktop: {
    color: colorTheme.palette.primary.white,
    fontSize: '0.9rem',
    position: 'absolute',
    top: '40%',
    right: '30%',
    left: '30%',
    backgroundColor: colorTheme.palette.secondary.main,
    borderRadius: '4px',
  },
  optionLabel__chip__desktop__result: {
    color: colorTheme.palette.primary.white,
    maxWidth: '10rem',
    fontSize: '0.9rem',
    position: 'absolute',
    top: '30%',
    margin: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: colorTheme.palette.secondary.main,
    borderRadius: '4px',
  },
  autocomplete__jobInput: {
    width: '100%',
  },
  jobsInput__container_desktop_result: {
    display: 'flex',
    width: '100%',
    '& input': {
      width: 'auto',
      '&::placeholder': {
        fontSize: '1rem',
      },
    },
  },
  jobsInput__ul_desktop_result: {
    display: 'flex',
    flexBasis: '50rem',
    flexWrap: 'wrap',
  },
  jobsInput__ul_desktop: {
    display: 'flex',
  },
}));

export default useStyles;
