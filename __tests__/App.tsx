import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../src/store/store';
import { App } from '../src/App';

describe('App component tests', () => {
  // it('Should render', () => {
  //   const { getByText } = render(<App />);
  //   const title = getByText(/App page/i);
  //   expect(title).toBeTruthy();
  // });

  it('Should match shapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
