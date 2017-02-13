import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/sessionActions';
import { LoginForm } from '../components';

const LoginPage = ({ error, isLoading, username, password, credentialsChange, login }) => {
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

    // prevent multiple submissions while login pending
    if (isLoading) return;

    login(username, password);
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
  isLoading: state.session.isLoading,
  username: state.session.credentials.username,
  password: state.session.credentials.password,
});

const mapDispatchToProps = (dispatch) => ({
  credentialsChange: credentials => dispatch(actions.credentialsChange(credentials)),
  login: (username, password) => dispatch(actions.login(username, password)),
});

LoginPage.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  credentialsChange: PropTypes.func,
  login: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
