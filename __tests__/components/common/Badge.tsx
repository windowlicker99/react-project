import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '@components/common/Badge';

describe('Badge component tests', () => {
  it('Should render', () => {
    const { getByText } = render(<Badge badgeType="" badgeText="Test" />);
    const text = getByText(/Test/i);
    expect(text).toBeTruthy();
  });

  it('Should match shapshot', () => {
    const { asFragment } = render(<Badge badgeType="" badgeText="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
