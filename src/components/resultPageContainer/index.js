// IMPORT NPM
import {
  Box, Card, CardContent, Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

// IMPORTS FICHIERS
import ResultPageCard from 'src/components/resultPageCard';
import data from '../../../data.json';
import useStyles from './style';

const ResultPageContainer = () => {
  const locationSearched = useSelector((state) => state.locationSearched);
  const jobSearched = useSelector((state) => state.jobSearched);
  const classes = useStyles();
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
        {data.resultats.map((element) => (
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
    </div>
  );
};

export default ResultPageContainer;
