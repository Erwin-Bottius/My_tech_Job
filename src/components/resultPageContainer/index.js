// IMPORT NPM
import {
  Box,
  Card,
  CardContent,
  Typography,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

// IMPORTS FICHIERS
import ResultPageCard from 'src/components/resultPageCard';
import useStyles from './style';

const ResultPageContainer = () => {
  const locationSearched = useSelector((state) => state.locationSearched);
  const jobSearched = useSelector((state) => state.jobSearched);
  const jobs = useSelector((state) => state.jobs);
  const backdrop = useSelector((state) => state.backdropOpen);
  const classes = useStyles();

  // Fonction qui transforme la date d'actualisation de l'offre d'emploi au bon format
  const getDate = (actualisationDate) => {
    const date = new Date(actualisationDate);
    return date.toLocaleDateString('fr');
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h6" className={classes.resultMessage}>
            Résultats de recherche pour <span className={classes.span}>{jobSearched} </span>
            dans <span className={classes.span}>{locationSearched} </span>
          </Typography>
        </CardContent>
      </Card>
      <Box>
        {jobs.map((element) => (
          <ResultPageCard
            key={element.id}
            logo={element.origineOffre.partenaires ? element.origineOffre.partenaires[0].logo : 'n/c'}
            job={element.intitule}
            company={element.entreprise.nom}
            location={element.lieuTravail.libelle}
            date={getDate(element.dateActualisation)}
          />
        ))}
      </Box>
      <Backdrop open={backdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default ResultPageContainer;
