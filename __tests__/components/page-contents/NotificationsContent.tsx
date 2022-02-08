import React from 'react';
import { render } from '@testing-library/react';
import { NotificationsContent } from '@components/page-contents/NotificationsContent';

describe('NotificationsContent tests', () => {
  it('Should render', () => {
    const { container } = render(<NotificationsContent />);
    expect(
      container.getElementsByClassName('notifications-content').length,
    ).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<NotificationsContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
