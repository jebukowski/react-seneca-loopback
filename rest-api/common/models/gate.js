'use strict';

const Promise = require('bluebird');
const seneca = require('seneca')();

const act = Promise.promisify(
  seneca.client({
    host: 'localhost',
    port: 8080,
  }).act, {
    context: seneca,
  }
);

module.exports = function(gate) {

  /*---------- define remote methods ----------*/
  gate.details = (cb) => {
    act({ role: 'api', cmd: 'details' })
      .then(details => cb(null, details))
      .catch(err => cb(err));
  };

  gate.login = (req, res, cb) => {
    const { username, password } = req.body;

    act({ role: 'api', cmd: 'login', username, password })
      .then(result => {
        if (result.isCorrect) {
          return res.status(200).send(result.userInfo);
        }

        return res.sendStatus(401);
      })
      .catch(err => res.sendStatus(500));
  };

  /*---------- register remote methods ----------*/
  gate.remoteMethod('details', {
    description: 'Backend details of application',
    returns: {
      arg: 'details',
      type: 'object',
    },
    http: {
      path: '/details',
      verb: 'get',
      status: '200',
      errorStatus: '500',
    },
  });

  gate.remoteMethod('login', {
    description: 'Login functionality',
    accepts: [
      {
        arg: 'req',
        type: 'object',
        http: {
          source: 'req',
        },
      },
      {
        arg: 'res',
        type: 'object',
        http: {
          source: 'res',
        },
      },
    ],
    returns: {
      arg: 'userInfo',
      type: 'object',
    },
    http: {
      path: '/login',
      verb: 'post',
    },
  });

};
