import moment from 'moment';

export default function() {

  this.add({
    role: 'api',
    cmd: 'details',
  }, function(msg, done) {
    const details = {
      nodeVersion: process.version,
      appPath: process.argv[1],
      dateAndTime: moment().format('LLL'),
    };

    done(null, details);
  });
}
