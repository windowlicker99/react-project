import React, { FC } from 'react';

export const NavContent: FC = () => (
  <ul className="nav-content">
    <li className="nav-content-item">
      <button type="button" className="nav-content-btn active">
        1
      </button>
    </li>
    <li className="nav-content-item">
      <button type="button" className="nav-content-btn">
        2
      </button>
    </li>
    <li className="nav-content-item">
      <button type="button" className="nav-content-btn">
        3
      </button>
    </li>
    <li className="nav-content-item">
      <button type="button" className="nav-content-btn">
        4
      </button>
    </li>
  </ul>
);
