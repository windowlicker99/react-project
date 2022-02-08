import { NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';
import { controller } from '@constants/ArchitectureScheme/nodes';
import { IArchitectureDomain } from '@interfaces/ArchitectureScheme/interfaces';
import { baseNodeParams } from '@constants/ArchitectureScheme/parameters';
import { EAside } from '@interfaces/enums';
import { getECUHTML } from './getECUHTML';

export const distanceBetweenDomains = 250;
export const controllerYpoint = 100;
const ECUheight = 60;
const connectedECUheight = 40;
const distanceBetweenConnectedECUs = 15;
const distanceBetweenECUs = 100;
const ECUwidth = 150;
const connectedVMheight = 30;

export const createNodes = (domains: IArchitectureDomain[], gatewayNode: NodeModel): NodeModel[] => {
  const nodes: NodeModel[] = [];

  domains?.map((domain, domainIndex) => {
    const leftPoint = controllerYpoint + controller.width - (domains.length / 2) * distanceBetweenDomains - 5; // 5 is half of domain width
    const { ECUs } = domain;
    const domainOffsetY = gatewayNode?.height || controller.height;
    const domainHeight = 10;

    // create nodes for the each domain
    const domainNode: NodeModel = {
      ...baseNodeParams,
      id: `domain${domain.id}`,
      offsetX: leftPoint + distanceBetweenDomains * domainIndex - 10,
      offsetY: domainOffsetY,
      width: 10,
      height: domainHeight,
      zIndex: 1,
      ports: [
        {
          id: `domain${domain.id}_input`,
          shape: 'Circle',
          offset: { x: 0.5, y: 0 },
          height: 8,
          width: 8,
          visibility: PortVisibility.Hidden,
        },
        {
          id: `domain${domain.id}_output`,
          shape: 'Circle',
          offset: { x: 0.5, y: 0 },
          height: 8,
          width: 8,
          visibility: PortVisibility.Hidden,
        },
      ],
      shape: {
        type: 'Basic',
        shape: 'Ellipse',
      },
      style: {
        fill: domain.color,
        strokeColor: domain.color,
      },
      addInfo: {
        element: { type: EAside.domain, id: domain.id },
        tooltip: { text: domain.name, color: domain.color, background: domain.background },
      },
    };

    nodes.push(domainNode);

    // create nodes for the each ECU
    let ecuYpoint = domainOffsetY + 100 + domainHeight; // initial Y point for the ECU
    ECUs?.map((ECU) => {
      const { connectedECUs } = ECU;
      const offsetY = ecuYpoint;

      if (ECU.connectedVMs?.length) {
        ecuYpoint += connectedVMheight * ECU.connectedVMs?.length;
      }

      if (ECU.connectedECUs?.length) {
        ecuYpoint +=
          50 +
          connectedECUheight * ECU.connectedECUs.length +
          distanceBetweenConnectedECUs * (ECU.connectedECUs.length - 1) +
          ECUheight;
      } else {
        ecuYpoint += distanceBetweenECUs;
      }

      const ECUNode: NodeModel = {
        ...baseNodeParams,
        id: `domain${domain.id}_ecu${ECU.id}`,
        width: ECUwidth,
        height: ECUheight,
        offsetX: leftPoint + 100 + distanceBetweenDomains * domainIndex,
        offsetY,
        shape: {
          type: 'HTML',
          content: getECUHTML(ECU, domain.color, domain.background),
        },
        ports: [
          {
            id: `domain${domain.id}_ecu${ECU.id}_input`,
            shape: 'Square',
            offset: { x: 0, y: ECU.relativeECUs?.length ? 0.2 : 0.5 },
            height: 8,
            width: 8,
            visibility: PortVisibility.Hidden,
          },
          {
            id: `domain${domain.id}_ecu${ECU.id}_connectedECUsOutput`,
            shape: 'Square',
            offset: { x: 1, y: 0.5 },
            height: 8,
            width: 8,
            visibility: PortVisibility.Hidden,
          },
          {
            id: `${ECU.id}_input2`,
            shape: 'Square',
            offset: { x: 0, y: 0.5 },
            height: 8,
            width: 8,
            visibility: ECU.relativeECUs?.length ? PortVisibility.Visible : PortVisibility.Hidden,
            style: {
              strokeColor: ECU.relativeECUs?.length ? ECU?.relativeECUs[0].color : 'black',
            },
          },
        ],
        addInfo: {
          element: { type: EAside.ecu, id: ECU.id },
          tooltip: { text: ECU.name, color: domain.color, background: domain.background },
        },
      };

      nodes.push(ECUNode);

      // create nodes for the each connected ECU
      let connectedECUYpoint = offsetY + ECUheight + distanceBetweenConnectedECUs;

      connectedECUs?.map((connectedECU) => {
        let connectedECUYoffset = connectedECUYpoint;
        connectedECUYpoint += connectedECUheight + distanceBetweenConnectedECUs;

        if (ECU.connectedVMs?.length) {
          connectedECUYoffset += ECU.connectedVMs.length * 25 - 10;
        }

        const connectedECUNode: NodeModel = {
          ...baseNodeParams,
          id: `domain${domain.id}_ecu${ECU.id}_connectedECU${connectedECU.id}`,
          width: 90,
          height: connectedECUheight,
          offsetX: leftPoint + distanceBetweenDomains * domainIndex + 90,
          offsetY: connectedECUYoffset,
          shape: {
            type: 'HTML',
            content: `<div class="architecture-schema-subdomain" style="border-color: ${domain.color};">
              ${connectedECU.name}
              <span data-create-ecu="true" class="architecture-schema-plus" style="color:${domain.color}">+</span></div>`,
          },
          style: {
            fill: 'white',
            strokeColor: domain.color,
          },
          ports: [
            {
              id: `domain${domain.id}_ecu${ECU.id}_connectedECU${connectedECU.id}_input`,
              shape: 'Square',
              offset: { x: 1, y: 0.5 },
              height: 8,
              width: 8,
              visibility: PortVisibility.Hidden,
            },
          ],
          addInfo: {
            element: { type: EAside.subEcu, id: connectedECU.id },
            tooltip: { text: connectedECU.name, color: domain.color, background: domain.background },
          },
        };
        nodes.push(connectedECUNode);
        return connectedECUNode;
      });

      return ECUNode;
    });

    // Show a add new ECU button
    let offsetY = ecuYpoint;

    if (!ECUs) {
      offsetY = ecuYpoint + 200;
    }

    const addNewECUNode: NodeModel = {
      ...baseNodeParams,
      id: `create_ecu_node_for_${domain.id}`,
      width: 40,
      height: 40,
      offsetX: leftPoint + 100 + distanceBetweenDomains * domainIndex,
      offsetY,
      shape: {
        type: 'HTML',
        content: `<div data-create-ecu="true" style="border-radius:5px;width:100%;height:100%;font-size:35px;background-color:${domain.background};border:2px dashed ${domain.color};display:flex;align-items:center;justify-content:center;color:${domain.color};">+</div>`,
      },
      style: {
        fill: domain.color,
        strokeColor: domain.color,
      },
      ports: [
        {
          id: `create_ecu_${domain.id}_input`,
          shape: 'Square',
          offset: { x: 0, y: 0.5 },
          height: 8,
          width: 8,
          visibility: PortVisibility.Hidden,
        },
      ],
    };
    nodes.push(addNewECUNode);
    return domainNode;
  });
  return nodes;
};
