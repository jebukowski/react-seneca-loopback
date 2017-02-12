import fetch from 'isomorphic-fetch';

// base path of REST API
const path = 'http://0.0.0.0:3000/api/gates';

const checkResponseStatus = (response, desiredStatus) => {
  // proper status
  if (response.status === desiredStatus) {
    return response.json();
  }

  // error
  return response.json()
    .then(body => {
      throw new Error(body.error.message);
    });
};

export const details = () => {
  return fetch(`${path}/details`, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  })
  .then(response => checkResponseStatus(response, 200));
};
