import React, { FC, useEffect, useState } from 'react';
import { NotSelectedContent } from '@components/common/aside-content/NotSelectedContent';
import { ControllerContent } from '@components/common/aside-content/ControllerContent';
import { EcuContent } from '@components/common/aside-content/EcuContnent';
import { DomainContent } from '@components/common/aside-content/DomainContent';
import { EAside } from '@/interfaces/enums';
import { getElement } from '@/utils/getElement';
import { ICurrentElement } from '@/interfaces/interfaces';
import { TElement } from '@/interfaces/types';

interface IArchitectureDetailsContent {
  element: ICurrentElement;
  isAssignModalOpen?: boolean;
  isInitiateModalOpen?: boolean;
  onOpenInitiateView: () => void;
  onAssign: () => void;
}

export const ArchitectureDetailsContent: FC<IArchitectureDetailsContent> = ({
  element,
  isAssignModalOpen,
  isInitiateModalOpen,
  onAssign,
  onOpenInitiateView,
}) => {
  const [currentElement, setCurrentElement] = useState<TElement>(null);

  const getCurrentElement = async () => {
    const newElement = await getElement(element);

    setCurrentElement(newElement);
  };

  useEffect(() => {
    if (element) {
      getCurrentElement();
    }
  }, [element, isAssignModalOpen, isInitiateModalOpen]);

  switch (element?.type) {
    case EAside.domain:
      return <DomainContent domain={currentElement} />;
    case EAside.ecu:
    case EAside.subEcu:
    case EAside.ECUasGateway:
      return (
        <EcuContent
          type={element.type}
          ECU={currentElement}
          onAssign={onAssign}
          onOpenInitiateView={onOpenInitiateView}
        />
      );
    case EAside.gateway:
      return <ControllerContent controller={currentElement} />;
    default:
      return <NotSelectedContent />;
  }
};
