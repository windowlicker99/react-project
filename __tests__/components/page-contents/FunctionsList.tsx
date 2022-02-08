import React from 'react';
import { render } from '@testing-library/react';
import { FunctionsListContent } from '@components/page-contents/FunctionsListContent';

describe('FunctionsList tests', () => {
  it('Should render', () => {
    const { container } = render(<FunctionsListContent />);
    expect(container.getElementsByClassName('elements-content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<FunctionsListContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
