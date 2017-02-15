import '../tools/testSetup';

import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
import { ErrorCard } from '../src/components';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// child string fixture
const string = 'test string';

test('---- ErrorCard component: renders properly', (t) => {
  renderer.render(
    <ErrorCard>{string}</ErrorCard>
  );

  const actual = renderer.getRenderOutput();
  const expected = (
    <div className="error-card">
      <p>{string}</p>
    </div>
  );

  t.jsxEquals(actual, expected);
  t.end();
});
