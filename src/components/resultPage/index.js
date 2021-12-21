/* eslint-disable max-len */
// IMPORT NPM
import {
  useMediaQuery,
  Typography,

} from '@material-ui/core';
import ContentLoader from 'react-content-loader';
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
        {!hasError
      && (
        <>
          <ResultInformation />
          <Filters />
          <ResultJobsOffers />
        </>
      )}
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
      {!hasError
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
                  {!backdrop
                    ? (
                      <Typography
                        className={classes.resultPageDesktop__main__defaultOfferDetail__informations}
                      >{
                jobs.length >= 14
                  ? "Nous avons trouvé des centaines d'offres correspondants à vos critères"
                  : 'Voici quelques offres correspondants à vos critères. \n Essayez de modifier votre recherche pour plus de résultats.'
              }
                      </Typography>
                    )
                    : (
                      <div className={classes.resultPageDesktop__main__defaultOfferDetail__loaderContainer}>
                        <ContentLoader viewBox="0 0 300 70" foregroundColor="#dbdbdb">
                          {/* Only SVG shapes */}
                          <rect y="17" rx="4" ry="4" width="300" height="17" margin="auto" />
                          <rect y="45" rx="3" ry="3" width="300" height="17" />
                        </ContentLoader>
                      </div>
                    )}
                </div>
              )}
            <div />
          </div>
        </main>
      </>
      )}
    </div>
  );
};

export default ResultPage;
