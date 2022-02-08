import React from 'react';
import { render } from '@testing-library/react';
import { PageControls } from '@components/page-contents/PageControls';

describe('PageControls tests', () => {
  it('Should render', () => {
    const { container } = render(<PageControls />);
    expect(container.getElementsByClassName('page-controls').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<PageControls />);
    expect(asFragment()).toMatchSnapshot();
  });
});
