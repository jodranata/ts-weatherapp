import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  dataState: dataReducer,
  alertState: alertReducer,
});

export default rootReducer;
