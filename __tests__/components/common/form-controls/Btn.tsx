import React from 'react';
import { render } from '@testing-library/react';
import { Btn } from '@components/common/form-controls/Btn';

describe('Btn tests', () => {
  it('Should render with given test', () => {
    const { getByText } = render(
      <Btn btnStatus="" btnIcon="" btnText="Test" />,
    );
    const text = getByText('Test');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Btn btnStatus="" btnIcon="" btnText="Test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
