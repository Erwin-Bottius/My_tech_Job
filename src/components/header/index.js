// IMPORT NPM
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// IMPORT FICHIERS
import { TOGGLE_PRINT_SEARCH_FORM } from 'src/store/actions';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <AppBar position="static" className={location.pathname !== '/' ? classes.resultPageTheme : classes.root}>
      <Toolbar className={classes.tool}>
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
          <Link to="/"> My Tech Job </Link>
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
