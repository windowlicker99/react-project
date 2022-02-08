import { NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';
import { EAside } from '@interfaces/enums';
import { baseNodeParams } from './parameters';
import { gatewayShapeContent } from './shapesContent';

export const controller: NodeModel = {
  ...baseNodeParams,
  id: 'controller',
  offsetX: 100,
  offsetY: 0,
  width: 140,
  height: 40,
  shape: {
    type: 'HTML',
    content: gatewayShapeContent,
  },
  ports: [
    {
      id: 'controller_output',
      shape: 'Circle',
      offset: { x: 0.5, y: 1 },
      height: 8,
      width: 8,
      visibility: PortVisibility.Hidden,
    },
  ],
  addInfo: { element: { type: EAside.gateway, id: '0' } },
};
