// import NPM
import {
  Card, CardContent, Typography, Button,
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
          <Card className={classes.card__message}>
            <CardContent>
              <Typography variant="h6" className={classes.resultMessage}>
                Résultats de recherche pour
                <span className={classes.span}>
                  {jobSearched.length > 0 ? ` ${jobSearched.join(' ')} ` : ' jobs les plus populaires '}
                </span>
                dans <span className={classes.span}>{locationSearched || 'France'} </span>
              </Typography>
            </CardContent>
          </Card>
          )}
      {!backdrop && !hasError
            && (
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
            )}
      <div className={classes.section}>
        <ResultPageContainer />
        <div className={classes.card__detail}>
          {getJobOfferByIsSelected(jobs)
            ? <JobDetailDesktop />
            : <p> Hello</p>}
          <div />
        </div>
      </div>

    </div>

  );
};

export default ResultContainerDesktop;
