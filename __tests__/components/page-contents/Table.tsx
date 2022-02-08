/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Table } from '@components/page-contents/Table';
import { ETableTypes } from '@interfaces/interfaces';
import { store } from '@store/store';

describe('Table tests', () => {
  const columns = [
    {
      Header: 'test',
      accessor: 'test',
    },
  ];

  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <Table changeLoadingState={jest.fn()} columns={columns} tableType={ETableTypes.domains} showHeader />
      </Provider>
    );
    expect(container.getElementsByClassName('table').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Table changeLoadingState={jest.fn()} columns={columns} tableType={ETableTypes.domains} showHeader />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
