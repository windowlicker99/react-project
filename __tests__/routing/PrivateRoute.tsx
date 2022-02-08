import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { PrivateRoute } from '@routing/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('PrivateRoute tests', () => {
  it('Should render heading when user is authorized', () => {
    const mockStore = configureStore([]);
    const initialState = {
      auth: {
        user: {
          name: 'test',
        },
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PrivateRoute path="" component={() => <h1 className="test">Test</h1>} />
        </Provider>
      </BrowserRouter>
    );

    const text = getByText(/Test/i);
    expect(text).toBeTruthy();
  });
});
