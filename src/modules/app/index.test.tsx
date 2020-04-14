import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

test('render itinerary component', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('app')).toBeTruthy();
});