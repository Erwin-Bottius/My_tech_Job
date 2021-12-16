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
  TOGGLE_PRINT_FILTERS_MODAL,
  SET_CONTRACTTYPE_VALUE,
  GET_CITYCODE_GEOLOCATION_SUCCESS,
  SET_STATUSCODE,
  SET_GEOLOCATION_LOADING,
  SET_ISSELECTED_JOB,
  TOGGLE_FILTER_POPUP,
} from 'src/store/actions';

export const initialState = {
  isSearchFormHidden: true,
  isFiltersModalHidden: true,
  statusCode: '',
  jobInputValue: '',
  locationInputValue: '',
  cityCode: '',
  locationSearched: '',
  jobSearched: [],
  jobs: [],
  backdropOpen: false,
  hasError: false,
  requestMinRange: 0,
  geolocationLoading: false,
  filters: {
    contractTypeValue: '',
    experienceValue: '',
  },
  filtersPopup: {
    isContractPopup: false,
    isExperiencePopup: false,
  },
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
      // Ici nous ajoutons le chip correspondant à la valeur de l'input dans le tableau,
      // tout en nous assurant de remplacer tous les accents éventuels
      return {
        ...state,
        jobSearched: [...state.jobSearched, action.jobSearched.normalize('NFD').replace(/[\u0300-\u036f]/g, '')],
      };
    case DELETE_EL_JOBSEARCHED_VALUE: {
      // Ici on supprime l'élément du tableau qui a été surpprimé par l'utilisateur
      const newJobSearched = state.jobSearched.filter((element) => element !== action.deletedJob);
      return {
        ...state,
        jobSearched: newJobSearched,
      };
    }
    // Ici on supprime le dernier chip, lorsque l'utilisateur appui sur la basckspace
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
    case TOGGLE_PRINT_FILTERS_MODAL:
      return {
        ...state,
        isFiltersModalHidden: !state.isFiltersModalHidden,

      };
    case SET_CONTRACTTYPE_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.formName]: action.newValue,
        },
      };
    case GET_CITYCODE_GEOLOCATION_SUCCESS:
      return {
        ...state,
        cityCode: action.cityCode,
      };
    case SET_STATUSCODE:
      return {
        ...state,
        statusCode: action.statusCode,
      };
    case SET_GEOLOCATION_LOADING:
      return {
        ...state,
        geolocationLoading: !state.geolocationLoading,
      };
    case SET_ISSELECTED_JOB: {
      // Ici nous renvoyons le tableaux de toutes les offres d'empois,
      // toutes les offres ont le isSelected a false sauf l'offre qui
      // a été clické par le user
      const jobs = state.jobs.map((element) => {
        // eslint-disable-next-line eqeqeq
        if (element.id == action.jobId) {
          return {
            ...element,
            isSelected: true,
          };
        }
        return {
          ...element,
          isSelected: false,
        };
      });
      return {
        ...state,
        jobs,
      };
    }
    case TOGGLE_FILTER_POPUP:
      return {
        ...state,
        filtersPopup: {
          ...state.filtersPopup,
          [action.popup]: !state.filtersPopup[action.popup],
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
