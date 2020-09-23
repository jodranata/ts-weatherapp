import { SET_ALERT, AlertAction, AlertState } from '../types';

const INITIAL_DATA: AlertState = {
  message: '',
};

const handleSetAlert = (
  state: AlertState,
  action: AlertAction,
): AlertState => ({
  ...state,
  message: action.payload,
});

const alertReducer = (
  state: AlertState = INITIAL_DATA,
  action: AlertAction,
): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return handleSetAlert(state, action);
    default:
      return state;
  }
};

export default alertReducer;
