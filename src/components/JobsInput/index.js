// IMPORT NPM
import { useDispatch, useSelector } from 'react-redux';
import {
  Chip, InputBase, useMediaQuery, Paper,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// IMPORT FICHIERS
import {
  DELETE_EL_JOBSEARCHED_VALUE,
  CHANGE_JOBSEARCHED_VALUE,
  CHANGE_INPUTS_VALUES,
  DELETE_LAST_EL_JOBSEARCHED_VALUE,
} from 'src/store/actions';
import useStyles from './style';

const JobsInput = () => {
  const isMobile = useMediaQuery('(max-width:800px)');
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  // Ici nous utilisons useState, car pour la gestion des champs controlés avec material ui
  // nous avons besoin d'un state pour l'autocomplete et un pour l'input
  // Cependant le state de l'autocomplete ne sera utile qu'a l'interieur de ce componsant
  const [autoCompleteJobValue, setAutocompleteJobValue] = useState('');
  const jobSearched = useSelector((state) => state.search.jobSearched);
  const jobInputValue = useSelector((state) => state.search.jobInputValue);

  // Fonction qui supprimera le chip (tag a l'interieur de l'input)
  const handleDeleteChip = (chipToDelete) => {
    dispatch({
      type: DELETE_EL_JOBSEARCHED_VALUE,
      deletedJob: chipToDelete,
    });
  };
  // ***************** Version Mobile ************************
  if (isMobile) {
    return (
      <Autocomplete
        id="custom-input-demo"
        freeSolo
        options={jobInputValue ? [jobInputValue] : []}
        autoComplete
        value={autoCompleteJobValue}
        ListboxProps={{
          style:
          {
            maxHeight: '10rem',
            minHeight: '6rem',
          },
        }}
        PaperComponent={(props) => (
          <Paper
            {...props}
            className={jobInputValue && classes.listBox__container__mobile}
            placement="bottom"
          />
        )}
        onChange={(event, newValue) => {
          if (newValue && jobSearched.length < 3) {
            setAutocompleteJobValue(newValue);
            // On ajoute les valeurs de l'input job au state jobSearched (tableau)
            dispatch({
              type: CHANGE_JOBSEARCHED_VALUE,
              jobSearched: newValue,
            });
            // puis on reset l'input et l'autocomplete
            dispatch({
              type: CHANGE_INPUTS_VALUES,
              field: 'jobInputValue',
              inputValue: '',
            });
          }
          setAutocompleteJobValue('');
        }}
        inputValue={jobInputValue}
        onInputChange={(event, newInputValue) => {
          if (jobSearched.length < 3) {
            dispatch({
              type: CHANGE_INPUTS_VALUES,
              field: 'jobInputValue',
              inputValue: newInputValue,
            });
          }
        }}
        // eslint-disable-next-line consistent-return
        renderOption={(options) => {
          if (options.length > 0) {
            return (
              <div className={classes.optionLabel}>
                <Chip
                  className={classes.optionLabel__chip}
                  label={` Ajouter ${options}...`}
                />
              </div>
            );
          }
        }}
        renderInput={(params) => (
          <div
            className={classes.jobsInput__container}
            ref={params.InputProps.ref}
          >
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
              {...params.inputProps}
              className={classes.jobsInput}
              placeholder="langage, framework..."
              variant="outlined"
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
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                }
                // Si l'utilisaeur appui sur backspace, et que l'input est vide,
                // on supprime le dernier Chip
                else if (event.key === 'Backspace' && jobInputValue === '') {
                  dispatch({
                    type: DELETE_LAST_EL_JOBSEARCHED_VALUE,
                  });
                }
              }}
            />
          </div>
        )}
      />

    );
  }
  // **************** Version Desktop *************************************
  return (
    <Autocomplete
      id="custom-input-demo"
      freeSolo
      autoComplete
      className={
        location.pathname === '/'
          ? classes.autocomplete__jobInput : ''
      }
      options={jobInputValue ? [jobInputValue] : []}
      value={autoCompleteJobValue}
      PaperComponent={(props) => (
        <Paper
          {...props}
          className={
            (jobInputValue
            && location.pathname === '/'
            && classes.listBox__container)
            || (
              jobInputValue
            && location.pathname !== '/'
            && classes.listBox__container__result
            )

}
          placement="bottom"
        />
      )}
      ListboxProps={{
        style:
        {
          maxHeight: '10rem',
          minHeight: '3rem',

        },
      }}
      onChange={(event, newValue) => {
        if (newValue && jobSearched.length < 3) {
          setAutocompleteJobValue(newValue);
          // On ajoute les valeurs de l'input job au state jobSearched (tableau)
          dispatch({
            type: CHANGE_JOBSEARCHED_VALUE,
            jobSearched: newValue,
          });
          // puis on reset l'input et l'autocomplete
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'jobInputValue',
            inputValue: '',
          });
        }
        setAutocompleteJobValue('');
      }}
      inputValue={jobInputValue}
      onInputChange={(event, newInputValue) => {
        if (jobSearched.length < 3) {
          dispatch({
            type: CHANGE_INPUTS_VALUES,
            field: 'jobInputValue',
            inputValue: newInputValue,
          });
        }
      }}
      // eslint-disable-next-line consistent-return
      renderOption={(options) => {
        if (options.length > 0) {
          return (
            <div className={classes.optionLabel}>
              <Chip
                className={
                  location.pathname === '/'
                    ? classes.optionLabel__chip__desktop
                    : classes.optionLabel__chip__desktop__result
                }
                label={` Ajouter ${options}...`}
              />
            </div>
          );
        }
      }}
      renderInput={(params) => (
        <div
          className={classes.jobsInput__container_desktop_result}
          ref={params.InputProps.ref}
        >
          <ul className={location.pathname === '/'
            ? classes.jobsInput__ul_desktop
            : classes.jobsInput__ul_desktop_result}
          >
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
            {...params.inputProps}
            className={classes.jobsInput}
            placeholder="Langages, Frameworks..."
            variant="outlined"
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
              if ((event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
              }
              // Si l'utilisaeur appui sur backspace, et que l'input est vide,
              // on supprime le dernier Chip
              else if (event.key === 'Backspace' && jobInputValue === '') {
                dispatch({
                  type: DELETE_LAST_EL_JOBSEARCHED_VALUE,
                });
              }
            }}
          />
        </div>
      )}
    />
  );
};

export default JobsInput;
