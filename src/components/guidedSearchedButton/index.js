// IMPORT NPM
import SearchIcon from '@material-ui/icons/Search';
import { PropTypes } from 'prop-types';
import {
  Button,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// IMPORT FICHIERS
import { CHANGE_JOBSEARCHED_VALUE, DELETE_EL_JOBSEARCHED_VALUE } from 'src/store/actions';
import useStyles from './style';

const GuidedResearchButton = ({ bases }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const jobSearched = useSelector((state) => state.search.jobSearched);
  return (
    <>
      <Button
        variant="outlined"
        size="large"
        className={classes.guidedSearchedButton}
        startIcon={<SearchIcon className={classes.searchIcon} style={{ fontSize: '1.5rem' }} />}
        onClick={() => {
          jobSearched.forEach((element) => {
            // A chaque fois que l'on click button de recherche guidé,
            // on suprimme tous les langages qui était déja present de jobsSearched
            dispatch({
              type: DELETE_EL_JOBSEARCHED_VALUE,
              deletedJob: element,
            });
          });
          // Puis on ajoute les nouveaux
          bases.forEach((element) => {
            dispatch({
              type: CHANGE_JOBSEARCHED_VALUE,
              jobSearched: element,
            });
          });
        }}
      >
        {bases.join(' ')}
      </Button>
    </>
  );
};

GuidedResearchButton.propTypes = {
  bases: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GuidedResearchButton;
