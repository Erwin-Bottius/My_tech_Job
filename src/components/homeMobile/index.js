import {
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_PRINT_SEARCH_FORM, RESET_STATES } from 'src/store/actions';
import useStyles from './style';

const HomeMobile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // Lorsque l'utilisateur est sur la page home, on reset tous le sates
  useEffect(() => {
    dispatch({ type: RESET_STATES });
  }, []);
  return (
    <Box className={classes.box}>
      <Typography variant="h6" className={classes.title}>
        Trouver le job qui vous convient
        <span className={classes.span}> vraiment</span>
      </Typography>
      <Button
        onClick={() => {
          // On affiche la modale de recherche
          dispatch({
            type: TOGGLE_PRINT_SEARCH_FORM,
          });
        }}
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<SearchIcon className={classes.searchIcon} style={{ fontSize: '2rem' }} />}
      >
        Rechercher des offres d'emploi
      </Button>
    </Box>
  );
};

export default HomeMobile;
