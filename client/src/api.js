import fetch from 'isomorphic-fetch';

// base path of REST API
const path = 'http://0.0.0.0:3000/api/gates';

const checkResponseStatus = (response, desiredStatus, usedCallback) => {
  // proper status
  if (response.status === desiredStatus) {
    return response.json();
  }

  // error
  if (usedCallback) {
    return response.json()
      .then(body => {
        throw new Error(body.error.message);
      });
  }

  return response.text()
    .then(message => {
      throw new Error(message);
    });
};

export const details = () => {
  return fetch(`${path}/details`, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  })
  .then(response => checkResponseStatus(response, 200, true));
};

export const login = (username, password) => {
  return fetch(`${path}/login`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  .then(response => checkResponseStatus(response, 200, false));
};
