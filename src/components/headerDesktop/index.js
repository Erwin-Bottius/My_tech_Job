// IMPORT NPM
import {
  Typography,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// IMPORT FICHIERS
import {
  RESET_JOBSEARCHED_VALUE,
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
import useStyles from './style';

const HeaderDesk = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const locationInputValue = useSelector((state) => state.search.locationInputValue);
  const geolocationLoading = useSelector((state) => state.search.geolocationLoading);
  const handleSubmitForm = (event) => {
    if (geolocationLoading) {
      event.preventDefault();
    }
    else {
      event.preventDefault();

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

  return (
    <div className={location.pathname === '/'
      ? classes.root
      : classes.resultPageTheme}
    >
      <div />
      {/* SI on est sur la page de résultats ou d'offre,
         on affiche un icone SEARCH dans le header pour
        avoir la possibilité d'éffectuer une nouvelle recherche */}
      {location.pathname !== '/'
         && (
         <div className={location.pathname === '/'
           ? classes.searchCard
           : classes.searchCard_result}
         >
           <form
             className={classes.form}
             onSubmit={handleSubmitForm}
           >
             <JobsInput />
             <LocationInput />
             <Button
               variant="contained"
               className={classes.searchButton}
               type="submit"
               startIcon={<SearchIcon className={classes.searchIcon} style={{ fontSize: '1.8rem' }} />}
             />
           </form>
         </div>
         )}
      <Link
        to="/"
        onClick={() => {
          dispatch({ type: RESET_JOBSEARCHED_VALUE });
        }}
      >
        <Typography
          variant="h6"
          className={location.pathname !== '/' ? classes.logo : ''}
        >
          My Tech Job
        </Typography>
      </Link>
    </div>
  );
};

export default HeaderDesk;
