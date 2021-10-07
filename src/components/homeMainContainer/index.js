import {
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { TOGGLE_PRINT_SEARCH_FORM } from 'src/store/actions';
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
