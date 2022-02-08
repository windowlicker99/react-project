import React, { FC } from 'react';
import { BadgeRound } from '@components/common/BadgeRound';
import { Btn } from '@components/common/form-controls/Btn';
import { IAuthor } from '@interfaces/interfaces';
import { Link } from '../form-controls/Link';

interface IAsideHeading {
  BadgeRoundColor?: string;
  disabledButton?: boolean;
  assignee?: IAuthor;
  onAssign?: () => void;
}

export const AsideHeading: FC<IAsideHeading> = ({
  BadgeRoundColor,
  disabledButton,
  assignee,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAssign = () => {},
}) => (
  <div className="heading">
    <div className="heading-info">
      {BadgeRoundColor && <BadgeRound color={BadgeRoundColor} />}
      <span className="heading-title">Risk Level</span>
      <span className="heading-data" />
    </div>
    {assignee ? (
      <div className="heading-assigne">
        Assigned to: <Link linkIcon="" linkText={assignee.name} />
      </div>
    ) : (
      <Btn
        btnStatus="btn-link"
        disabledBtn={disabledButton}
        btnIcon="icon-user-plus"
        btnText="Assign Ticket"
        onClick={onAssign}
      />
    )}
  </div>
);
