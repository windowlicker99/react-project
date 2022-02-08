import React from 'react';
import { render } from '@testing-library/react';
import { Property } from '@components/common/Property';

describe('Property tests', () => {
  it('Should render', () => {
    const { container } = render(<Property />);
    expect(container.getElementsByClassName('property').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Property />);
    expect(asFragment()).toMatchSnapshot();
  });
});
