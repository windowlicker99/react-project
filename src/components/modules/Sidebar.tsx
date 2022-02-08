import React, { FC } from 'react';
import { Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logo } from '@components/common/Logo';
import { sidebarTabsList } from '@constants/tabsLists';
import { PageContentLayout } from '@components/page-contents/PageContentLayout';
import { SecurityPage } from '@components/pages/SecurityPage';
import { PrivateRoute } from '@routing/PrivateRoute';
import { setHeader } from '@store/slices/headerSlice';
import { CLIENT_PATHS } from '@constants/paths';

export const Sidebar: FC = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <div className="page-container">
      <nav className="sidebar is-open">
        <div className="sidebar-header">
          <Logo />
        </div>
        <div className="sidebar-body">
          <ul className="sidebar-list">
            {sidebarTabsList.map((tab) => (
              <li className="sidebar-list-item" key={tab.href}>
                <NavLink
                  onClick={() => dispatch(setHeader([]))}
                  to={`${url}${tab.href}`}
                  role={tab.role || ''}
                  data-bs-toggle={tab.dataBsToggle || ''}
                  className="sidebar-link"
                  href={tab.href}
                  data-tab={tab.dataTab || ''}
                >
                  <div className="sidebar-icon">
                    <span className={tab.iconClass} />
                  </div>
                  <span className="sidebar-link-title">{tab.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="main">
        <Switch>
          {sidebarTabsList.map((tab) => (
            <PrivateRoute
              exact
              path={`${path}${tab.href}`}
              component={() => <PageContentLayout title={tab.title}>{tab.component({})}</PageContentLayout>}
              key={tab.href}
            />
          ))}
          <PrivateRoute
            exact
            path={CLIENT_PATHS.security}
            component={() => (
              <PageContentLayout title="Security Development">
                <SecurityPage />
              </PageContentLayout>
            )}
          />
        </Switch>
      </main>
    </div>
  );
};
