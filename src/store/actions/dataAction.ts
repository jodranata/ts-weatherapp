import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store';
import {
  DataAction,
  WeatherDetail,
  WeatherError,
  SET_LOADING,
  SET_ERROR,
  GET_DATA,
} from '../types';

const FetchDataAction = (
  city: string,
): ThunkAction<void, RootState, unknown, DataAction> => (
  dispatch: Dispatch<DataAction>,
) => {
  dispatch({ type: SET_LOADING });
  const proxy = `https://cors-anywhere.herokuapp.com/`;
  const apiUrl = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`;

  axios
    .get(apiUrl)
    .then((res: AxiosResponse<WeatherDetail>) =>
      dispatch({ type: GET_DATA, payload: res.data }),
    )
    .catch((err: AxiosError<WeatherError>) =>
      dispatch({
        type: SET_ERROR,
        payload: err.response?.data.message || '',
      }),
    );
};

export default FetchDataAction;
