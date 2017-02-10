import React, { PropTypes } from 'react';
import { ErrorCard, Button } from './';

const LoginForm = ({ error, username, password, credentialHandler, submissionHandler }) => (
  <div>
    <h1>Login</h1>
    <form onSubmit={submissionHandler}>
      {error && <ErrorCard>{error}</ErrorCard>}
      <fieldset>
        <label htmlFor="username">
          Username
        </label>&nbsp;
        <input
          type="text"
          id="username"
          name="username"
          placeholder="johndoe"
          onChange={credentialHandler}
          value={username}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">
          Password
        </label>&nbsp;
        <input
          type="password"
          id="password"
          name="password"
          placeholder="myPassword123"
          onChange={credentialHandler}
          value={password}
        />
      </fieldset>
      <fieldset className="button-fieldset">
        <Button>Login</Button>
      </fieldset>
    </form>
  </div>
);

LoginForm.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  credentialHandler: PropTypes.func,
  submissionHandler: PropTypes.func,
};

export default LoginForm;
