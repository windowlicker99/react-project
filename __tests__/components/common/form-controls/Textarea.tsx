import React from 'react';
import { render } from '@testing-library/react';
import { Textarea } from '@components/common/form-controls/Textarea';

describe('Textarea tests', () => {
  it('Should render', () => {
    const { getByText } = render(
      <Textarea value="" label="Tell us your story:" name="story" placeholder="Add a message (optional)" />
    );
    const text = getByText('Tell us your story:');
    expect(text).toBeTruthy();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Textarea value="" label="Tell us your story:" name="story" placeholder="Add a message (optional)" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
