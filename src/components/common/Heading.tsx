import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { BadgeRound } from '@components/common/BadgeRound';
import { Link } from './form-controls/Link';

interface IHeadingProps {
  headingText: string | ReactElement;
  headingNumber?: number | string;
  subtitle?: string;
  linkText?: string;
  linkIcon?: string;
  BadgeRoundColor?: string;
  center?: boolean;
}

export const Heading: FC<IHeadingProps> = ({
  headingText,
  headingNumber,
  subtitle,
  linkText = '',
  linkIcon = '',
  BadgeRoundColor = '',
  center = false,
}) => (
  <div className={classNames('heading', { center })}>
    <div className="heading-info">
      {BadgeRoundColor && <BadgeRound color={BadgeRoundColor} />}
      <span className="heading-title">{headingText}</span>
      <span className="heading-data">
        {headingNumber} {subtitle && <span>| {subtitle}</span>}
      </span>
    </div>
    {linkText && <Link linkText={linkText} linkIcon={linkIcon} />}
  </div>
);
