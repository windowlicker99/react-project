import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '@components/common/Logo';

describe('Logo tests', () => {
  it('Should render', () => {
    const { container } = render(<Logo />);
    expect(container.getElementsByClassName('logo').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
