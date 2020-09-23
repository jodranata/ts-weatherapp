export const GET_DATA = 'GET_DATA';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const SET_LOADING = 'SET_LOADING';

export interface WeatherDetail {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherError {
  cod: number;
  message: string;
}

export interface GetWeatherAction {
  type: typeof GET_DATA;
  payload: WeatherDetail;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type DataAction = GetWeatherAction | SetErrorAction | SetLoadingAction;

export interface DataState {
  data: WeatherDetail | null;
  errMsg: string;
  loading: boolean;
}

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
