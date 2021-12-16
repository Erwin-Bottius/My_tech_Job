// import NPM
import {
  useMediaQuery,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

// Import Fichiers
import useStyles from './style';

const ResultInformation = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const locationSearched = useSelector((state) => state.search.locationSearched);
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const classes = useStyles();

  if (isMobile) {
    return (
      <div className={classes.informationMobile}>
        <Typography variant="h6" className={classes.informationMobile__title}>
          Résultats de recherche pour
          <span className={classes.informationMobile__title__span}>
            {jobSearched.length > 0 ? ` ${jobSearched.join(' ')} ` : ' jobs les plus populaires '}
          </span>
          dans <span className={classes.informationMobile__title__span}>{locationSearched || 'France'} </span>
        </Typography>
      </div>
    );
  }
  return (
    <div className={classes.informationDesktop}>
      <Typography variant="h6" className={classes.informationDesktop__title}>
        Résultats de recherche pour
        <span className={classes.informationDesktop__title__span}>
          {jobSearched.length > 0 ? ` ${jobSearched.join(' ')} ` : ' jobs les plus populaires '}
        </span>
        dans <span className={classes.informationDesktop__title}>{locationSearched || 'France'} </span>
      </Typography>
    </div>
  );
};

export default ResultInformation;
