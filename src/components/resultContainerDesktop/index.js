// import NPM
import {
  Typography,
  Button,
  Backdrop,
  CircularProgress,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,

} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

// Import Fichiers
import ResultPageContainer from 'src/components/resultPageContainer';
import Error from 'src/components/error';
import JobDetailDesktop from 'src/components/jobDetailDesktop';
import getJobOfferByIsSelected from 'src/store/selectors/getJobOfferByIsSelected';
import {
  SET_CONTRACTTYPE_VALUE,
  CLEAR_JOBS,
  GET_JOBS,
  RESET_MIN_RANGE,
  TOGGLE_BACKDROP,
  TOGGLE_FILTER_POPUP,
} from 'src/store/actions';
import useStyles from './style';

const ResultContainerDesktop = () => {
  const jobs = useSelector((state) => state.search.jobs);
  const backdrop = useSelector((state) => state.search.backdropOpen);
  const hasError = useSelector((state) => state.search.hasError);
  const locationSearched = useSelector((state) => state.search.locationSearched);
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const contractTypeValue = useSelector((state) => state.search.filters.contractTypeValue);
  const isContractPopup = useSelector((state) => state.search.filtersPopup.isContractPopup);
  const isExperiencePopup = useSelector((state) => state.search.filtersPopup.isExperiencePopup);
  const experienceValue = useSelector((state) => state.search.filters.experienceValue);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {hasError && <Error />}
      {!backdrop && (hasError === false)
          && (
            <>
              <div className={classes.card__message__container}>
                <div className={classes.card__message}>
                  <Typography variant="h6" className={classes.resultMessage}>
                    Résultats de recherche pour
                    <span className={classes.span}>
                      {jobSearched.length > 0 ? ` ${jobSearched.join(' ')} ` : ' jobs les plus populaires '}
                    </span>
                    dans <span className={classes.span}>{locationSearched || 'France'} </span>
                  </Typography>
                </div>
              </div>
              <div className={classes.subHeader}>
                <Typography variant="body1" className={classes.subHeader__information}>
                  {jobs.length >= 14
                    ? "Des centaines d'offres trouvées"
                    : 'Modifier votre rechercher pour obtenir plus de résultats'}
                </Typography>
                <div className={classes.filtersButtons__container}>
                  <div className={classes.button__container}>
                    <Button
                      className={`${classes.button} pinkButton`}
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
                    <div className={classes.filters__popup}>
                      <FormControl component="fieldset" className={classes.contractType__form}>
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
                      <div className={classes.modalFooter}>
                        <Typography
                          variant="body1"
                          className={classes.cancel}
                          onClick={() => {
                            dispatch({
                              type: TOGGLE_FILTER_POPUP,
                              popup: 'isContractPopup',
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
                            dispatch({
                              type: TOGGLE_FILTER_POPUP,
                              popup: 'isContractPopup',
                            });
                          }}
                          variant="outlined"
                          size="small"
                          className={classes.applyButton}
                        >
                          Appliquer
                        </Button>
                      </div>
                    </div>
                    )}
                  </div>
                  <div className={classes.filtersButtons__container}>
                    <div className={classes.button__container}>
                      <Button
                        className={`${classes.button} pinkButton`}
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
                      <div className={classes.filters__popup}>
                        <FormControl component="fieldset" className={classes.contractType__form}>
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
                              dispatch({
                                type: TOGGLE_FILTER_POPUP,
                                popup: 'isExperiencePopup',
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
                              dispatch({
                                type: TOGGLE_FILTER_POPUP,
                                popup: 'isExperiencePopup',
                              });
                            }}
                            variant="outlined"
                            size="small"
                            className={classes.applyButton}
                          >
                            Appliquer
                          </Button>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.section}>
                <ResultPageContainer />
                <div className={classes.card__detail}>
                  {getJobOfferByIsSelected(jobs)
                    ? <JobDetailDesktop />
                    : (
                      <div className={classes.informations__container}>
                        <div className={classes.avatar}>My Tech Job</div>
                        <Typography className={classes.informations}>{
                          jobs.length >= 14
                            ? "Nous avons trouvé des centaines d'offres correspondants à vos critères"
                            : 'Voici quelques offres correspondants à vos critères. \n Essayez de modifier votre recherche pour plus de résultats.'
                        }
                        </Typography>
                      </div>
                    )}
                  <div />
                </div>
              </div>
            </>
          )}
      <Backdrop open={backdrop} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>

  );
};

export default ResultContainerDesktop;
