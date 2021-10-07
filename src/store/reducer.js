import
{
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
  CHANGE_SEARCHED_VALUE,
} from './actions';

const initialState = {
  isSearchFormHidden: true,
  jobInputValue: '',
  locationInputValue: '',
  locationSearched: '',
  jobSearched: '',
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

    default:
      return state;
  }
};

export default reducer;
