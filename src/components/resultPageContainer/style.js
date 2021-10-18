import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  errorContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  resultMessage: {
    fontWeight: 'bold',
  },
  span: {
    color: colorTheme.palette.secondary.main,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  loadMore: {
    fontWeight: 'bold',
    display: 'block',
    margin: '2rem auto',
    color: colorTheme.palette.primary.white,
    backgroundColor: colorTheme.palette.primary.pinkColor,
  },

}));

export default useStyles;
