import React, { FC } from 'react';
import { Cell } from 'react-table';
import { IControl } from '@interfaces/interfaces';
import { PropertiesCard } from './PropertiesCard';

interface IControlDropdownProps {
  expander: Cell;
  showExpandedInfo: boolean;
  control: IControl;
}

export const ControlListDropdown: FC<IControlDropdownProps> = ({ expander, control, showExpandedInfo }) => (
  <tr>
    <td colSpan={99}>
      <div className="table-dropdown-group">
        <div className="table-dropdown-content open">
          <div className="table-dropdown-heading">
            <div className="mr-10" {...expander.getCellProps()} key={control?.id}>
              {expander.render('Cell')}
            </div>
            <span className="table-dropdown-title">{control?.name}</span>
            <span className="header-subtitle table-dropdown-subtitle">{control.subCategory}</span>
          </div>
          {showExpandedInfo && (
            <div className="table-dropdown-wrap">
              <PropertiesCard type="controlsPage" content={control?.details} />
            </div>
          )}
        </div>
      </div>
    </td>
  </tr>
);
