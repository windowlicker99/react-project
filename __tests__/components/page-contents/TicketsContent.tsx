import React from 'react';
import { render } from '@testing-library/react';
import { TicketsContent } from '@components/page-contents/TicketsContent';

describe('TicketsContent tests', () => {
  it('Should render', () => {
    const { container } = render(<TicketsContent />);
    expect(container.getElementsByClassName('tickets-content').length).toEqual(
      1,
    );
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<TicketsContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
