import React from 'react';
import { cleanup, render } from '@testing-library/react';
import StopPointList from '.';

describe('<StopPointList />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<StopPointList />);
    const stopPointList = getByTestId('StopPointList');

    expect(stopPointList).toBeInTheDocument();
  });
});