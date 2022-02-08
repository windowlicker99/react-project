import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ElementsPage } from '@components/pages/ElementsPage';
import { store } from '@store/store';

describe('ElementsPage tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <ElementsPage />
      </Provider>
    );
    expect(container.getElementsByClassName('content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ElementsPage />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
