// IMPORT NPM
import {
  Typography,
  IconButton,
} from '@material-ui/core';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Turn as Hamburger } from 'hamburger-react';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// IMPORT FICHIERS
import { TOGGLE_PRINT_SEARCH_FORM, RESET_JOBSEARCHED_VALUE } from 'src/store/actions';
import useStyles from './style';

const HeaderMobile = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className={location.pathname !== '/' ? classes.resultPageTheme : classes.root}>
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
      <Typography variant="h6">
        <Link
          to="/"
          onClick={() => {
            dispatch({ type: RESET_JOBSEARCHED_VALUE });
          }}
        >
          My Tech Job
        </Link>
      </Typography>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        className={classes.menuButton}
        size={22}
      />
    </div>
  );
};

export default HeaderMobile;
