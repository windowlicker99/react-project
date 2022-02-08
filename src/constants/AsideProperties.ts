import { EAside, EController, EDomain, EECU } from '@interfaces/enums';
import { IControllerProperties, IDomainProperties } from '@interfaces/interfaces';

export const controllerProperties: IControllerProperties[] = [
  { name: 'Gateway Name', value: 'Gateway', accessor: EController.name },
  { name: 'Safety Criticality Name', value: 'ASIL A', accessor: EController.safetyCriticalityLevel },
  { name: 'Operation System', value: 'Linux', accessor: EController.operationSystem },
  { name: 'Firmware Version', value: '4.2.4', accessor: EController.firmwareVersion },
  { name: 'Online Connectivity', value: 'No Data', accessor: EController.onlineConnectivity },
];

export const domainProperties: IDomainProperties[] = [
  { name: 'Domain  Name', value: 'Domain', accessor: EDomain.name },
  { name: 'Domain Usage', value: 'ASIL A', accessor: EDomain.domainUsage },
  { name: 'Online Connectivity', value: 'Online', accessor: EDomain.onlineConnectivity },
  { name: 'Communication', value: 'CAN, ETHERNET', accessor: EDomain.communication },
];

export const commonECUProperties = [
  { name: 'Supplier', value: 'CYMOTIVE', accessor: EECU.supplier },
  { name: 'Communicate with ECU', value: 'No Data', accessor: EECU.connectedECUs },
  { name: 'Safety Criticality Level', value: 'No Data', accessor: EECU.safetyCriticalityLevel },
  { name: 'Operation System', value: 'Linux', accessor: EECU.operationSystem },
  { name: 'Firmware Version', value: '1.0.1', accessor: EECU.firmwareVersion },
  { name: 'Online Connectivity', value: 'Online', accessor: EECU.onlineConnectivity },
  { name: 'Hosted Domain', value: null, accessor: EECU.domain },
  { name: 'Risk Level', value: 'No Data', accessor: EECU.riskLevel },
  { name: 'Compliance Level', value: 'No Data', accessor: EECU.complianceLevel },
];

export const regularECUProperties = [{ name: 'ECU Name', value: 'ECU', accessor: EECU.name }, ...commonECUProperties];

export const subECUProperties = regularECUProperties.filter((property) => property.accessor !== EECU.domain);

export const ECUasGatewayProperties = [
  { name: 'ECU Gateway Name', value: 'ECU', accessor: EECU.name },
  ...commonECUProperties,
];

export const ECUProperties = {
  [EAside.ecu]: regularECUProperties,
  [EAside.subEcu]: subECUProperties,
  [EAside.ECUasGateway]: ECUasGatewayProperties,
};
