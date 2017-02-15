import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { Button } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// child string & prop callback function fixtures
const string = 'test string';
const clickHandler = () => {};

test('---- Button component: renders properly', (t) => {
  renderer.render(
    <Button clickHandler={clickHandler}>{string}</Button>
  );

  const actual = renderer.getRenderOutput();
  const expected = (
    <button onClick={clickHandler} className="button">
      {string}
    </button>
  );

  t.jsxEquals(actual, expected);
  t.end();
});
