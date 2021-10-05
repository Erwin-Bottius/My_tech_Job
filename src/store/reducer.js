import { TOGGLE_PRINT_SEARCH_FORM } from './actions';

const initialState = {
  isSearchFormHidden: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRINT_SEARCH_FORM:
      return {
        ...state,
        isSearchFormHidden: false,
      };

    default:
      return state;
  }
};

export default reducer;
