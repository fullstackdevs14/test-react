import { combineReducers } from 'redux';
import ui, { uiInitialState } from './ui';
import alert, { alertInitialState } from './alert';

export const APP_INITIAL_STATE = {
  ui: uiInitialState,
  alert: alertInitialState
}

export default combineReducers({
  ui,
  alert
});
