// IMPORT NPM
import {
  Backdrop,
  CircularProgress,
  useMediaQuery,
  Typography,

} from '@material-ui/core';
import { useSelector } from 'react-redux';

// IMPORTS FICHIERS
import ResultInformation from 'src/components/resultInformation';
import Filters from 'src/components/filters';
import Error from 'src/components/error';
import ResultJobsOffers from 'src/components/resultJobsOffers';
import JobDetailDesktop from 'src/components/jobDetailDesktop';
import getJobOfferByIsSelected from 'src/store/selectors/getJobOfferByIsSelected';
import useStyles from './style';

const ResultPage = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const backdrop = useSelector((state) => state.search.backdropOpen);
  const hasError = useSelector((state) => state.search.hasError);
  const jobs = useSelector((state) => state.search.jobs);
  const jobOffer = getJobOfferByIsSelected(jobs);

  const classes = useStyles();
  // *************** VERSION MOBILE ***********************************************
  if (isMobile) {
    return (
      <div className={hasError ? classes.errorContainer : classes.resultPageMobile}>
        {/* Si l'animation backdrop est en cours (donc que la requete a l'api n'est pas terminée)
      On affiche pas la div les information de résultats
      // Et si il ya eu une erreur dans la requete
      on affiche le composant Error  */}
        {hasError && <Error />}
        {!backdrop && !hasError
      && (
        <>
          <ResultInformation />
          <Filters />
          <ResultJobsOffers />
        </>
      )}
        {/* ici nous avons Le backfrop, c'est notre loader lorsque nous avons pas
        encore recu la réponse a notre requete */}
        <Backdrop open={backdrop} className={classes.backdrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  // *************** VERSION DESKTOP *******************************
  return (
    <div className={hasError ? classes.errorContainer : classes.resultPageDesktop}>
      {/* Si l'animation backdrop est en cours (donc que la requete a l'api n'est pas terminée)
          On affiche pas la card de message // Et si il ya eu une erreur dans la requete
          on affiche le composant Error  */}
      {hasError && <Error />}
      {!backdrop && !hasError
      && (
      <>
        <ResultInformation />
        <Filters />
        <main className={classes.resultPageDesktop__main}>
          <ResultJobsOffers />
          <div className={classes.resultPageDesktop__main__offerDetail}>
            {/* Ici nous vérifions si l'utilisateur a clické sur une offre,
            si oui, nous affichosn cette offre en détail, sinon, nous affichos
            un message par defaut  */}
            {jobOffer
              ? (
                <JobDetailDesktop
                  jobOfferObject={jobOffer}
                />
              )
              : (
                <div className={classes.resultPageDesktop__main__defaultOfferDetail}>
                  <div className={classes.resultPageDesktop__main__defaultOfferDetail__avatar}>
                    My Tech Job
                  </div>
                  <Typography
                    className={classes.resultPageDesktop__main__defaultOfferDetail__informations}
                  >{
                jobs.length >= 14
                  ? "Nous avons trouvé des centaines d'offres correspondants à vos critères"
                  : 'Voici quelques offres correspondants à vos critères. \n Essayez de modifier votre recherche pour plus de résultats.'
              }
                  </Typography>
                </div>
              )}
            <div />
          </div>
        </main>
      </>
      )}
      <Backdrop open={backdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ResultPage;
