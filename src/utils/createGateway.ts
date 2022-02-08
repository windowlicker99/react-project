import { NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';
import { controller } from '@constants/ArchitectureScheme/nodes';
import { IECUasGateway, IGatewayResponse } from '@/interfaces/interfaces';
import { getECUHTML } from './getECUHTML';
import { EAside } from '@/interfaces/enums';
import { gatewayNodeColors } from '@/constants/color';

export const createGateway = ({ type, gateway }: IGatewayResponse): NodeModel => {
  const addInfo = { element: { type: EAside[type], id: gateway.id } };
  if (EAside[type] === EAside.ECUasGateway) {
    const ECUasGateway = gateway as IECUasGateway;
    let height = 70;
    if (ECUasGateway.connectedVMs?.length) {
      height += ECUasGateway.connectedVMs.length * 30; // 30 is VM high
    }
    return {
      ...controller,
      offsetY: height / 3,
      width: 200,
      height,
      shape: {
        type: 'HTML',
        content: getECUHTML(
          ECUasGateway,
          ECUasGateway.color || gatewayNodeColors.color,
          ECUasGateway.background || gatewayNodeColors.background
        ),
      },
      addInfo,
      ports: [
        {
          id: `controller_output`,
          shape: 'Circle',
          offset: { x: 0.5, y: 1 },
          height: 8,
          width: 8,
          visibility: PortVisibility.Hidden,
        },
      ],
    };
  }
  return {
    ...controller,
    addInfo,
    shape: {
      type: 'HTML',
      content: `<div style="width:100%;height:100%;background:white;border:2px solid #4f98ff;border-radius:5px;display:flex;align-items:center;justify-content:space-around;font-weight:600;">${gateway.name}</div>`,
    },
  };
};
