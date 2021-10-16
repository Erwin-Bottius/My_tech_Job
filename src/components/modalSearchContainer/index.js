// IMPPORT NPM
import {
  Box, Typography, Card, CardContent, Button, InputBase,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// IMPORT FICHIERS
import {
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_SEARCHED_VALUE,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  GET_JOBS,
  RESET_SEARCH_ERROR,
} from 'src/store/actions';
import useStyles from './style';

const ModalSearchContainer = () => {
  const jobInputValue = useSelector((state) => state.search.jobInputValue);
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Au Submit du formulaire, on change l'url
    history.push(`/recherche?emploi=${jobInputValue}&localisation=${locationInputValue}`);

    // SI jamais le state hasError est a true avant le submit, on le repasse a false
    dispatch({ type: RESET_SEARCH_ERROR });

    // On ajoute les valeurs des inputs au state locationsearched et jobsearched
    dispatch({
      type: CHANGE_SEARCHED_VALUE,
      searched: 'locationSearched',
      value: locationInputValue,
    });
    dispatch({
      type: CHANGE_SEARCHED_VALUE,
      searched: 'jobSearched',
      value: jobInputValue,
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
    // Au submit, on clear le tableau contenant toutes les offres d'empois
    dispatch({ type: CLEAR_JOBS });
    // On passe le state backdrop a true pour afficher l loading
    dispatch({ type: TOGGLE_BACKDROP });

    dispatch({ type: GET_JOBS });
    // On cache de nouveau la modale de recherche
    dispatch({
      type: TOGGLE_PRINT_SEARCH_FORM,
    });
  };

  return (
    <Box className={classes.root}>
      <CloseIcon
        className={classes.cross}
        onClick={() => {
          dispatch({ type: TOGGLE_PRINT_SEARCH_FORM });
        }}
      />
      <Typography variant="h6">
        Trouvez le job qui vous convient <span className={classes.span}>vraiment</span>.
      </Typography>
      <Card className={classes.cardSearchModal}>
        <CardContent>
          <form
            onSubmit={handleSubmitForm}
          >
            <InputBase
              className={classes.searchModalInput}
              placeholder="Recherche d'emploi"
              variant="outlined"
              value={jobInputValue}
              onChange={(event) => {
                dispatch({
                  type: CHANGE_INPUTS_VALUES,
                  field: 'jobInputValue',
                  inputValue: event.target.value,
                });
              }}
            />
            <hr />
            <InputBase
              className={classes.searchModalInput}
              placeholder="Lieu : ville, code postale, région"
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
            <Button
              variant="contained"
              size="large"
              className={classes.searchButton}
              type="submit"
            >
              RECHERCHER
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ModalSearchContainer;
