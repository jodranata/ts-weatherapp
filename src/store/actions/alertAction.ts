import { Dispatch } from 'redux';
import { SET_ALERT, AlertAction } from '../types';

const setAlertAction = (msg: string) => (
  dispatch: Dispatch<AlertAction>,
): AlertAction => {
  return dispatch({ type: SET_ALERT, payload: msg });
};

export default setAlertAction;
