import React from 'react';
import { render } from '@testing-library/react';
import { Link } from '@components/common/form-controls/Link';

describe('Link tests', () => {
  it('Should render', () => {
    const { getByText } = render(<Link linkIcon="" linkText="Test" />);
    const text = getByText('Test');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Link linkIcon="" linkText="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
