// import NPM
import {
  Typography, Button, Backdrop, CircularProgress,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

// Import Fichiers
import ResultPageContainer from 'src/components/resultPageContainer';
import Error from 'src/components/error';
import filterIcon from 'src/assets/images/edit4.png';
import JobDetailDesktop from 'src/components/jobDetailDesktop';
import getJobOfferByIsSelected from 'src/store/selectors/getJobOfferByIsSelected';
import useStyles from './style';

const ResultContainerDesktop = () => {
  const jobs = useSelector((state) => state.search.jobs);
  const backdrop = useSelector((state) => state.search.backdropOpen);
  const hasError = useSelector((state) => state.search.hasError);
  const locationSearched = useSelector((state) => state.search.locationSearched);
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {hasError && <Error />}
      {!backdrop && (hasError === false)
          && (
            <>
              <div className={classes.card__message__container}>
                <div className={classes.card__message}>
                  <Typography variant="h6" className={classes.resultMessage}>
                    Résultats de recherche pour
                    <span className={classes.span}>
                      {jobSearched.length > 0 ? ` ${jobSearched.join(' ')} ` : ' jobs les plus populaires '}
                    </span>
                    dans <span className={classes.span}>{locationSearched || 'France'} </span>
                  </Typography>
                </div>
              </div>
              <div className={classes.filtersContainer}>
                <Typography variant="body1">
                  Des centaines d'offres trouvées
                </Typography>
                <Button
                  className={classes.filtersButton}
                  variant="contained"
                  size="medium"
                  onClick={() => {
                  }}
                >
                  <img src={filterIcon} alt="filter icon" className={classes.filtersButton__img} />
                  Filtres
                </Button>
              </div>
              <div className={classes.section}>
                <ResultPageContainer />
                <div className={classes.card__detail}>
                  {getJobOfferByIsSelected(jobs)
                    ? <JobDetailDesktop />
                    : (
                      <div className={classes.informations__container}>
                        <div className={classes.avatar}>My Tech Job</div>
                        <Typography className={classes.informations}>{
                          jobs.length >= 14
                            ? "Nous avons trouvé des centaines d'offres correspondants à vos critères"
                            : 'Voici quelques offres correspondants à vos critères. \n Essayez de modifier votre recherche pour plus de résultats.'
                        }
                        </Typography>
                      </div>
                    )}
                  <div />
                </div>
              </div>
            </>
          )}
      <Backdrop open={backdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>

  );
};

export default ResultContainerDesktop;
