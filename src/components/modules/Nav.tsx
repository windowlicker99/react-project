import React, { FC } from 'react';

export const Nav: FC = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <a href="/" className="nav-link">
          Item 1
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Item 2
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Item 3
        </a>
      </li>
    </ul>
  </nav>
);
