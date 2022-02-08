import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '@components/common/form-controls/Input';

describe('Input tests', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<Input name="test" label="label" placeholder="placeholder" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
