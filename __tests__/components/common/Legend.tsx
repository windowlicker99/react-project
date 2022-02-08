import React from 'react';
import { render } from '@testing-library/react';
import { Legend } from '@components/common/Legend';

describe('Legend tests', () => {
  it('Should render', () => {
    const { getByText } = render(<Legend isDisabled={false} legendType="" legendName="Test" />);
    const text = getByText('Test');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Legend isDisabled={false} legendType="" legendName="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
