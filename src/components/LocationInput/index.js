// IMPORT NPM
import { InputBase } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import CircularProgress from '@material-ui/core/CircularProgress';

// IMPORT FICHIERS
import {
  CHANGE_INPUTS_VALUES,
  SET_GEOLOCATION_LOADING,
  GET_CITYCODE_GEOLOCATION,
} from 'src/store/actions';
import getFilterdLocation from 'src/store/selectors/filteredLocations';
import departments from '../../../data/departments';
import frenchStates from '../../../data/states';
import useStyles from './style';

const LocationInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  const defaultLocationSuggestion = ['Autour de moi', 'Toute la France'];

  return (
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

        if (newValue === 'Autour de moi') {
          if ('geolocation' in navigator) {
            dispatch({ type: SET_GEOLOCATION_LOADING });
            navigator.geolocation.getCurrentPosition((position) => {
              dispatch({
                type: GET_CITYCODE_GEOLOCATION,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          }
        }
        event.target.focus();
        /* } ici nous faisons perder le focus a l'input car ca force l'utulisateur a
     clické de nouveau dans l'input s'il veut changer sa valeur, cela permet donc
     d'avoir de nouveau les suggestions
    */
      }}
      id="custom-input-demo"
      options={locationInputValue
        ? getFilterdLocation(locationInputValue, [...departments, ...frenchStates])
          .map((location) => location.nom)
        : defaultLocationSuggestion}
      renderOption={(options) => {
        if (options === 'Autour de moi') {
          return (
            <>
              <LocationOnIcon className={classes.optionLabelIcon} />
              <p> {options}</p>
            </>
          );
        }
        if (options === 'Toute la France') {
          return (
            <>
              <GpsFixedIcon className={classes.optionLabelIcon} />
              <p>{options}</p>
            </>
          );
        }
        return options;
      }}
      renderInput={(params) => (
        <div
          className={classes.inputbase_container}
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
          { geolocationLoading
       && <CircularProgress /> }

          <hr />
        </div>
      )}
    />
  );
};

export default LocationInput;
