import * as types from '../constants/actionTypes';

const init = {
  isLoading: false,
  isLoggedIn: false,
  userInfo: null,
  error: '',
  credentials: {
    username: '',
    password: '',
  },
};

export default (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREDENTIALS_CHANGE:
      return {
        ...state,
        error: '',
        credentials: {
          ...state.credentials,
          [payload.credential]: payload.value,
        },
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: payload,
        credentials: init.credentials,
      };

    case types.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };

    default:
      return state;
  }
};
