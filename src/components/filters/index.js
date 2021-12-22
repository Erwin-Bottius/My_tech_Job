// IMPORT NPM
import {
  Button,
  useMediaQuery,
  Typography,

} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// IMPORT FICHIERS
import {
  TOGGLE_PRINT_FILTERS_MODAL,
  TOGGLE_FILTER_POPUP,
} from 'src/store/actions';
import filterIcon from 'src/assets/images/edit4.png';
import FiltersPopup from 'src/components/filtersPopup';
import useStyles from './style';

const Filters = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:800px)');
  const jobs = useSelector((state) => state.search.jobs);
  const contractTypeValue = useSelector((state) => state.search.filters.contractTypeValue);
  const isContractPopup = useSelector((state) => state.search.filtersPopup.isContractPopup);
  const isExperiencePopup = useSelector((state) => state.search.filtersPopup.isExperiencePopup);
  const experienceValue = useSelector((state) => state.search.filters.experienceValue);

  if (isMobile) {
  // *********************** VERSION MOBILE ************************

    return (
      <div className={classes.filtersMobile}>
        <Typography variant="body1" className={classes.filtersMobile__information}>
          Des centaines d'offres trouvées
        </Typography>
        <Button
          className={`${classes.filtersMobile__button} pinkButton`}
          variant="contained"
          size="medium"
          onClick={() => {
            window.scrollTo(0, 0);
            dispatch({ type: TOGGLE_PRINT_FILTERS_MODAL });
          }}
        >
          <img src={filterIcon} alt="filter icon" className={classes.filtersMobile__button__image} />
          Filtres
        </Button>
      </div>
    );
  }
  // *********************** VERSION DESKTOP ************************
  return (
    <div className={classes.filtersDesktop}>
      <Typography variant="body1" className={classes.filtersDesktop__information}>
        {jobs.length >= 14
          ? "Des centaines d'offres trouvées"
          : 'Modifier votre rechercher pour obtenir plus de résultats'}
      </Typography>
      <div className={classes.filtersDesktop__buttonsContainer}>
        <div className={classes.button__container}>
          <Button
            className={`${classes.filtersDesktop__buttonsContainer__button} pinkButton`}
            variant="contained"
            size="small"
            onClick={() => {
              if (isExperiencePopup) {
                dispatch({
                  type: TOGGLE_FILTER_POPUP,
                  popup: 'isExperiencePopup',
                });
              }
              dispatch({
                type: TOGGLE_FILTER_POPUP,
                popup: 'isContractPopup',
              });
            }}
          >
            Type de contrat
          </Button>
          { isContractPopup
        && (
          <FiltersPopup
            radioGroupValue={contractTypeValue}
            formName="contractTypeValue"
            popupName="isContractPopup"
            formControlLabelObjects={
              [
                {
                  value: 'CDI',
                  label: 'CDI',
                },
                {
                  value: 'CDD',
                  label: 'CDD',
                },
                {
                  value: 'alternate',
                  label: 'alternance (CDD)',
                },
                {
                  value: '',
                  label: 'Non précisé',
                },
              ]
            }
          />
        )}
        </div>
        <div className={classes.filtersDesktop__buttonsContainer}>
          <div className={classes.button__container}>
            <Button
              className={`${classes.filtersDesktop__buttonsContainer__button} pinkButton`}
              variant="contained"
              size="small"
              onClick={() => {
                if (isContractPopup) {
                  dispatch({
                    type: TOGGLE_FILTER_POPUP,
                    popup: 'isContractPopup',
                  });
                }
                dispatch({
                  type: TOGGLE_FILTER_POPUP,
                  popup: 'isExperiencePopup',
                });
              }}
            >
              Expérience
            </Button>
            { isExperiencePopup
          && (
            <FiltersPopup
              radioGroupValue={experienceValue}
              formName="experienceValue"
              popupName="isExperiencePopup"
              formControlLabelObjects={
              [
                {
                  value: '1',
                  label: "Moins d'un an",
                },
                {
                  value: '2',
                  label: 'Entre un et trois ans',
                },
                {
                  value: '3',
                  label: 'Plus de trois ans',
                },
                {
                  value: '',
                  label: 'Non précisé',
                },
              ]
            }
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
