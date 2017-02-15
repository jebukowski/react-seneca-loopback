import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { Details } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// prop string fixtures
const nodeVersion = 'v7.4.0';
const appPath = '/some/path';
const dateAndTime = 'January 1, 2017 12:00 PM';

test('---- Details component: renders properly', (t) => {
  renderer.render(
    <Details
      nodeVersion={nodeVersion}
      appPath={appPath}
      dateAndTime={dateAndTime}
    />
  );

  const actual = renderer.getRenderOutput();
  const expected = (
    <div>
      <p><b>Node Version:</b> {nodeVersion}</p>
      <p><b>App Path:</b> {appPath}</p>
      <p><b>Date and Time:</b> {dateAndTime}</p>
    </div>
  );

  t.jsxEquals(actual, expected);
  t.end();
});
