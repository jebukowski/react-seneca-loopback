import * as types from '../constants/actionTypes';

export const credentialsChange = credentials => ({
  type: types.CREDENTIALS_CHANGE,
  payload: {
    credential: credentials.credential,
    value: credentials.value,
  },
});
