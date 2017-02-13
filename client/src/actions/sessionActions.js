import { browserHistory } from 'react-router';
import * as types from '../constants/actionTypes';
import * as api from '../api';
import { getBackendDetails } from './detailsActions';

export const credentialsChange = credentials => ({
  type: types.CREDENTIALS_CHANGE,
  payload: {
    credential: credentials.credential,
    value: credentials.value,
  },
});

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const loginSuccess = userInfo => ({
  type: types.LOGIN_SUCCESS,
  payload: userInfo,
});

const loginError = err => ({
  type: types.LOGIN_ERROR,
  payload: err.message,
  error: true,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const login = (username, password) => async(dispatch) => {
  try {
    dispatch(loginRequest());

    const userInfo = await api.login(username, password);

    dispatch(loginSuccess(userInfo));
    dispatch(getBackendDetails());
    browserHistory.push('/welcome');
  } catch(err) {
    dispatch(loginError(err));
  }
};

export const logout = () => async(dispatch) => {
  dispatch(logoutSuccess());
  browserHistory.push('/');
};
