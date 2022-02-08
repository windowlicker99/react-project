import React from 'react';
import * as reactRedux from 'react-redux';
import { render } from '@testing-library/react';
import { ElementsContent } from '@components/page-contents/ElementsContent';

describe('ElementsContent tests', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Should render', () => {
    useSelectorMock.mockReturnValue([
      { label: 'Name', name: 'name' },
      { label: 'Date', name: 'date' },
    ]);
    useDispatchMock.mockReturnValue(jest.fn());

    const { container } = render(<ElementsContent />);
    expect(container.getElementsByClassName('elements-content').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    useSelectorMock.mockReturnValue([
      { label: 'Name', name: 'name' },
      { label: 'Date', name: 'date' },
    ]);
    useDispatchMock.mockReturnValue(jest.fn());

    const { asFragment } = render(<ElementsContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
