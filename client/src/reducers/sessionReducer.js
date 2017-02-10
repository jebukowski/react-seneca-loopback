import * as types from '../constants/actionTypes';

const init = {
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

    default:
      return state;
  }
};
