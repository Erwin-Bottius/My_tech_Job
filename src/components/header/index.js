// IMPORT NPM
import {
  Typography,
  IconButton,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Turn as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// IMPORT FICHIERS
import {
  TOGGLE_PRINT_SEARCH_FORM,
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

const Header = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:800px)');
  const [isOpen, setOpen] = useState(false);
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
      // Ici nous récupérons les deux input pour s'assurer qu'au submit du formulaire nous
      // perdons bien le focus (probleme de perte de focus sur la page result)
      const inputs = event.target.querySelectorAll('input');
      inputs.forEach((input) => {
        input.blur();
      });

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
  // ****************** VERSION MOBILE *********************************
  if (isMobile) {
    return (
      <header className={location.pathname === '/' ? classes.headerHomeMobile : classes.headerMobile}>
        {/* SI on est sur la page de résultats ou d'offre,
         on affiche un icone SEARCH dans le header pour
        avoir la possibilité d'éffectuer une nouvelle recherche */}
        {location.pathname !== '/'
         && (
         <IconButton
           onClick={() => {
             // lorsqu'on click sur l'icone SEARCH, on affiche la modale
             dispatch({
               type: TOGGLE_PRINT_SEARCH_FORM,
             });
           }}
           edge="start"
           color="inherit"
         >
           <SearchIcon />
         </IconButton>
         )}
        <Link
          to="/"
          onClick={() => {
            dispatch({ type: RESET_JOBSEARCHED_VALUE });
          }}
        >
          <Typography
            variant="h6"
            className={location.pathname !== '/' ? classes.headerMobile__logo : classes.headerMobile__logo__home}
          >
            My <span>Tech</span> Job
          </Typography>
        </Link>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className={classes.menuButton}
          size={22}
        />
      </header>
    );
  }
  // ****************** VERSION DESKTOP *********************************
  return (
    <div className={location.pathname === '/'
      ? classes.headerHomeDesktop
      : classes.headerDesktop}
    >
      <div className={classes.headerDesktop__fakeDiv} />
      {location.pathname === '/recherche'
         && (
         <div className={classes.headerDesktop__searchCard}>
           <form
             className={classes.headerDesktop__searchCard__form}
             onSubmit={handleSubmitForm}
           >
             <JobsInput />
             <LocationInput />
             <Button
               variant="contained"
               className={`${classes.headerDesktop__searchCard__form__searchButton} pinkButton`}
               type="submit"
               startIcon={<SearchIcon style={{ fontSize: '1.8rem' }} />}
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
          className={location.pathname !== '/' ? classes.headerDesktop__logo : classes.headerDesktop__logo__home}
        >
          My <span>Tech</span> Job
        </Typography>
      </Link>
    </div>
  );
};

export default Header;
