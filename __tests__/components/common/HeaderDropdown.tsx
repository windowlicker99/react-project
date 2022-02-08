import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { HeaderDropdown } from '@components/common/HeaderDropdown';
import { store } from '@store/store';

describe('HeaderDropdown', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <HeaderDropdown />
      </Provider>
    );
    expect(container.getElementsByClassName('header-dropdown').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <HeaderDropdown />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
