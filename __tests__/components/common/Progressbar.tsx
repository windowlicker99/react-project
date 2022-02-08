import React from 'react';
import { render } from '@testing-library/react';
import { Progressbar } from '@components/common/Progressbar';

describe('Progressbar tests', () => {
  it('Should render', () => {
    const { getByText } = render(
      <Progressbar progressInfo="info" progressTitle="Title" />,
    );
    const span = getByText('Title');
    expect(span).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Progressbar progressInfo="info" progressTitle="Title" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
