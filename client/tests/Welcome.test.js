import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { Welcome, ErrorCard, Button, Details } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// prop string, number, and callback function fixtures
const error = 'error message';
const username = 'username';
const id = 1;
const nodeVersion = 'v7.4.0';
const appPath = '/some/path';
const dateAndTime = 'January 1, 2017 12:00 PM';
const logout = () => {};

test('---- Welcome component: renders properly', (t) => {
  renderer.render(
    <Welcome
      error={error}
      username={username}
      id={id}
      nodeVersion={nodeVersion}
      appPath={appPath}
      dateAndTime={dateAndTime}
      logout={logout}
    />
  );

  const actual = renderer.getRenderOutput();
  const expected = (
    <div>
      <h1>Welcome!</h1>
      {error && <ErrorCard>{error}</ErrorCard>}
      <div className="welcome">
        <div>
          <p><b>Username:</b> {username}</p>
          <p><b>ID:</b> {id}</p>
          {nodeVersion && <Details
            nodeVersion={nodeVersion}
            appPath={appPath}
            dateAndTime={dateAndTime}
          />}
        </div>
      </div>
      <Button clickHandler={logout}>Logout</Button>
    </div>
  );

  t.jsxEquals(actual, expected);
  t.end();
});
