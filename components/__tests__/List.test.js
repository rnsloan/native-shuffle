import React from 'react';
import List from './List';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<List randomNumbers={[5,6,7,8]} />).toJSON();
  expect(rendered).toBeTruthy();
});
