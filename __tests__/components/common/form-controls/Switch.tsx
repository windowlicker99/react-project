import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '@components/common/form-controls/Switch';

describe('Switch tests', () => {
  it('Should render', () => {
    const { getByText } = render(<Switch label="Test" />);
    const text = getByText('Test');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Switch label="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
