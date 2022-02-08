import React from 'react';
import { render } from '@testing-library/react';
import { NotificationIcon } from '@components/common/NotificationIcon';

describe('NotificationIcon tests', () => {
  it('Should render', () => {
    const { container } = render(<NotificationIcon />);
    expect(
      container.getElementsByClassName('notification-icon').length,
    ).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<NotificationIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
