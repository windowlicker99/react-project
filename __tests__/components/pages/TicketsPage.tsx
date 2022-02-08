import React from 'react';
import { render } from '@testing-library/react';
import { TicketsPage } from '@components/pages/TicketsPage';

describe('TicketsPage tests', () => {
  it('Should render', () => {
    const { container } = render(<TicketsPage />);
    expect(container.getElementsByClassName('content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<TicketsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
