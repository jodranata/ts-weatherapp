import {
  GET_DATA,
  SET_ERROR,
  SET_LOADING,
  DataState,
  GetWeatherAction,
  SetErrorAction,
  DataAction,
} from '../types';

const INITAL_DATA: DataState = {
  data: null,
  errMsg: '',
  loading: false,
};

const handleGetData = (
  state: DataState,
  action: GetWeatherAction,
): DataState => ({
  ...state,
  data: action.payload,
  errMsg: '',
  loading: false,
});

const handleSetError = (
  state: DataState,
  action: SetErrorAction,
): DataState => ({
  ...state,
  data: null,
  errMsg: action.payload,
  loading: false,
});

const handleSetLoading = (state: DataState): DataState => ({
  ...state,
  errMsg: '',
  loading: true,
});

const dataReducer = (
  state: DataState = INITAL_DATA,
  action: DataAction,
): DataState => {
  switch (action.type) {
    case GET_DATA:
      return handleGetData(state, action);
    case SET_ERROR:
      return handleSetError(state, action);
    case SET_LOADING:
      return handleSetLoading(state);
    default:
      return state;
  }
};

export default dataReducer;
