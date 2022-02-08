import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectUser } from '@store/selectors/auth';
import { Avatar } from '@components/common/Avatar';
import { logout } from '@store/slices/authSlice';
import { resetVehicles } from '@/store/slices/vehicleSlice';
import { resetColumns } from '@/store/slices/columnsSlice';

export const HeaderDropdown: FC = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(resetColumns());
    dispatch(resetVehicles());
    dispatch(logout());
  };

  const dropdownMenuClass = classNames('header-dropdown-menu', {
    active: isActive,
    inactive: !isActive,
  });

  return (
    <div className="header-dropdown" onClick={() => setIsActive(!isActive)} role="presentation">
      <Avatar name={user?.name} avatar={user?.avatar} />
      <ul className={dropdownMenuClass}>
        <li className="header-dropdown-item" onClick={onLogout} onKeyDown={onLogout} role="presentation">
          <span className="icon-logout mr-10" />
          Log out
        </li>
      </ul>
      <span className="icon-arrow-border-down" />
    </div>
  );
};
