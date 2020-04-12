import React from 'react';
import { cleanup, render } from '@testing-library/react';
import StopPointForm from '.';

describe('<StopPointForm />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<StopPointForm />);
    const stopPointForm = getByTestId('StopPointForm');

    expect(stopPointForm).toBeInTheDocument();
  });
});