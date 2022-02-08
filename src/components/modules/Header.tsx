import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Search } from '@components/common/form-controls/Search';
import { HeaderDropdown } from '@components/common/HeaderDropdown';
import { headerSubtitles, showHeaderArrow } from '@/store/selectors/header';
import { setHeader } from '@/store/slices/headerSlice';
import { CLIENT_PATHS } from '@/constants/paths';

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = ({ title }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const showArrow = useSelector(showHeaderArrow);
  const subtitles = useSelector(headerSubtitles);

  const backBtnClick = () => {
    switch (title) {
      case 'Architecture':
        history.push(`${CLIENT_PATHS.sidebar}${CLIENT_PATHS.vehicle}`);
        break;
      default:
        history.goBack();
        break;
    }
    dispatch(setHeader([]));
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <div className="header-inner">
            <div className="header-toggler">
              {showArrow ? (
                <span className="icon-arrow-left" onClick={backBtnClick} aria-hidden="true" />
              ) : (
                <span className="icon-menu" />
              )}
            </div>

            <div className="header-title">
              {title}

              {showArrow &&
                subtitles.map((subtitle) => (
                  <span className="header-subtitle" key={subtitle}>
                    {subtitle}
                  </span>
                ))}
            </div>
          </div>
          <div className="header-controls">
            <div className="mr-15">
              <Search formPlaceholder="Search" />
            </div>
            <HeaderDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};
