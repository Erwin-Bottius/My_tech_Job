// IMPORT NPM
import { InputBase, useMediaQuery } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch();
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  const defaultLocationSuggestion = ['Autour de moi', 'Toute la France'];

  // Version Mobile ***************************
  if (isMobile) {
    return (
      <Autocomplete
        openOnFocus
        autoComplete
        noOptionsText="Département ou Région inconnue"
        ListboxProps={{ style: { maxHeight: '10rem' } }}
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
            .map((element) => element.nom)
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
              className={isMobile ? classes.searchModalInput : classes.searchModalInput_desktop}
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
          </div>
        )}
      />
    );
  }
  // Version Desktop *******************************
  return (
    <Autocomplete
      openOnFocus
      freeSolo
      autoComplete
      noOptionsText="Département ou Région inconnue"
      ListboxProps={{ style: { maxHeight: '10rem' } }}
      className={location.pathname === '/'
        ? classes.autoComplete_desktop
        : classes.autoComplete_desktop_result}
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
          .map((element) => element.nom)
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
            className={location.pathname === '/'
              ? classes.searchModalInput_desktop
              : classes.searchModalInput_desktop_result}
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
        </div>
      )}
    />
  );
};

export default LocationInput;
