import React, { FC } from 'react';
import { Btn } from '@components/common/form-controls/Btn';
import { Switch } from '@components/common/form-controls/Switch';

interface IModalFooterProps {
  applyBtn?: string;
  disabledButton?: boolean;
  onApply?: () => void;
  onBack?: () => void;
  showDuplicateSwitch?: boolean;
}

export const ModalFooter: FC<IModalFooterProps> = ({
  onBack,
  onApply,
  applyBtn,
  disabledButton = false,
  showDuplicateSwitch = false,
}) => (
  <div className="modal-footer-control">
    <div className="modal-footer-item">
      {onBack && (
        <Btn
          btnStatus="btn-link"
          disabledBtn={disabledButton}
          btnIcon="icon-arrow-left"
          btnText="Back"
          onClick={onBack}
          aria-hidden="true"
        />
      )}
      {showDuplicateSwitch && (
        <>
          <Switch />
          <span className="modal-footer-info">Duplicate all elements with selected (Element type, Element name)</span>
        </>
      )}
    </div>
    {applyBtn && <Btn btnStatus="btn-lg-primary btn-stretch" btnIcon="" btnText={applyBtn} onClick={onApply} />}
  </div>
);
