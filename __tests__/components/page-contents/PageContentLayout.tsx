import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { PageContentLayout } from '../../../src/components/page-contents/PageContentLayout';

jest.useFakeTimers();
describe('PageContentLayout tests', () => {
  it('Should render', () => {
    const { container } = render(
      <Provider store={store}>
        <PageContentLayout title="test">
          <h1>text</h1>
        </PageContentLayout>
      </Provider>
    );
    expect(container.getElementsByClassName('container').length).not.toBe(0);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <PageContentLayout title="test">
          <h1>text</h1>
        </PageContentLayout>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
