import React from 'react';
import { render } from '@testing-library/react';
import { PageMock } from '@components/page-contents/PageMock';

describe('PageMock tests', () => {
  it('Should render', () => {
    const { getByText } = render(<PageMock />);
    const text = getByText(/No Data/i);
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<PageMock />);
    expect(asFragment()).toMatchSnapshot();
  });
});
