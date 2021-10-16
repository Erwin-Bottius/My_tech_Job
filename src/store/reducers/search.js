import
{
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_SEARCHED_VALUE,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  TOGGLE_BACKDROP,
  CLEAR_JOBS,
  RESET_SEARCH_ERROR,
} from 'src/store/actions';

export const initialState = {
  isSearchFormHidden: true,
  jobInputValue: '',
  locationInputValue: '',
  locationSearched: '',
  jobSearched: '',
  jobs: [],
  backdropOpen: false,
  hasError: false,
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
    case CHANGE_SEARCHED_VALUE:
      return {
        ...state,
        [action.searched]: action.value,
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
        jobs: action.jobsResponse,
        backdropOpen: false,
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
