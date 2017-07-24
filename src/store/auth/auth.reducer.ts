import { AuthActions } from './auth.actions';
import { AuthState } from './auth.models';
import { ActionType } from '../interfaces';
import { Employee } from '../../swagger/model/employee';

const initUser: Employee = {
  firstName: 'Anonymous',
  lastName: '',
  phoneNumber: '',
  username: null,
  email: '',
  emailVerified: false,
  id: null
};

const initialState: AuthState = {
  isAuthenticated: false,
  access_token: '',
  profile: initUser
};

export const authReducer = (state: AuthState = initialState, action: ActionType): AuthState => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return Object.assign({}, state, action.payload);
    case AuthActions.LOGOUT:
      return Object.assign({}, state, action.payload);
    case AuthActions.LOGIN_SUCCESS:
      return Object.assign({}, state, action.payload);
    case AuthActions.LOGIN_ERROR:
      return Object.assign({}, state, action.payload);
    case AuthActions.LOGOUT_SUCCESS:
      return Object.assign({}, state, action.payload);
    case AuthActions.LOGOUT_ERROR:
      return Object.assign({}, state, action.payload);
    case AuthActions.SIGNUP:
      return Object.assign({}, state, action.payload);
    case AuthActions.SIGNUP_SUCCESS:
      return Object.assign({}, state, action.payload);
    case AuthActions.SIGNUP_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
