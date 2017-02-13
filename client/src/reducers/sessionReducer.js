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
      return Object.assign({}, state, {
        error: '',
        credentials: Object.assign({}, state.credentials, {
          [payload.credential]: payload.value,
        }),
      });

    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        error: '',
      });

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        userInfo: payload,
      });

    case types.LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: payload,
      });

    default:
      return state;
  }
};
