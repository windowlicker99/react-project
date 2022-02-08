import { NodeModel } from '@syncfusion/ej2-diagrams';

export const getAddedNodes = (legacyNodes: NodeModel[], updatedNodes: NodeModel[]): NodeModel[] => {
  const legacyNodesIds = legacyNodes.map((node) => node.id);
  return updatedNodes.filter((node) => !legacyNodesIds.includes(node.id));
};
