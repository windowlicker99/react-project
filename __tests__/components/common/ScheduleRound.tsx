import React from 'react';
import { render } from '@testing-library/react';
import { ScheduleRound } from '@components/common/ScheduleRound';

describe('Property tests', () => {
  it('Should render', () => {
    const { container } = render(<ScheduleRound />);
    expect(container.getElementsByClassName('schedule-round').length).toEqual(
      1,
    );
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<ScheduleRound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
