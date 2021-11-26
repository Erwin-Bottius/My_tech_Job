// IMPPORT NPM
import {
  Box, Typography, Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

// IMPORT FICHIERS
import {
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_LOCATIONSEARCHED_VALUE,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  GET_JOBS,
  RESET_SEARCH_ERROR,
  RESET_MIN_RANGE,
} from 'src/store/actions';
import GuidedResearchButton from 'src/components/guidedSearchedButton';
import JobsInput from 'src/components/JobsInput';
import basesGuidedResearch from '../../../data/basesGuidedResearch';
import useStyles from './style';
import LocationInput from '../LocationInput';

const ModalSearchContainer = () => {
  const jobInputValue = useSelector((state) => state.search.jobInputValue);
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const isSearchFormHidden = useSelector((state) => state.search.isSearchFormHidden);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!isSearchFormHidden) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isSearchFormHidden]);

  const handleSubmitForm = (event) => {
    if (geolocationLoading) {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      // Au Submit du formulaire, on change l'url
      history.push(`/recherche?emploi=${jobInputValue
        .toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')}&localisation=${locationInputValue
        .toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')}`);

      // SI jamais le state hasError est a true avant le submit, on le repasse a false
      dispatch({ type: RESET_SEARCH_ERROR });

      // ON reset le state requestMinRange => 0
      dispatch({ type: RESET_MIN_RANGE });

      // On ajoute les valeurs de l'input location au state locationsearched
      dispatch({
        type: CHANGE_LOCATIONSEARCHED_VALUE,
        locationSearched: locationInputValue,
      });
      // Et on reset la valeur de l'input des jobs (seulement l'input mais pas les chips)
      dispatch({
        type: CHANGE_INPUTS_VALUES,
        field: 'jobInputValue',
        inputValue: '',
      });
      // Au submit, on clear le tableau contenant toutes les offres d'emplois
      // car c'est la meme action que lorsque l'on click sur le button load more
      // qui ajoute les nouveau résultats aux résultats éxistant
      // (on ajoutes les nouvelles offres dans le meme tableau)
      // il faut donc clear les résultats seulement pour une nouvelle recherche
      dispatch({ type: CLEAR_JOBS });
      // On passe le state backdrop a true pour afficher l loading
      dispatch({ type: TOGGLE_BACKDROP });
      dispatch({ type: GET_JOBS });
      // On cache de nouveau la modale de recherche
      dispatch({
        type: TOGGLE_PRINT_SEARCH_FORM,
      });
    }
  };
  return (
    <Box className={isSearchFormHidden ? classes.hidden : classes.root}>
      <CloseIcon
        className={classes.cross}
        onClick={() => {
          dispatch({ type: TOGGLE_PRINT_SEARCH_FORM });
        }}
      />
      <Typography variant="h6">
        Trouvez le job qui vous convient <span className={classes.span}>vraiment</span>.
      </Typography>
      <div className={classes.searchCard}>
        <form
          onSubmit={handleSubmitForm}
        >
          <JobsInput />
          <hr />
          <LocationInput />
          <Button
            variant="contained"
            size="large"
            className={classes.searchButton}
            type="submit"
          >
            rechercher
          </Button>
        </form>
      </div>
      <Typography variant="h6" className={classes.populatSearches_title}>
        Recherche les plus fréquentes
      </Typography>
      {/* Ici on map sur le tableau qui contient lui meme plusieurs tableaux
      dans lesquels nous avons differents langage de programmations afin de creer
      une recherhce guidée qui permet au click d'ajouter directement tous les langages concerné
      dans la recherche */}
      {basesGuidedResearch.map((element) => (
        <GuidedResearchButton
          key={element}
          bases={element}
        />

      ))}
    </Box>
  );
};

export default ModalSearchContainer;
