// IMPORT NPM

import {
  Box,
  Typography,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT FICHIERS

import {
  TOGGLE_PRINT_SEARCH_FORM,
  RESET_STATES,
  RESET_SEARCH_ERROR,
  RESET_MIN_RANGE,
  CHANGE_LOCATIONSEARCHED_VALUE,
  CHANGE_INPUTS_VALUES,
  CLEAR_JOBS,
  TOGGLE_BACKDROP,
  GET_JOBS,
} from 'src/store/actions';
import JobsInput from 'src/components/JobsInput';
import LocationInput from 'src/components/LocationInput';
import GuidedResearchButton from 'src/components/guidedSearchedButton';
import basesGuidedResearch from '../../../data/basesGuidedResearch';
import useStyles from './style';

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:800px)');
  const history = useHistory();
  const jobInputValue = useSelector((state) => state.search.jobInputValue);
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  // Lorsque l'utilisateur est sur la page home, on reset tous le sates
  useEffect(() => {
    dispatch({ type: RESET_STATES });
  }, []);
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
    }
  };
  if (isMobile) {
    // ********************** VERSION MOBILE ************************
    return (
      <Box className={classes.homeMobile}>
        <Typography variant="h6" className={classes.homeMobile__title}>
          <span className={classes.noBreak}>Trouvez le poste de</span>
          <br />
          <span className={classes.noBreak}>
            <span className={classes.homeMobile__title__span}>développeur </span>
            qui
            <br />
          </span>
          <span className={classes.noBreak}>vous convient</span> <br />
          <span className={classes.homeMobile__title__span}> vraiment.</span>
        </Typography>
        <Button
          onClick={() => {
          // On affiche la modale de recherche
            dispatch({
              type: TOGGLE_PRINT_SEARCH_FORM,
            });
          }}
          variant="contained"
          size="large"
          className={classes.homeMobile__button}
          startIcon={<SearchIcon className={classes.homeMobile__button__searchIcon} style={{ fontSize: '2rem' }} />}
        >
          Rechercher des offres d'emploi
        </Button>
      </Box>
    );
  }
  // ********************** VERSION DESKTOP ************************
  return (
    <Box className={classes.homeDesktop}>
      <Typography
        variant="h6"
        className={classes.homeDesktop__title}
      >

        Trouvez le poste de
        <span className={classes.homeMobile__title__span}> développeur </span>

        <span className={classes.noBreak}>
          qui vous convient
          <span className={classes.homeMobile__title__span}> vraiment.</span>
        </span>
      </Typography>
      <div className={classes.homeDesktop__searchCard}>
        <form
          className={classes.homeDesktop__searchCard__form}
          onSubmit={handleSubmitForm}
        >
          <JobsInput />
          <LocationInput />
          <Button
            variant="contained"
            className={`${classes.homeDesktop__searchCard__form__button} pinkButton`}
            type="submit"
            disableElevation
            startIcon={<SearchIcon style={{ fontSize: '2rem' }} />}
          />
        </form>
      </div>
      <Typography variant="h6" className={classes.homeDesktop__popularSearches__title}>
        Recherche les plus fréquentes
      </Typography>
      {/* Ici on map sur le tableau qui contient lui meme plusieurs tableaux
      dans lesquels nous avons differents langage de programmations afin de creer
      une recherhce guidée qui permet au click d'ajouter directement tous les langages concerné
      dans la recherche */}
      <div className={classes.homeDesktop__popularSearches__basesContainer}>
        {basesGuidedResearch.map((element) => (
          <GuidedResearchButton
            key={element}
            bases={element}
          />

        ))}
      </div>
    </Box>
  );
};

export default HomePage;
