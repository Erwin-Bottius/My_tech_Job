// import NPM
import {
  Box, Button, useMediaQuery,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';

// import Fichiers
import { GET_JOBS } from 'src/store/actions';
import JobOfferCard from 'src/components/jobOfferCard';
import getDate from 'src/store/functions/getDate';
import useStyles from './style';

const ResultJobsOffers = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.search.jobs);
  const backdrop = useSelector((state) => state.search.backdropOpen);
  const hasError = useSelector((state) => state.search.hasError);
  const statusCode = useSelector((state) => state.search.statusCode);
  const currentDate = Date.now();

  const handleOnclickLoadMore = () => {
    dispatch({ type: GET_JOBS });
  };
  if (isMobile) {
  // ****************** VERSION MOBILE *************************
    return (
      <Box>
        { /* Ici nous faisons un map sur les offres d'emplois récupérées par notre requete
     a l'api afin de creer un composant resulTpageCard pour chaqque offre d'emploi */}
        {!backdrop
          ? jobs.map((element) => (
            <JobOfferCard
              key={element.id}
              logo={element.origineOffre.partenaires ? element.origineOffre.partenaires[0].logo : 'n/c'}
              job={element.intitule}
              company={element.entreprise.nom}
              location={element.lieuTravail.libelle}
              id={element.id}
              date={getDate(element.dateActualisation, currentDate)}
              avatarBgColor={element.avatarBgColor}
              isSelected={element.isSelected}
            />
          ))
          : [...Array(6)].map(() => (
            <div className={classes.offer}>
              <ContentLoader foregroundColor="#dbdbdb">
                {/* Only SVG shapes */}
                <rect x="10%" y="5%" rx="70" ry="70" width="70" height="70" />
                <rect x="10%" y="42%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="55%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="68%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="85%" rx="4" ry="4" width="25%" height="13" />
              </ContentLoader>
            </div>
          ))}
        {!backdrop && !hasError && Number(statusCode) === 206
    && (
    <Button
      onClick={handleOnclickLoadMore}
      className={`${classes.loadMore} pinkButton`}
      variant="contained"
      size="medium"
    >
      Charger Plus
    </Button>
    )}
      </Box>
    );
  }
  // ****************** VERSION DESKTOP *************************
  return (
    <Box className={classes.jobsOffersDesktop}>
      { /* Ici nous faisons un map sur les offres d'emplois récupérées par notre requete
   a l'api afin de creer un composant resulTpageCard pour chaqque offre d'emploi */}
      { !backdrop
        ? jobs.map((element) => (
          <JobOfferCard
            key={element.id}
            logo={element.origineOffre.partenaires ? element.origineOffre.partenaires[0].logo : 'n/c'}
            job={element.intitule}
            company={element.entreprise.nom}
            location={element.lieuTravail.libelle}
            id={element.id}
            date={getDate(element.dateActualisation, currentDate)}
            avatarBgColor={element.avatarBgColor}
            isSelected={element.isSelected}
          />
        ))
        : (
          [...Array(6)].map(() => (
            <div className={classes.offerDesktop}>
              <ContentLoader foregroundColor="#dbdbdb">
                {/* Only SVG shapes */}
                <rect x="10%" y="5%" rx="70" ry="70" width="70" height="70" />
                <rect x="10%" y="42%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="55%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="68%" rx="4" ry="4" width="80%" height="13" />
                <rect x="10%" y="85%" rx="4" ry="4" width="25%" height="13" />
              </ContentLoader>
            </div>

          ))
        )}
      {!backdrop && !hasError && Number(statusCode) === 206
  && (
  <Button
    onClick={handleOnclickLoadMore}
    className={`${classes.loadMore} pinkButton`}
    variant="contained"
    size="medium"
  >
    Charger Plus
  </Button>
  )}
    </Box>
  );
};

export default ResultJobsOffers;
