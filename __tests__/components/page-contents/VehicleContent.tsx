import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { VehicleContent } from '@components/page-contents/VehicleContent';
import { store } from '@store/store';

describe('VehicleContent tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <VehicleContent changeLoadingState={jest.fn()} />
      </Provider>
    );
    expect(container.getElementsByClassName('box-table').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <VehicleContent changeLoadingState={jest.fn()} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
