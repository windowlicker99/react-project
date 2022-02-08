import React from 'react';
import { render } from '@testing-library/react';
import { TicketsPreview } from '@components/common/TicketsPreview';

describe('TicketsPreview tests', () => {
  it('Should render', () => {
    const { getByText } = render(<TicketsPreview vehicleId="0" />);
    const text = getByText('Tickets');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<TicketsPreview vehicleId="0" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
