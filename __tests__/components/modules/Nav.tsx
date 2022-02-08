import React from 'react';
import { render } from '@testing-library/react';
import { Nav } from '@components/modules/Nav';

describe('Nav tests', () => {
  it('Should render', () => {
    const { container } = render(<Nav />);
    expect(container.getElementsByClassName('nav').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
