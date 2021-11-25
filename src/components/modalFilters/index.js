// import Npm
import {
  Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Fichiers
import {
  TOGGLE_PRINT_FILTERS_MODAL,
  SET_CONTRACTTYPE_VALUE,
  GET_JOBS,
  RESET_MIN_RANGE,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
} from 'src/store/actions';
import useStyles from './style';

const ModalFilters = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const contractTypeValue = useSelector((state) => state.search.filters.contractTypeValue);
  const experienceValue = useSelector((state) => state.search.filters.experienceValue);
  const isFiltersModalHidden = useSelector((state) => state.search.isFiltersModalHidden);

  // A chaque fois que le state qui affiche ou non la modale change, ,nous déclanchons un nouveau
  // rendu de la modale et changeons l'overflow du body afin de cacher
  // en dessous de la modale tout ce qui pourrait être affiché
  useEffect(() => {
    if (!isFiltersModalHidden) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }
    else document.body.style.overflow = 'visible';
  }, [isFiltersModalHidden]);
  return (
    <Box className={isFiltersModalHidden ? classes.hidden : classes.root}>
      <CloseIcon
        className={classes.cross}
        onClick={() => {
          dispatch({ type: TOGGLE_PRINT_FILTERS_MODAL });
        }}
      />
      <Typography variant="h4" className={classes.title}>
        Filtres
      </Typography>
      <div className={classes.hr} />
      <FormControl component="fieldset" className={classes.contractType__from}>
        <FormLabel component="legend" className={classes.contractType__title}>Type de Contrat</FormLabel>
        <RadioGroup
          aria-label="contractType"
          name="contractType"
          value={contractTypeValue}
          onChange={(evt) => {
            dispatch({
              type: SET_CONTRACTTYPE_VALUE,
              formName: 'contractTypeValue',
              newValue: evt.target.value,
            });
          }}
        >
          <FormControlLabel value="CDI" control={<Radio />} label="CDI" />
          <FormControlLabel value="CDD" control={<Radio />} label="CDD" />
          <FormControlLabel value="alternate" control={<Radio />} label="Alternance (CDD)" />
          <FormControlLabel value="" control={<Radio />} label="Non précisé" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.contractType__from}>
        <FormLabel component="legend" className={classes.contractType__title}>Expérience</FormLabel>
        <RadioGroup
          aria-label="experience"
          name="experience"
          value={experienceValue}
          onChange={(evt) => {
            dispatch({
              type: SET_CONTRACTTYPE_VALUE,
              formName: 'experienceValue',
              newValue: evt.target.value,
            });
          }}
        >
          <FormControlLabel value="1" control={<Radio />} label="moins d'un an" />
          <FormControlLabel value="2" control={<Radio />} label="entre 1an et 3ans" />
          <FormControlLabel value="3" control={<Radio />} label="3ans et plus" />
          <FormControlLabel value="" control={<Radio />} label="Non précisé" />
        </RadioGroup>
      </FormControl>
      <div className={classes.modalFooter}>
        <Typography
          variant="body1"
          className={classes.cancel}
          onClick={() => {
            dispatch({ type: TOGGLE_PRINT_FILTERS_MODAL });
          }}
        >
          Annuler
        </Typography>
        <Button
          onClick={() => {
            dispatch({ type: RESET_MIN_RANGE });
            dispatch({ type: TOGGLE_BACKDROP });
            dispatch({ type: CLEAR_JOBS });
            dispatch({ type: GET_JOBS });
            dispatch({ type: TOGGLE_PRINT_FILTERS_MODAL });
          }}
          variant="contained"
          size="small"
          className={classes.button}
        >
          afficher les résultats
        </Button>
      </div>
    </Box>
  );
};

export default ModalFilters;
