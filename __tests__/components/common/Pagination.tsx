import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { Pagination } from '@components/common/Pagination';

describe('Pagination tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    expect(container.getElementsByClassName('pagination').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
