import React, { FC } from 'react';
import classNames from 'classnames';
import { Btn } from '@components/common/form-controls/Btn';

interface IModalCenter {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  disabledApplyBtn?: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const ModalCenter: FC<IModalCenter> = ({
  title,
  subtitle = '',
  disabledApplyBtn = false,
  isOpen,
  onClose,
  onApply,
  children,
}) => (
  <div className={classNames('modal', { show: isOpen })}>
    <div className="modal-content">
      <div className="modal-header">
        <div className="modal-heading">
          <div className="modal-header-content">
            <span className="modal-title">{title}</span>
            <span className="modal-subtitle">{subtitle}</span>
          </div>
          {title !== 'Questionnaire' && (
            <button type="button" className="btn btn-xs-secondary" onClick={onClose}>
              <span className="icon-close" />
            </button>
          )}
        </div>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <div className="btn-group-stretch">
          <Btn btnStatus="btn-lg-outline mr-15" btnIcon="" btnText="Cancel" onClick={onClose} />
          <Btn btnStatus="btn-lg-primary" disabledBtn={disabledApplyBtn} btnIcon="" btnText="Apply" onClick={onApply} />
        </div>
      </div>
    </div>
  </div>
);
