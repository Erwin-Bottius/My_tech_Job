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
  RESET_MIN_RANGE,
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
