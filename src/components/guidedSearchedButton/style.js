import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  guidedSearchedButton: {
    color: colorTheme.palette.primary.white,
    background: 'rgba(255, 255, 255, 0.12)',
    width: 'fit-content',
    textTransform: 'capitalize',
    marginTop: '0.5rem',
    whiteSpace: 'nowrap',
  },
  guidedSearchedButton_desktop: {
    color: colorTheme.palette.primary.white,
    background: 'rgba(255, 255, 255, 0.12)',
    width: 'max-content',
    textTransform: 'capitalize',
    marginTop: '0.5rem',
    marginRight: '1rem',
    whiteSpace: 'nowrap',
    fontWeight: 'lighter',
    border: '2px solid transparent',
    '&:hover': {
      border: '2px solid rgba(255, 255, 255, 0.12)',
    },
  },
  base__desktop: {
    wordSpacing: '0.01%',
    marginRight: '0.8rem',
    fontWeight: 500,
  },
  searchIcon: {
    color: colorTheme.palette.secondary.blue,
  },
}));

export default useStyles;
