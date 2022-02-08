import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { Footer } from '@components/modules/Footer';

describe('Footer tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(container.getElementsByClassName('footer').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Footer />{' '}
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
