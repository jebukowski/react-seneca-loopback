import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sessionActions';
import { LoginForm } from '../components';

const LoginPage = ({ error, username, password, credentialsChange }) => {
  const credentialHandler = (e) => {
    const { name, value } = e.target;

    credentialsChange({
      credential: name,
      value,
    });
  };

  const submissionHandler = (e) => {
    // prevent page reload
    e.preventDefault();

    // TODO: add submission/login functionality
  };

  return (
    <LoginForm
      error={error}
      username={username}
      password={password}
      credentialHandler={credentialHandler}
      submissionHandler={submissionHandler}
    />
  );
};

const mapStateToProps = state => ({
  error: state.session.error,
  username: state.session.credentials.username,
  password: state.session.credentials.password,
});

const mapDispatchToProps = (dispatch) => ({
  credentialsChange: credentials => dispatch(actions.credentialsChange(credentials)),
});

LoginPage.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  credentialsChange: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
