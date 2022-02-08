import React from 'react';
import { render } from '@testing-library/react';
import { PageFilter } from '@components/page-contents/PageFilter';
import { defaultFilters } from '@constants/Filters';

describe('PageFilter tests', () => {
  it('Should render', () => {
    const { container } = render(<PageFilter filters={defaultFilters} isOpen />);
    expect(container.getElementsByClassName('page-filter').length).toEqual(1);
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<PageFilter filters={defaultFilters} isOpen />);
    expect(asFragment()).toMatchSnapshot();
  });
});
