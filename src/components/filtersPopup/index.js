// IMPORT NPM
import {
  Button,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

// IMPORT FICHIERS
import {
  SET_CONTRACTTYPE_VALUE,
  TOGGLE_FILTER_POPUP,
  RESET_MIN_RANGE,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  GET_JOBS,
} from 'src/store/actions';
import useStyles from './style';

const FiltersPopup = ({
  radioGroupValue, formName, formControlLabelObjects, popupName,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isContractPopup = useSelector((state) => state.search.filtersPopup.isContractPopup);
  const isExperiencePopup = useSelector((state) => state.search.filtersPopup.isExperiencePopup);
  return (
    <div className={classes.filtersPopup}>
      <FormControl component="fieldset" className={classes.filtersPopup__form}>
        <FormLabel component="legend" className={classes.filtersPopup__form__title}>Type de Contrat</FormLabel>
        <RadioGroup
          aria-label="contractType"
          name="contractType"
          value={radioGroupValue}
          onChange={(evt) => {
            dispatch({
              type: SET_CONTRACTTYPE_VALUE,
              formName: formName,
              newValue: evt.target.value,
            });
          }}
        >
          {formControlLabelObjects.map((element) => (
            <FormControlLabel value={element.value} control={<Radio />} label={element.label} />
          ))}
        </RadioGroup>
      </FormControl>
      <div className={classes.filtersPopup__footer}>
        <Typography
          variant="body1"
          className={classes.filtersPopup__footer__cancel}
          onClick={() => {
            dispatch({
              type: TOGGLE_FILTER_POPUP,
              popup: popupName,
            });
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
            if (isContractPopup) {
              dispatch({
                type: TOGGLE_FILTER_POPUP,
                popup: 'isContractPopup',
              });
            }
            if (isExperiencePopup) {
              dispatch({
                type: TOGGLE_FILTER_POPUP,
                popup: 'isExperiencePopup',
              });
            }
          }}
          variant="outlined"
          size="small"
          className={classes.filtersPopup__footer__applyButton}
        >
          Appliquer
        </Button>
      </div>
    </div>
  );
};

FiltersPopup.propTypes = {
  radioGroupValue: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  popupName: PropTypes.string.isRequired,
  formControlLabelObjects: PropTypes.arrayOf(
    PropTypes.shape(
      {
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
};

export default FiltersPopup;
