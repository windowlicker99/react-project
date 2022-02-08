import React from 'react';
import { render } from '@testing-library/react';
import { CarCard } from '@components/common/CarCard';
import { EPhase } from '@interfaces/enums';

describe('CardCard tests', () => {
  it('Should render', () => {
    const { getByText } = render(
      <CarCard platform="Platform" name="Audi" currentPhase={EPhase.development} logo="" photo="" model="test" />
    );
    const span = getByText('Audi');
    expect(span).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <CarCard platform="Platform" name="test" currentPhase={EPhase.development} logo="" photo="" model="test" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
