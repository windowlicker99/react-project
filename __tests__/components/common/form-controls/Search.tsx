import React from 'react';
import { render } from '@testing-library/react';
import { Search } from '@components/common/form-controls/Search';

describe('Search tests', () => {
  it('Should render', () => {
    const { getByLabelText } = render(
      <Search formLabel="label" formPlaceholder="placeholder" />,
    );
    const text = getByLabelText('label');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Search formLabel="label" formPlaceholder="placeholder" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
