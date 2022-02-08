import React from 'react';
import { render } from '@testing-library/react';
import { ModalCenter } from '@components/modules/ModalCenter';

describe('ModalCenter tests', () => {
  it('Should render', () => {
    const { container } = render(<ModalCenter title="Test" isOpen onApply={jest.fn()} onClose={jest.fn()} />);
    expect(container.getElementsByClassName('modal').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<ModalCenter title="Test" isOpen onApply={jest.fn()} onClose={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
