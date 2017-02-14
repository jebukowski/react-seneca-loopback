import moment from 'moment';
import fetch from 'isomorphic-fetch';

// base path of REST DB API
const path = 'http://0.0.0.0:3001/api/users';

export default function() {

  this.add({
    role: 'api',
    cmd: 'login',
  }, function(msg, done) {
    fetch(`${path}/findOne?filter={"where":{"username":"${msg.username}"}}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    })
    .then(response => response.json())
    .then(user => {
      let result = {
        isCorrect: false,
      };

      // user was found in db based on given username & password is correct
      if (!user.error && msg.password === user.password) {
        result = {
          isCorrect: true,
          userInfo: {
            id: user.id,
            username: user.username,
          },
        };
      }

      return done(null, result);
    })
    .catch(err => done(err));
  });

}
