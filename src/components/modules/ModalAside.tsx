import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface IModalAsideProps {
  isOpen: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

export const ModalAside: FC<IModalAsideProps> = ({ isOpen, header, footer, children }) => (
  <div className={classNames('modal modal-aside', { show: isOpen })}>
    {/* <!-- add class show --> */}
    <div className="modal-content">
      {header && <div className="modal-header">{header}</div>}
      <div className="modal-body">{children}</div>
      {footer && <div className="modal-footer">{footer}</div>}
    </div>
  </div>
);
