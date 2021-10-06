import
{
  TOGGLE_PRINT_SEARCH_FORM,
  CHANGE_INPUTS_VALUES,
} from './actions';

const initialState = {
  isSearchFormHidden: true,
  isDarkBodyColor: false,
  jobInputValue: '',
  locationInputValue: '',
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

    default:
      return state;
  }
};

export default reducer;
