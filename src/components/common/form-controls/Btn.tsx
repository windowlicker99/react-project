/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface IBtnProps {
  btnStatus: string;
  btnIcon?: string;
  btnText?: string;
  disabledBtn?: boolean;
  onClick?: MouseEventHandler;
  dataFor?: string;
}

export const Btn: FC<IBtnProps> = ({
  btnStatus = '',
  btnIcon = '',
  btnText = '',
  disabledBtn = false,
  onClick = () => {},
  dataFor = '',
}) => (
  <button
    type="button"
    disabled={disabledBtn}
    className={classNames('btn', btnStatus)}
    onClick={onClick}
    {...(dataFor && { 'data-for': dataFor, 'data-tip': true })}
  >
    <span className={`btn-icon ${btnIcon}`} />
    <span className="btn-text">{btnText}</span>
  </button>
);
