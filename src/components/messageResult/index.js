// IMPORT NPM
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

// IMPORTS FICHIERS
import ResultPageCard from 'src/components/resultPageCard';
import data from '../../../data.json';
import useStyles from './style';

const MessageResult = () => {
  const locationInputValue = useSelector((state) => state.locationInputValue);
  const jobInputValue = useSelector((state) => state.jobInputValue);
  const classes = useStyles();
  const getDate = (actualisationDate) => {
    const date = new Date(actualisationDate);
    return date.toLocaleDateString('fr');
  };

  return (
    <div className={classes.root}>
      <Box>
        Résultats de recherche pour {jobInputValue} dans {locationInputValue}
      </Box>
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

export default MessageResult;
