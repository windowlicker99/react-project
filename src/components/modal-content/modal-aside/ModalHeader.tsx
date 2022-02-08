import React, { FC } from 'react';
import { PageTabs } from '@components/common/PageTabs';

interface IModalHeader {
  title?: string;
  subtitle?: string;
  activeTab?: string;
  tabsList?: string[];
  onBack?: () => void;
  onChooseTabClick?: (str: string) => void;
  onClose: () => void;
  step?: number;
  maxStep?: number;
}

export const ModalHeader: FC<IModalHeader> = ({
  title = '',
  subtitle,
  activeTab = '',
  tabsList,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChooseTabClick = () => {},
  onClose,
  step,
  maxStep = 2,
  onBack,
}) => (
  <>
    <div className="modal-heading">
      <div className="modal-header-content">
        {Boolean(step) && step <= maxStep && (
          <span className="modal-subtitle">
            Step {step}/{maxStep}
          </span>
        )}
        <span className="modal-title">{title}</span>
        <span className="modal-subtitle">{subtitle}</span>
        {Boolean(onBack) && (
          <span className="modal-subtitle">
            <span className="icon-arrow-left" aria-hidden="true" onClick={onBack} />
          </span>
        )}
      </div>
      <button type="button" className="btn btn-xs-secondary" onClick={onClose}>
        <span className="icon-close" />
      </button>
    </div>
    {Boolean(tabsList) && <PageTabs active={activeTab} tabs={tabsList} onClick={onChooseTabClick} />}
  </>
);
