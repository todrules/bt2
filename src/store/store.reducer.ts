import { Reducer, Action, combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { authReducer } from './auth/auth.reducer';

export interface RootStatus {
  auth?: any;
}

export const statusReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    auth: authReducer
  }));
