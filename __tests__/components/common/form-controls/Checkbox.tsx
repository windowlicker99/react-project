import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '@components/common/form-controls/Checkbox';

jest.mock('nanoid');

describe('Checkbox tests', () => {
  it('Should render', () => {
    const { getByText } = render(<Checkbox name="test" label="Test" checked onChange={jest.fn} />);
    const text = getByText('Test');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Checkbox name="test" label="Test" checked onChange={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
