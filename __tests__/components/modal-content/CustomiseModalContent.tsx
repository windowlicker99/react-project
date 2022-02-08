import React from 'react';
import { render } from '@testing-library/react';
import { CustomiseModalContent } from '@components/modal-content/CustomiseModalContent';

describe('CustomiseModalContent tests', () => {
  const columns = [
    { label: 'Name', name: 'name' },
    { label: 'Date', name: 'date' },
  ];

  const formik = {
    values: { date: false, name: true },
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  };

  it('Should render', () => {
    const { container } = render(<CustomiseModalContent columns={columns} {...formik} />);
    expect(container.getElementsByClassName('customise-list').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<CustomiseModalContent columns={columns} {...formik} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
