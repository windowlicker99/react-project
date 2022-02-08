import { ConnectorModel } from '@syncfusion/ej2-react-diagrams';
import { baseConnectorParams, disabledConnectorParameters } from '@constants/ArchitectureScheme/parameters';
import { IArchitectureDomain } from '@interfaces/ArchitectureScheme/interfaces';
import { EAside } from '@interfaces/enums';
import { gatewayNodeColors } from '@/constants/color';

export const createConnectors = (
  domains: IArchitectureDomain[],
  gatewayHeight = 0,
  gatewayColor = gatewayNodeColors.color
): ConnectorModel[] => {
  const connectors: ConnectorModel[] = [];
  domains?.map((domain) => {
    // connect controller with domains
    const domainConnector: ConnectorModel = gatewayHeight
      ? {
          ...baseConnectorParams,
          id: `controller_domain${domain.id}`,
          sourceID: 'controller',
          targetID: `domain${domain.id}`,
          sourcePortID: 'controller_output',
          type: 'Orthogonal',
          zIndex: 0,
          style: {
            strokeColor: gatewayColor,
          },
          targetDecorator: {
            width: 0,
            height: 0,
          },
          segments: [
            {
              direction: 'Bottom',
              length: 20,
            },
          ],
        }
      : null;

    if (domainConnector) {
      connectors.push(domainConnector);
    }

    // connect domains with ECUs
    domain.ECUs?.map((ECU) => {
      const ECUConnector: ConnectorModel = {
        ...baseConnectorParams,
        id: `domain${domain.id}_to_${ECU.id}`,
        sourceID: `domain${domain.id}`,
        targetID: `domain${domain.id}_ecu${ECU.id}`,
        sourcePortID: `domain${domain.id}_output`,
        targetPortID: `domain${domain.id}_ecu${ECU.id}_input`,
        type: 'Orthogonal',
        style: {
          strokeColor: domain.color,
        },
        targetDecorator: {
          width: 0,
          height: 0,
        },
        addInfo: {
          element: { type: EAside.domain, id: domain.id },
          tooltip: { text: domain.name, color: domain.color, background: domain.background },
        },
      };

      connectors.push(ECUConnector);

      // connect ECUs with connectedECUs
      ECU.connectedECUs?.map((connectedECU) => {
        const connectedECUConnector: ConnectorModel = {
          ...baseConnectorParams,
          id: `domain${domain.id}_ecu${ECU.id}_to_${connectedECU.id}`,
          sourceID: `domain${domain.id}_ecu${ECU.id}`,
          targetID: `domain${domain.id}_ecu${ECU.id}_connectedECU${connectedECU.id}`,
          sourcePortID: `domain${domain.id}_ecu${ECU.id}_connectedECUsOutput`,
          targetPortID: `domain${domain.id}_ecu${ECU.id}_connectedECU${connectedECU.id}_input`,
          type: 'Orthogonal',
          style: {
            strokeColor: '#75afff',
            strokeDashArray: '2 2',
          },
          targetDecorator: {
            width: 0,
            height: 0,
          },
        };

        connectors.push(connectedECUConnector);
        return connectedECUConnector;
      });

      // connect ECUs with relativeECUs

      ECU.relativeECUs?.map((relativeECU) => {
        const relativeECUConnector2: ConnectorModel = {
          ...baseConnectorParams,
          id: `${ECU.id}_to_${relativeECU.id}`,
          sourceID: `domain${domain.id}_ecu${ECU.id}`,
          targetID: `domain${relativeECU.domain.id}_ecu${relativeECU.id}`,
          sourcePortID: `${ECU.id}_input2`,

          targetPortID: `${relativeECU.id}_input2`,
          addInfo: {
            relative: {
              color: domain.color,
            },
          },
          type: 'Orthogonal',

          segments: [
            {
              type: 'Orthogonal',
              // Defines the direction for the segment lines
              direction: 'Bottom',
              // Defines the length for the segment lines
              length: 530,
            },
            {
              type: 'Orthogonal',
              // Defines the direction for the segment lines
              direction: 'Right',
              // Defines the length for the segment lines
              length: 1000,
            },
          ],

          // Set Target Padding value

          style: {
            strokeColor: '#BEBEBE',
            fill: '#BEBEBE',
          },
          targetDecorator: {
            style: {
              fill: '#BEBEBE',
              strokeColor: '#BEBEBE',
            },
            width: 0,
            height: 0,
          },
        };
        connectors.push(relativeECUConnector2);
        return relativeECUConnector2;
      });

      return ECUConnector;
    });
    const addNewECUConnector: ConnectorModel = {
      ...disabledConnectorParameters,
      id: `${domain.id}_to_create_ecu_node`,
      sourceID: `domain${domain.id}`,
      targetID: `create_ecu_node_for_${domain.id}`,
      sourcePortID: `domain${domain.id}_input`,
      targetPortID: `create_ecu_${domain.id}_input`,
      type: 'Orthogonal',
      style: {
        strokeColor: domain.color,
        strokeDashArray: '8 8',
      },
      targetDecorator: {
        width: 0,
        height: 0,
      },
      addInfo: {
        element: { type: EAside.domain, id: domain.id },
        tooltip: { text: domain.name, color: domain.color, background: domain.background },
      },
    };

    connectors.push(addNewECUConnector);
    return domainConnector;
  });
  return connectors;
};
