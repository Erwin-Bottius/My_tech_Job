import {
  Typography,
  useMediaQuery,
  Box,
} from '@material-ui/core';
import appleStore from 'src/assets/images/appstore.svg';
import googlePlayStore from 'src/assets/images/googlePlaystore.svg';
import phone from 'src/assets/images/phone.webp';
import useStyles from './style';

const AppStores = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  // ********************* MOBILE VERSION ***********************
  if (isMobile) {
    return (
      <div>
        hello
      </div>
    );
  }
  // ********************* DESKTOP VERSION ***********************
  return (
    <Box className={classes.box}>
      <div className={classes.appStores}>
        <div className={classes.appStores__card}>
          <Typography variant="h6" className={classes.appStores__card__title}>
            Téléchargez l'appli My Tech Job
          </Typography>
          <Typography variant="body1" className={classes.appStores__card__information}>
            Recherchez parmi des dizaines de milliers d'emplois <br />et trouvez celui qui
            vous convient
          </Typography>
          <div className={classes.appStores__card__storesContainer}>
            <img
              src={appleStore}
              alt="logo apple store"
              className={classes.appStores__card__storesContainer__svg}
            />
            <img
              src={googlePlayStore}
              alt="logo apple store"
              className={classes.appStores__card__storesContainer__svg}
            />
          </div>
        </div>
        <div className={classes.appStores__animation}>
          <img
            src={phone}
            alt="phone animation"
            className={classes.appStores__animation__image}
          />
        </div>
      </div>
    </Box>
  );
};

export default AppStores;
