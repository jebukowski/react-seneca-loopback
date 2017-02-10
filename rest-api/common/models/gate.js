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

};
