import React from 'react';
import { render } from '@testing-library/react';
import { QuestionnaireModalContent } from '@components/modal-content/QuestionnaireModalContent';

describe('QuestionnaireModalContent tests', () => {
  it('Should render', () => {
    const { container } = render(<QuestionnaireModalContent />);
    expect(
      container.getElementsByClassName('questionnaire-list').length,
    ).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<QuestionnaireModalContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
