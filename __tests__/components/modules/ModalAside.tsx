import React from 'react';
import { render } from '@testing-library/react';
import { ModalAside } from '@components/modules/ModalAside';
import { DomainDetailsContent } from '@components/modal-content/DomainDetailsContent';
import { ModalHeader } from '@components/modal-content/modal-aside/ModalHeader';
import { ModalFooter } from '@components/modal-content/modal-aside/ModalFooter';

describe('ModalAside tests', () => {
  const mockErrors = { test: 'Required' };
  const mockTouched = { test: true };
  const mockValues = { test: 'Test1' };

  it('Should render', () => {
    const { container } = render(
      <ModalAside
        isOpen
        header={<ModalHeader title="Test" onClose={jest.fn()} />}
        footer={<ModalFooter applyBtn="Test" onApply={jest.fn()} />}
      >
        <DomainDetailsContent
          values={mockValues}
          touched={mockTouched}
          errors={mockErrors}
          handleBlur={jest.fn()}
          handleChange={jest.fn()}
          handleSelectChange={jest.fn()}
        />
      </ModalAside>
    );
    expect(container.getElementsByClassName('modal').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <ModalAside
        isOpen
        header={<ModalHeader title="Test" onClose={jest.fn()} />}
        footer={<ModalFooter applyBtn="Test" onApply={jest.fn()} />}
      >
        <DomainDetailsContent
          values={mockValues}
          touched={mockTouched}
          errors={mockErrors}
          handleBlur={jest.fn()}
          handleChange={jest.fn()}
          handleSelectChange={jest.fn()}
        />
      </ModalAside>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
