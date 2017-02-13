'use strict';

const moment = require('moment');

module.exports = function(gate) {

  /*---------- define remote methods ----------*/
  gate.details = (cb) => {
    const details = {
      nodeVersion: process.version,
      appPath: process.argv[1],
      dateAndTime: moment().format('LLL'),
    };

    cb(null, details);
  };

  gate.login = (req, res, cb) => {
    const { username, password } = req.body;

    if (username === 'demo' && password === 'password1') {
      // user information that would be returned from db
      const userInfo = {
        id: 1,
        username: 'demo',
      };

      res.status(200).send(userInfo);
    } else {
      res.sendStatus(401);
    }
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
