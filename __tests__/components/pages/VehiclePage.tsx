import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { store } from '@store/store';
import { VehiclePage } from '@components/pages/VehiclePage';
import HTTPService from '@services/HTTPService';

describe('VehiclePage tests', () => {
  const brands = [
    {
      id: '0',
      name: 'BMW',
    },
    {
      id: '1',
      name: 'Cadillac',
    },
  ];

  it('Should render', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/brands').reply(200, brands);

    jest.spyOn(HTTPService, 'get').mockResolvedValue(axios.get('/brands'));

    global.URL.revokeObjectURL = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <VehiclePage />
      </Provider>
    );
    await waitFor(() => expect(container.getElementsByClassName('content').length).toEqual(1));
  });

  it('Should match snapshot', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/brands').reply(200, brands);

    jest.spyOn(HTTPService, 'get').mockResolvedValue(axios.get('/brands'));

    global.URL.revokeObjectURL = jest.fn();
    const { asFragment } = render(
      <Provider store={store}>
        <VehiclePage />
      </Provider>
    );
    await waitFor(() => expect(asFragment()).toMatchSnapshot());
  });
});
