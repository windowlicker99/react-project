/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ArchitectureControls } from '@components/page-contents/ArchitectureControls';
import { store } from '@store/store';
import { initialVehicle } from '@/constants/initialData';

describe('ArchitectureControls tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <ArchitectureControls
          vehicle={initialVehicle}
          onOpenDomainModalClick={jest.fn()}
          onOpenHistoryView={jest.fn()}
        />
      </Provider>
    );
    expect(container.getElementsByClassName('page-controls-content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ArchitectureControls
          vehicle={initialVehicle}
          onOpenDomainModalClick={jest.fn()}
          onOpenHistoryView={jest.fn()}
        />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
