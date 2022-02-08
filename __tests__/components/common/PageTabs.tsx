import React from 'react';
import { render } from '@testing-library/react';
import { PageTabs } from '@components/common/PageTabs';

describe('PageTabs tests', () => {
  it('Should render', () => {
    const { getByText } = render(<PageTabs />);
    const text = getByText('Domains');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<PageTabs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
