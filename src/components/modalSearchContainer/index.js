import {
  Box, Typography, Card, CardActions, CardContent, Button, InputBase,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { 
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES } from 'src/store/actions';
import useStyles from './style';

const ModalSearchContainer = () => {
  const jobInputValue = useSelector((state) => state.jobInputValue);
  const locationInputValue = useSelector((state) => state.locationInputValue);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <CloseIcon
        className={classes.cross}
        onClick={() => {
          dispatch({ type: TOGGLE_PRINT_SEARCH_FORM });
        }}
      />
      <Typography variant="h6">
        Trouvez le job qui vous convient <span className={classes.span}>vraiment</span>.
      </Typography>
      <Card className={classes.cardSearchModal}>
        <CardContent>
          <form>
            <InputBase
              className={classes.searchModalInput}
              placeholder="Recherche d'emploi"
              variant="outlined"
              value={jobInputValue}
              onChange={(event) => {
                dispatch({
                  type: CHANGE_INPUTS_VALUES,
                  field: 'jobInputValue',
                  inputValue: event.target.value,
                });
              }}
            />
            <hr />
            <InputBase
              className={classes.searchModalInput}
              placeholder="Lieu : ville, code postale, région"
              variant="outlined"
              value={locationInputValue}
              onChange={(event) => {
                dispatch({
                  type: CHANGE_INPUTS_VALUES,
                  field: 'locationInputValue',
                  inputValue: event.target.value,
                });
              }}
            />
          </form>

        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            className={classes.searchButton}
          >
            RECHERCHER
          </Button>
        </CardActions>
      </Card>

    </Box>

  );
};

export default ModalSearchContainer;
