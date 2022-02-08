import React, { FC, MouseEventHandler, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ConnectorModel,
  DataBinding,
  DiagramComponent,
  Inject,
  NodeModel,
  SnapConstraints,
  SnapSettingsModel,
} from '@syncfusion/ej2-react-diagrams';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { createNodes } from '@utils/createNodes';
import { createConnectors } from '@utils/createConnectors';
import { calculateSchemeOffsetAndScale } from '@utils/calculateSchemeOffsetAndScale';
import {
  IArchitectureDomain,
  IDiagramClickEventArgs,
  ISelectionChangeArgs,
  IDiagramTooltip,
  IElementAddInfo,
} from '@interfaces/ArchitectureScheme/interfaces';
import { setCurrentElement } from '@store/slices/elementSlice';
import { selectedItemsSettings, tooltipAnimationParams } from '@constants/ArchitectureScheme/parameters';
import { createDiagramTooltip } from '@utils/createDiagramTooltip';
import { selectCurrentVehicle } from '@store/selectors/vehicle';
import { createGateway } from '@utils/createGateway';
import { PageMock } from './PageMock';
import { getAddedNodes } from '@/utils/getAddedNodes';
import { EElementPropName } from '@/interfaces/ArchitectureScheme/enums';
import { TDiagramEventElement } from '@/interfaces/ArchitectureScheme/types';
import { IECUasGateway, IGatewayResponse } from '@/interfaces/interfaces';

interface IArchitectureSchemeProps {
  onECUCreateClick: () => void;
  schemeData: IArchitectureDomain[];
  gatewayInfo: IGatewayResponse;
}

const cloneDeep = require('lodash.clonedeep');

export const ArchitectureScheme: FC<IArchitectureSchemeProps> = ({ schemeData, gatewayInfo, onECUCreateClick }) => {
  const dispatch = useDispatch();
  const currentVehicle = useSelector(selectCurrentVehicle);
  const [gatewayNode, setGatewayNode] = useState<NodeModel>(null);
  const [nodes, setNodes] = useState<NodeModel[]>([]);
  const [connectors, setConnectors] = useState<ConnectorModel[]>([]);
  const [tooltip, setTooltip] = useState<IDiagramTooltip>({ text: '' });
  const [selectedConnectors, setSelectedConnectors] = useState([]);
  const clonedConnectors = cloneDeep(connectors);
  const [addedNodes, setAddedNodes] = useState<NodeModel[]>([]);
  let diagramInstance: DiagramComponent = null;

  if (!currentVehicle) {
    return <PageMock />;
  }

  const changeSelectedConnectorStyle = (element: TDiagramEventElement, width: number) => {
    if (!element?.addInfo || element.addInfo.relative) {
      return;
    }
    connectors.forEach((connector, i) => {
      const domainId = `domain${element.addInfo.element?.id}_to`;
      if (connector.id.includes(domainId)) {
        clonedConnectors[i].style.strokeWidth = width;
      }
    });
  };

  const getNodeHTML = (element: TDiagramEventElement) =>
    document.querySelector(`#${element.id}_content_html_element > div > div`);

  const changeSelectedStyle = (element: TDiagramEventElement, isNew: boolean) => {
    if (element?.data === EElementPropName.connector) {
      const width = isNew ? 2 : 1;
      changeSelectedConnectorStyle(element, width);
    }
    if (element?.data === EElementPropName.node) {
      const node = getNodeHTML(element);
      if (!node) {
        return;
      }
      if (isNew) {
        node.classList.add('selected');
        return;
      }
      node.classList.remove('selected');
    }
  };

  const manageStylesOfSelectedItems = (args: ISelectionChangeArgs): void => {
    const {
      newValue: [newValue],
      oldValue: [oldValue],
    } = args;

    changeSelectedStyle(newValue, true);
    changeSelectedStyle(oldValue, false);

    // update connectors
    setConnectors(clonedConnectors);
  };

  const changeColorConnection = (args: ISelectionChangeArgs) => {
    const {
      newValue: [element],
    } = args;
    const relativeConnectors: number[] = [];

    connectors.forEach((connector, index) => {
      const addInfo = connector.addInfo as IElementAddInfo;

      if (
        (connector.sourceID === element?.id && addInfo?.relative) ||
        (element?.id === connector.targetID && addInfo?.relative)
      ) {
        relativeConnectors.push(index);
      }
    });

    relativeConnectors.forEach((i) => {
      clonedConnectors[i].style = {
        strokeColor:
          clonedConnectors[i].style.strokeColor === '#BEBEBE' ? clonedConnectors[i].addInfo?.relative.color : '#BEBEBE',
      };
    });

    selectedConnectors.forEach((i) => {
      clonedConnectors[i].style = {
        strokeColor:
          clonedConnectors[i].style.strokeColor === '#BEBEBE' ? clonedConnectors[i].addInfo?.relative.color : '#BEBEBE',
      };
    });

    setSelectedConnectors(relativeConnectors);

    setConnectors(clonedConnectors);
  };

  const getGatewayNode = async () => {
    if (!gatewayInfo) {
      setGatewayNode(null);
      return;
    }
    const updateGatewayNode = createGateway(gatewayInfo);

    setGatewayNode(updateGatewayNode);
  };

  const getNodes = () => {
    const schemeNodes = createNodes(schemeData, gatewayNode);
    if (nodes.length) {
      const added = getAddedNodes(nodes, schemeNodes);
      setAddedNodes(added);
    }
    setNodes(gatewayNode ? [gatewayNode, ...schemeNodes] : schemeNodes);
    const gateway = gatewayInfo?.gateway as IECUasGateway;
    const schemeConnectors = createConnectors(schemeData, gatewayNode?.height, gateway?.color);
    setConnectors(schemeConnectors);
  };

  useEffect(() => {
    getGatewayNode();
  }, [gatewayInfo]);

  useEffect(() => {
    if (schemeData) {
      getNodes();
    }
  }, [schemeData, gatewayNode]);

  const snapSettings: SnapSettingsModel = {
    constraints: SnapConstraints.None,
  };

  const onShowElementDetails = (args: ISelectionChangeArgs) => {
    const {
      newValue: [element],
    } = args;
    if (element?.addInfo) {
      const addInfo = element.addInfo as IElementAddInfo;
      if (addInfo.element) {
        dispatch(setCurrentElement(addInfo.element));
      }
    } else {
      dispatch(setCurrentElement(null));
    }
  };

  const onSelectElement = (args: ISelectionChangeArgs) => {
    manageStylesOfSelectedItems(args);
    if (!args.newValue?.length) {
      dispatch(setCurrentElement(null));
    } else {
      onShowElementDetails(args);
      changeColorConnection(args);
    }
  };

  const onDiagramMisclick = ({ actualObject }: IDiagramClickEventArgs) => {
    if (!actualObject) {
      diagramInstance.select([]);
    }
  };

  const onMouseOver = ({ actualObject }: IDiagramClickEventArgs) => {
    if (actualObject?.addInfo) {
      const { addInfo } = actualObject;

      if (addInfo.tooltip) {
        setTooltip(addInfo.tooltip);
      }
    }
  };

  const onMouseLeave = () => {
    setTooltip({ text: '' });
  };

  const onOpenModal: MouseEventHandler = (e) => {
    const { target } = e;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.dataset.createEcu) {
      onECUCreateClick();
    }
  };

  useEffect(() => {
    // to update nodes in the diagram correctly
    if (diagramInstance) {
      if (addedNodes.length) {
        diagramInstance.clearSelection(); // remove selection from add button
        diagramInstance.select(addedNodes); // show details of new element
      }
      nodes.forEach((node) => {
        diagramInstance.add(node);
      });
    }
  }, [nodes]);

  useEffect(() => {
    if (diagramInstance) {
      // preserves the interactivity of the connectors
      diagramInstance.connectors = [...connectors];

      // fixes the issue of disappearing connectors
      connectors.forEach((connector) => {
        diagramInstance.add(connector);
      });
    }
  }, [connectors]);

  useEffect(
    () => () => {
      diagramInstance = null;
    },
    []
  );

  if (nodes?.length) {
    return (
      <TooltipComponent
        isSticky
        closeDelay={300}
        content={createDiagramTooltip(tooltip)}
        mouseTrail
        showTipPointer
        position="BottomCenter"
        offsetY={10}
        animation={tooltipAnimationParams}
      >
        <DiagramComponent
          ref={(diagram) => {
            diagramInstance = diagram;
          }}
          selectedItems={selectedItemsSettings}
          id="diagram"
          width="100%"
          height="100%"
          snapSettings={snapSettings}
          scrollSettings={calculateSchemeOffsetAndScale(schemeData?.length)}
          mouseOver={onMouseOver}
          mouseLeave={onMouseLeave}
          selectionChange={onSelectElement}
          click={onDiagramMisclick}
          onClick={onOpenModal}
        >
          <Inject services={[DataBinding]} />
        </DiagramComponent>
      </TooltipComponent>
    );
  }

  return null;
};
