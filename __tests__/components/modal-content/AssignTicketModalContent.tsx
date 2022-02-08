import React from 'react';
import { render } from '@testing-library/react';
import { AssignTicketModalContent } from '@components/modal-content/AssignTicketModalContent';

describe('AssignTicketModalContent tests', () => {
  const options = [{ label: 'User 1', value: '1' }];
  const values = { user: options[0], message: 'Test' };

  it('Should render', () => {
    const { container } = render(
      <AssignTicketModalContent values={values} options={options} onChange={jest.fn()} onSelectChange={jest.fn()} />
    );
    expect(container.getElementsByClassName('modal-info').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <AssignTicketModalContent values={values} options={options} onChange={jest.fn()} onSelectChange={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
