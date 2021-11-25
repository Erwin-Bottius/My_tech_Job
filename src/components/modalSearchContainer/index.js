// IMPPORT NPM
import {
  Box, Typography, Button, InputBase, Chip,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

// IMPORT FICHIERS
import {
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_LOCATIONSEARCHED_VALUE,
  CHANGE_JOBSEARCHED_VALUE,
  DELETE_EL_JOBSEARCHED_VALUE,
  DELETE_LAST_EL_JOBSEARCHED_VALUE,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  GET_JOBS,
  RESET_SEARCH_ERROR,
  RESET_MIN_RANGE,
} from 'src/store/actions';
import getFilterdLocation from 'src/store/selectors/filteredLocations';
import GuidedResearchButton from 'src/components/guidedSearchedButton';
import basesGuidedResearch from '../../../data/basesGuidedResearch';
import departments from '../../../data/departments';
import frenchStates from '../../../data/states';
import useStyles from './style';

const ModalSearchContainer = () => {
  const jobInputValue = useSelector((state) => state.search.jobInputValue);
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const isSearchFormHidden = useSelector((state) => state.search.isSearchFormHidden);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!isSearchFormHidden) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isSearchFormHidden]);

  const handleSubmitForm = (event) => {
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
    // Et on reset les valeurs des deux inputs
    dispatch({
      type: CHANGE_INPUTS_VALUES,
      field: 'locationInputValue',
      inputValue: '',
    });
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
  };
  // Fonction qui supprimera le chip (tag a l'interieur de l'input)
  const handleDeleteChip = (chipToDelete) => {
    dispatch({
      type: DELETE_EL_JOBSEARCHED_VALUE,
      deletedJob: chipToDelete,
    });
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
          <div className={classes.jobsInput__container}>
            {jobSearched.length < 1
            && <p className={classes.jobsInput__notice}>Appuyer sur Entrer pour ajouter un</p> }
            <ul className={classes.jobsInput__ul}>
              {jobSearched.map((element, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`${element}${index}`}>
                  <Chip
                    className={classes.jobsInput__chip}
                    label={element}
                    onDelete={() => {
                      handleDeleteChip(element);
                    }}
                  />
                </li>
              ))}
            </ul>
            <InputBase
              className={classes.jobsInput}
              placeholder="langage, framework..."
              variant="outlined"
              value={jobInputValue}
              // a la perte du focus, si l'utilsateur n'a pas creer le Chip
              // On le créé pour lui, seulement si la valeur de l'input est non nulle
              onBlur={() => {
                if (jobSearched.length < 5 && jobInputValue) {
                  dispatch({
                    type: CHANGE_JOBSEARCHED_VALUE,
                    jobSearched: jobInputValue,
                  });
                  // puis on reset l'input
                  dispatch({
                    type: CHANGE_INPUTS_VALUES,
                    field: 'jobInputValue',
                    inputValue: '',
                  });
                }
              }}
              onKeyDown={(event) => {
                if ((event.key === 'Enter' || event.key === ' ') && jobInputValue && jobInputValue) {
                  if (jobSearched.length > 4) {
                    event.preventDefault();
                    return;
                  }
                  event.preventDefault();
                  // On ajoute les valeurs de l'input job au state jobSearched (tableau)
                  dispatch({
                    type: CHANGE_JOBSEARCHED_VALUE,
                    jobSearched: jobInputValue,
                  });
                  // puis on reset l'input
                  dispatch({
                    type: CHANGE_INPUTS_VALUES,
                    field: 'jobInputValue',
                    inputValue: '',
                  });
                }
                else if (event.key === 'Backspace' && jobInputValue === '') {
                  dispatch({
                    type: DELETE_LAST_EL_JOBSEARCHED_VALUE,
                  });
                }
              }}
              onChange={(event) => {
                dispatch({
                  type: CHANGE_INPUTS_VALUES,
                  field: 'jobInputValue',
                  inputValue: event.target.value,
                });
              }}
            />
          </div>
          <hr />
          <Autocomplete
            openOnFocus
            autoComplete
            freeSolo
            value={locationInputValue}
            onChange={(event, newValue) => {
              dispatch({
                type: CHANGE_INPUTS_VALUES,
                field: 'locationInputValue',
                inputValue: newValue,
              });
            }}
            id="custom-input-demo"
            options={getFilterdLocation(locationInputValue, [...departments, ...frenchStates])
              .map((location) => location.nom)}
            renderInput={(params) => (
              <div
                ref={params.InputProps.ref}
              >
                <InputBase
                  {...params.inputProps}
                  className={classes.searchModalInput}
                  placeholder="département, région"
                  variant="outlined"
                  value={locationInputValue}
                  onChange={(event) => {
                    dispatch({
                      type: CHANGE_INPUTS_VALUES,
                      field: 'locationInputValue',
                      inputValue: event.target.value,
                    });
                  }}
                />
                <hr />
              </div>
            )}
          />
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
