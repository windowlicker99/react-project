import { ETableTypes } from '@interfaces/interfaces';

export const getColumnsWithFilter = (tableType: string): string[] => {
  let columnsNames: string[] = [];

  switch (tableType) {
    case ETableTypes.vehicles:
      columnsNames = ['brand', 'model', 'platform', 'currentPhase'];
      break;
    case ETableTypes.domains:
      columnsNames = ['model', 'platform', 'name', 'communication', 'connectivity', 'author'];
      break;
    case ETableTypes.ECUs:
      columnsNames = ['model', 'platform', 'domain', 'name'];
      break;
    case ETableTypes.functions:
      columnsNames = ['model', 'platform', 'domain', 'ecu', 'name', 'version'];
      break;
    case ETableTypes.conceptThreats:
      columnsNames = ['name'];
      break;
    case ETableTypes.data:
      columnsNames = ['model'];
      break;
    case ETableTypes.feeds:
      columnsNames = ['brand', 'model', 'platform'];
      break;
    default:
      break;
  }

  return columnsNames;
};
