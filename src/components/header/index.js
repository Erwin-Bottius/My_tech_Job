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
import { TOGGLE_PRINT_SEARCH_FORM, TOGGLE_THEME_COLOR } from 'src/store/actions';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();
  const dispacth = useDispatch();
  const location = useLocation();

  return (
    <AppBar position="static" className={location.pathname === '/recherche' ? classes.resultPageTheme : classes.root}>
      <Toolbar className={classes.tool}>
        {/* SI on est sur la page de résultats, on affiche un icone SEARCH dans le header pour
        avoir la possibilité d'éffectuer une nouvelle recherche */}
        {location.pathname === '/recherche'
         && (
         <IconButton
           onClick={() => {
             dispacth({
               type: TOGGLE_THEME_COLOR,
             });
             dispacth({
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
