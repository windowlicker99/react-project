import React from 'react';
import { render } from '@testing-library/react';
import { BadgeRound } from '@components/common/BadgeRound';

describe('BadgeRound component tests', () => {
  it('Should render with className with given color', () => {
    const { container } = render(<BadgeRound color="red" />);
    expect(container.getElementsByClassName('badge-round red').length).toEqual(1);
  });

  it('Should match shapshot', () => {
    const { asFragment } = render(<BadgeRound color="red" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
