import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { LoginForm } from '@components/page-contents/LoginForm';
import { IAuth } from '@interfaces/store';

interface IInitialState {
  auth: IAuth;
}

describe('LoginForm tests', () => {
  const mockStore = configureStore([]);

  it('Should render login form when user is unauthorized', () => {
    const initialState: IInitialState = {
      auth: {
        user: null,
      },
    };
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    expect(container.getElementsByClassName('login-content').length).toEqual(1);
  });

  it('Should redirect to "/" if user is authorized', () => {
    const initialState: IInitialState = {
      auth: {
        user: {
          name: 'test',
          id: 'g5y3fd',
          avatar: '',
        },
      },
    };
    const store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </BrowserRouter>
    );
    expect(global.window.location.pathname).toEqual('/');
  });
});
