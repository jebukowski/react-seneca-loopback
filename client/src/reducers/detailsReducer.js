import * as types from '../constants/actionTypes';

const init = {
  isLoading: false,
  error: '',
  nodeVersion: '',
  appPath: '',
  dateAndTime: '',
};

export default (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.BACKEND_DETAILS_REQUEST:
      return Object.assign({}, state , {
        isLoading: true,
        error: '',
      });

    case types.BACKEND_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        nodeVersion: payload.nodeVersion,
        appPath: payload.appPath,
        dateAndTime: payload.dateAndTime,
      });

    case types.BACKEND_DETAILS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: payload,
      });

    default:
      return state;
  }
};
