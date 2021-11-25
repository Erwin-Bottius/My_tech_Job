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
  searchIcon: {
    color: colorTheme.palette.secondary.blue,
  },
}));

export default useStyles;
