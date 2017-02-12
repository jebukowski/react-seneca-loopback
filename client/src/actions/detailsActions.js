import * as types from '../constants/actionTypes';
import * as api from '../api';

const backendDetailsRequest = () => ({
  type: types.BACKEND_DETAILS_REQUEST,
});

const backendDetailsSuccess = payload => ({
  type: types.BACKEND_DETAILS_SUCCESS,
  payload,
});

const backendDetailsError = err => ({
  type: types.BACKEND_DETAILS_ERROR,
  payload: err.message,
  error: true,
});

export const getBackendDetails = () => async(dispatch) => {
  try {
    dispatch(backendDetailsRequest());

    const { details } = await api.details();

    dispatch(backendDetailsSuccess(details));
  } catch(err) {
    dispatch(backendDetailsError(err));
  }
};
