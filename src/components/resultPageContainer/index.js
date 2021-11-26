// IMPORT NPM
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTS FICHIERS
import ResultPageCard from 'src/components/resultPageCard';
import filterIcon from 'src/assets/images/edit4.png';
import Error from 'src/components/error';
import { GET_JOBS, TOGGLE_PRINT_FILTERS_MODAL } from 'src/store/actions';
import getDate from 'src/store/functions/getDate';
import useStyles from './style';

const ResultPageContainer = () => {
  const locationSearched = useSelector((state) => state.search.locationSearched);
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const jobs = useSelector((state) => state.search.jobs);
  const backdrop = useSelector((state) => state.search.backdropOpen);
  const hasError = useSelector((state) => state.search.hasError);
  const statusCode = useSelector((state) => state.search.statusCode);
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDate = Date.now();

  const handleOnclickLoadMore = () => {
    dispatch({ type: GET_JOBS });
  };

  return (
    <div className={hasError ? classes.errorContainer : classes.root}>
      {/* Si l'animation backdrop est en cours (donc que la requete a l'api n'est pas terminée)
      On affiche pas la card de message // Et si il ya eu une erreur dans la requete
      on affiche le composant Error  */}
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
              dispatch({ type: TOGGLE_PRINT_FILTERS_MODAL });
            }}
          >
            <img src={filterIcon} alt="filter icon" className={classes.filtersButton__img} />
            Filtres
          </Button>
        </div>
        )}
      <Box>
        { /* Ici nous faisons un map sur les offres d'emplois récupérées par notre requete
         a l'api afin de creer un composant resulTpageCard pour chaqque offre d'emploi */}
        {jobs.map((element) => (
          <ResultPageCard
            key={element.id}
            logo={element.origineOffre.partenaires ? element.origineOffre.partenaires[0].logo : 'n/c'}
            job={element.intitule}
            company={element.entreprise.nom}
            location={element.lieuTravail.libelle}
            id={element.id}
            date={getDate(element.dateActualisation, currentDate)}
            avatarBgColor={element.avatarBgColor}
          />
        ))}
        {!backdrop && !hasError && Number(statusCode) === 206
        && (
        <Button
          onClick={handleOnclickLoadMore}
          className={classes.loadMore}
          variant="contained"
          size="medium"
        >
          Charger Plus
        </Button>
        )}
      </Box>
      <Backdrop open={backdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ResultPageContainer;
