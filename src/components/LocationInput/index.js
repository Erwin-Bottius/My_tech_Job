// IMPORT NPM
import { InputBase, useMediaQuery, Paper } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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

const LocationInput = ({ modalRef }) => {
  const classes = useStyles();
  const [autocompleteLocationValue, setAutocompleteLocationValue] = useState('');
  const isMobile = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch();
  const location = useLocation();
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  const defaultLocationSuggestion = ['Autour de moi', 'Toute la France'];
  const inputRef = useRef();

  // ************************** Version Mobile ***************************
  if (isMobile) {
    return (
      <Autocomplete
        id="custom-input-demo"
        openOnFocus
        ref={inputRef}
        autoComplete
        onFocus={() => {
          // Au focus, nous utilisons la modale (élémen,t sur lequel nous avons l'overflow scroll)
          // afin de scroller à la hauteur de l'input
          modalRef.current.scrollTo(0, inputRef.current.scrollHeight);
        }}
        noOptionsText="Département ou Région inconnue"
        getOptionSelected={(option, value) => option.includes(value)}
        ListboxProps={{
          style: {
            maxHeight: '10rem',
            minHeight: '5rem',
          },
        }}
        PaperComponent={(props) => (
          <Paper
            {...props}
            className={classes.listBox__container__mobile}
            placement="bottom"
          />
        )}
        value={autocompleteLocationValue}
        onChange={(event, newValue) => {
          setAutocompleteLocationValue(newValue);
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
        }}
        inputValue={locationInputValue}
        onInputChange={(event, newInputValue) => {
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'locationInputValue',
            inputValue: newInputValue,
          });
        }}
        options={
          locationInputValue
            ? getFilterdLocation(locationInputValue, [...departments, ...frenchStates])
              .map((element) => element.nom)
            : defaultLocationSuggestion
}
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
            />
            { geolocationLoading
          && <CircularProgress /> }
          </div>
        )}
      />
    );
  }
  // ******************************* Version Desktop *************************
  return (
    <>
      <Autocomplete
        id="custom-input-demo"
        openOnFocus
        autoComplete
        noOptionsText="Département ou Région inconnue"
        className={location.pathname === '/'
          ? classes.autoComplete__desktop__locationInput
          : classes.autoComplete_desktop_result}
        getOptionSelected={(option, value) => option.includes(value)}
        ListboxProps={{
          style: {
            maxHeight: '10rem',
            minHeight: '5rem',
          },
        }}
        PaperComponent={(props) => (
          <Paper
            {...props}
            className={location.pathname === '/'
              ? classes.listBox__container
              : classes.listBox__container__result}
            placement="bottom"
          />
        )}
        value={autocompleteLocationValue}
        inputValue={locationInputValue}
        onInputChange={(event, newInputValue) => {
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'locationInputValue',
            inputValue: newInputValue,
          });
        }}
        onChange={(event, newValue) => {
          setAutocompleteLocationValue(newValue);
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
        }}
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
              className={classes.searchModalInput_desktop_result}
              placeholder="Département, Région"
              variant="outlined"
              value={locationInputValue || ''}
            />
            { geolocationLoading
            && <CircularProgress /> }
            <div className={classes.hr} />
          </div>
        )}
      />
    </>
  );
};

LocationInput.defaultProps = {
  modalRef: {},
};

LocationInput.propTypes = {
  modalRef: PropTypes.shape(),
};

export default LocationInput;
