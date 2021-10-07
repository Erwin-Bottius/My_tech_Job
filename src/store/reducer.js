import
{
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_SEARCHED_VALUE,
  ADD_JOBS,
  CLEAR_JOBS,
  TOGGLE_BACKDROP,
} from './actions';

const initialState = {
  isSearchFormHidden: true,
  jobInputValue: '',
  locationInputValue: '',
  locationSearched: '',
  jobSearched: '',
  jobs: [],
  backdropOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRINT_SEARCH_FORM:
      return {
        ...state,
        isSearchFormHidden: !state.isSearchFormHidden,
      };

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
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.jobsResponse],
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
      };
    default:
      return state;
  }
};

export default reducer;
