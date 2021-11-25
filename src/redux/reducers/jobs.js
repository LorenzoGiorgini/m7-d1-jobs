import { GET_JOBS, STOP_LOADING, SET_SEARCH } from "../actions/actions";
import { initialState } from "../store/store";

const jobsReducer = (state = initialState.home, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: payload,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;