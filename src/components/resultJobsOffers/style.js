import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  loadMore: {
    fontWeight: 'bold',
    display: 'block',
    margin: '2rem auto',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },
  // ****************** VERSION DESKTOP *************************
  jobsOffersDesktop: {
    overflowY: 'auto',
    width: '37%',
  },
}));

export default useStyles;
