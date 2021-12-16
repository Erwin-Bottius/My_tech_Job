import { makeStyles } from '@material-ui/core';
import colorTheme from 'src/styles/theme';

const useStyles = makeStyles(() => ({
  //  ***************** VERSION MOBILE ***********************
  informationMobile: {
    borderRadius: '0px',
    boxShadow: '1px 4px 3px 1px rgba(222,222,222,0.28)',
    padding: ' 2rem 2rem',
  },
  informationMobile__title: {
    fontWeight: 'bold',
  },
  informationMobile__title__span: {
    color: colorTheme.palette.secondary.main,
  },
  // ***************** VERSION DESKTOP **********************
  informationDesktop: {
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 10px 2px #ededed',
    padding: '3rem 0',
    flex: '0 1 auto',
  },
  informationDesktop__title: {
    width: 'calc(65% - 2.5rem)',
    minWidth: '1000px',
    margin: 'auto',
    fontWeight: '900',
  },
  informationDesktop__title__span: {
    color: colorTheme.palette.secondary.main,
  },
}));

export default useStyles;
