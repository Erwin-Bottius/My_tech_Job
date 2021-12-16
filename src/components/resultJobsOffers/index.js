// import NPM
import {
  Box, Button, useMediaQuery,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

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
        {jobs.map((element) => (
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
      {jobs.map((element) => (
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
};

export default ResultJobsOffers;
