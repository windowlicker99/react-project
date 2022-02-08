import React from 'react';
import { render } from '@testing-library/react';
import { MessageModalContent } from '@components/modal-content/MessageModalContent';

describe('MessageModalContent tests', () => {
  it('Should render', () => {
    const { getByText } = render(<MessageModalContent />);
    const text = getByText('Mark All as Read');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<MessageModalContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
