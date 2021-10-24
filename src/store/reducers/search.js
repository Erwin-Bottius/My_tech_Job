import
{
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_LOCATIONSEARCHED_VALUE,
  CHANGE_JOBSEARCHED_VALUE,
  RESET_JOBSEARCHED_VALUE,
  DELETE_EL_JOBSEARCHED_VALUE,
  DELETE_LAST_EL_JOBSEARCHED_VALUE,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  RESET_SEARCH_ERROR,
  RESET_MIN_RANGE,
} from 'src/store/actions';

export const initialState = {
  isSearchFormHidden: true,
  jobInputValue: '',
  locationInputValue: '',
  locationSearched: '',
  jobSearched: [],
  jobs: [],
  backdropOpen: false,
  hasError: false,
  requestMinRange: 0,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRINT_SEARCH_FORM: {
      return {
        ...state,
        isSearchFormHidden: !state.isSearchFormHidden,
      };
    }
    case CHANGE_INPUTS_VALUES:
      return {
        ...state,
        [action.field]: action.inputValue,
      };
    case CHANGE_LOCATIONSEARCHED_VALUE:
      return {
        ...state,
        locationSearched: action.locationSearched,
      };
    case CHANGE_JOBSEARCHED_VALUE:
      return {
        ...state,
        jobSearched: [...state.jobSearched, action.jobSearched],
      };
    case DELETE_EL_JOBSEARCHED_VALUE: {
      // Ici on supprime l'élément du tableau qui a été surpprimé par l'utilisateur
      const newJobSearched = state.jobSearched.filter((element) => element !== action.deletedJob);
      return {
        ...state,
        jobSearched: newJobSearched,
      };
    }
    case DELETE_LAST_EL_JOBSEARCHED_VALUE: {
      // Ici on supprime le dernier élément du tableau qui a été surpprimé par l'utilisateur
      const newJobSearched = [...state.jobSearched];
      newJobSearched.pop();
      return {
        ...state,
        jobSearched: newJobSearched,
      };
    }
    case RESET_JOBSEARCHED_VALUE:
      return {
        ...state,
        jobSearched: [],
      };
    case TOGGLE_BACKDROP:
      return {
        ...state,
        backdropOpen: !state.backdropOpen,
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.jobsResponse],
        requestMinRange: state.requestMinRange + 15,
        backdropOpen: false,
      };
    case RESET_MIN_RANGE:
      return {
        ...state,
        requestMinRange: 0,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        backdropOpen: false,
        hasError: true,
      };
    case RESET_SEARCH_ERROR:
      return {
        ...state,
        hasError: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
