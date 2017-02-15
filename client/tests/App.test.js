import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { App } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// child component fixture
const ChildComponent = () => {};

test('---- App component: renders properly', (t) => {
  renderer.render(
    <App><ChildComponent /></App>
  );

  const actual = renderer.getRenderOutput();
  const expected = <div><ChildComponent /></div>;

  t.jsxEquals(actual, expected);
  t.end();
});
