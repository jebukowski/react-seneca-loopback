import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { LoginForm, ErrorCard, Button } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// prop string and callback function fixtures
const error = 'error message';
const username = 'username';
const password = 'password';
const credentialHandler = () => {};
const submissionHandler = () => {};

test('---- LoginForm component: renders properly', (t) => {
  renderer.render(
    <LoginForm
      error={error}
      username={username}
      password={password}
      credentialHandler={credentialHandler}
      submissionHandler={submissionHandler}
    />
  );

  const actual = renderer.getRenderOutput();
  const expected = (
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

  t.jsxEquals(actual, expected);
  t.end();
});
