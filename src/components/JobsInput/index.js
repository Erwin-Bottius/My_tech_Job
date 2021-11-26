// IMPORT NPM
import { useDispatch, useSelector } from 'react-redux';
import { Chip, InputBase } from '@material-ui/core';

// IMPORT FICHIERS
import {
  DELETE_EL_JOBSEARCHED_VALUE,
  CHANGE_JOBSEARCHED_VALUE,
  CHANGE_INPUTS_VALUES,
  DELETE_LAST_EL_JOBSEARCHED_VALUE,
} from 'src/store/actions';
import useStyles from './style';

const JobsInput = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const jobInputValue = useSelector((state) => state.search.jobInputValue);

  // Fonction qui supprimera le chip (tag a l'interieur de l'input)
  const handleDeleteChip = (chipToDelete) => {
    dispatch({
      type: DELETE_EL_JOBSEARCHED_VALUE,
      deletedJob: chipToDelete,
    });
  };

  return (
    <div className={classes.jobsInput__container}>
      {jobSearched.length < 1
&& <p className={classes.jobsInput__notice}>Appuyer sur Entrer pour ajouter un</p> }
      <ul className={classes.jobsInput__ul}>
        {jobSearched.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <li key={`${element}${index}`}>
            <Chip
              className={classes.jobsInput__chip}
              label={element}
              onDelete={() => {
                handleDeleteChip(element);
              }}
            />
          </li>
        ))}
      </ul>
      <InputBase
        className={classes.jobsInput}
        placeholder="langage, framework..."
        variant="outlined"
        value={jobInputValue}
  // a la perte du focus, si l'utilsateur n'a pas creer le Chip
  // On le créé pour lui, seulement si la valeur de l'input est non nulle
        onBlur={() => {
          if (jobSearched.length < 5 && jobInputValue) {
            dispatch({
              type: CHANGE_JOBSEARCHED_VALUE,
              jobSearched: jobInputValue,
            });
            // puis on reset l'input
            dispatch({
              type: CHANGE_INPUTS_VALUES,
              field: 'jobInputValue',
              inputValue: '',
            });
          }
        }}
        onKeyDown={(event) => {
          if ((event.key === 'Enter' || event.key === ' ') && jobInputValue && jobInputValue) {
            if (jobSearched.length > 4) {
              event.preventDefault();
              return;
            }
            event.preventDefault();
            // On ajoute les valeurs de l'input job au state jobSearched (tableau)
            dispatch({
              type: CHANGE_JOBSEARCHED_VALUE,
              jobSearched: jobInputValue,
            });
            // puis on reset l'input
            dispatch({
              type: CHANGE_INPUTS_VALUES,
              field: 'jobInputValue',
              inputValue: '',
            });
          }
          else if (event.key === 'Backspace' && jobInputValue === '') {
            dispatch({
              type: DELETE_LAST_EL_JOBSEARCHED_VALUE,
            });
          }
        }}
        onChange={(event) => {
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'jobInputValue',
            inputValue: event.target.value,
          });
        }}
      />
    </div>
  );
};

export default JobsInput;
