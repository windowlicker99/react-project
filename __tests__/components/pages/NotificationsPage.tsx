import React from 'react';
import { render } from '@testing-library/react';
import { NotificationsPage } from '@components/pages/NotificationsPage';

describe('NotificationsPage tests', () => {
  it('Should render', () => {
    const { container } = render(<NotificationsPage />);
    expect(container.getElementsByClassName('content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<NotificationsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
