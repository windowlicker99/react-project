import React from 'react';
import { render } from '@testing-library/react';
import { DateLabel } from '@components/common/DateLabel';

describe('Date tests', () => {
  it('Should render', () => {
    const today = new Date(2021, 10, 10);
    const { getByText } = render(<DateLabel date={today.toString()} />);
    const date = getByText('10/11/2021');
    expect(date).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const today = new Date(2021, 10, 10);
    const { asFragment } = render(<DateLabel date={today.toString()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
