import {
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { TOGGLE_PRINT_SEARCH_FORM, CHANGE_INPUTS_VALUES } from 'src/store/actions';
import useStyles from './style';

const HomeMainConatainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.box}>
      <Typography variant="h6"> Trouver le job qui vous convient <span className={classes.span}> vraiment </span></Typography>
      <Button
        onClick={() => {
          // On affiche la modale de recherche
          dispatch({
            type: TOGGLE_PRINT_SEARCH_FORM,
          });
          // Et on reset les deux inputs,
          // au cas les state de valeur d'input de sont pas null a cause du storage
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'locationInputValue',
            inputValue: '',
          });
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'jobInputValue',
            inputValue: '',
          });
        }}
        variant="contained"
        size="large"
        className={classes.root}
        startIcon={<SearchIcon className={classes.searchIcon} style={{ fontSize: '2rem' }} />}
      >
        Rechercher des titres de postes
      </Button>
    </Box>
  );
};

export default HomeMainConatainer;
