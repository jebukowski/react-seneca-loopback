import moment from 'moment';

export default function() {

  this.add({
    role: 'api',
    cmd: 'login',
  }, function(msg, done) {
    const { username, password } = msg;

    let result = {
      isCorrect: false,
      userInfo: null,
    };

    // correct credentials
    if (username === 'demo' && password === 'password1') {
      result = {
        isCorrect: true,
        // NOTE: user information that would be returned from db
        userInfo: {
          id: 1,
          username: 'demo',
        },
      };
    }

    done(null, result);
  });
}
