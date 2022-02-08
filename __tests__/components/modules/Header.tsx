import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Header } from '@components/modules/Header';
import { store } from '@store/store';

describe('Header tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Header title="test" />
      </Provider>
    );
    expect(container.getElementsByClassName('header').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Header title="test" />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Logout should redirect to "/"', () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        user: {
          name: 'test',
          id: 'g5y3fd',
          avatar: '',
        },
      },
      header: {
        subtitles: [''],
      },
    };
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Header title="test" />
      </Provider>
    );
    const button = getByText(/Log Out/i);
    button.click();
    expect(global.window.location.pathname).toEqual('/');
  });
});
