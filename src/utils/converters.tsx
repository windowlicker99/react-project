import React from 'react';
import { FormikValues } from 'formik';
import {
  ETableTypes,
  IDomain,
  IDomainRow,
  IECU,
  IECURow,
  IVehicle,
  IVehicleRow,
  IFunctions,
  IData,
  IFunctionsRow,
  IDataRow,
  IAuthor,
  IOption,
  IPostedVehicle,
  IOptionsList,
  IPostedECU,
  ICommunication,
  ISecurityConcept,
  IPropertiesData,
  IThreat,
  IThreatRow,
  IPenetrationTest,
  IDetailedFinding,
  IMainFinding,
  IDetailedFindingRow,
  IMainFindingRow,
  ISecurityDevelopmentTab,
  IRequirement,
  IConceptRow,
  IThreatListRow,
  IControlsRow,
  IControlGroups,
  IVehicleFeed,
  IFeedRow,
  IAlert,
  IVehicleFormValues,
  IECUFormValues,
  INamedObject,
} from '@interfaces/interfaces';
import { TList } from '@interfaces/types';
import { EBadgeTypes, EDirectCommunication, ERiskLevels } from '@interfaces/enums';
import { Avatar } from '@components/common/Avatar';
import { DateLabel } from '@components/common/DateLabel';
import { TableActions } from '@components/common/TableActions';
import { BadgeRound } from '@components/common/BadgeRound';
import { Badge } from '@components/common/Badge';
import { CircleChart } from '@components/common/CircleChart';
import { ListCell } from '@components/common/ListCell';
import { PropertyWithSeparator } from '@components/common/PropertyWithSeparator';
import { RiskLevelBadgeWithTooltip } from '@components/common/RiskLevelBadgeWithTooltip';
import { getECUType } from './getECUType';

interface IDataForOptions {
  id: string;
  name: string;
}

export const convertArrayToString = (array: INamedObject[] = []): string => {
  if (!array) {
    return '';
  }

  const arrayOfFieldsValue = array?.filter((element) => element).map((element) => element.name);
  return arrayOfFieldsValue.join(', ');
};

export const convertOptionsToDataArray = (array: IOption[], field: 'value' | 'label' = 'value'): string[] =>
  array.map((option) => option[field]);

export const convertDomainsToRows = (domainsList: IDomain[]): IDomainRow[] =>
  domainsList.map((domain) => ({
    model: domain.model,
    platform: domain.platform,
    name: domain.name,
    usage: domain.domainUsage,
    communication: domain.communication.join(', '),
    connectivity: domain.onlineConnectivity,
    author: <Avatar name={domain.author?.name} avatar={domain.author?.avatar} />,
    update: <DateLabel date={domain.lastUpdate} />,
    color: <BadgeRound color={domain.color} />,
    actions: <TableActions tableType={ETableTypes.domains} />,
  }));

export const convertECUsToRows = (ECUsList: IECU[]): IECURow[] =>
  ECUsList.map((ECU) => ({
    name: ECU.name,
    type: ECU.type,
    model: ECU.vehicle?.model,
    platform: ECU.vehicle?.platform,
    domain: convertArrayToString(ECU.domains),
    supplier: ECU.supplier?.name,
    complianceLevel: <CircleChart percentage={ECU.complianceLevel} />,
    operationSystem: ECU.operationSystem,
    firmwareVersion: ECU.firmwareVersion,
    connectivity: ECU.onlineConnectivity,
    actions: <TableActions tableType={ETableTypes.ECUs} />,
  }));

export const convertVehiclesToRows = (vehiclesList: IVehicle[]): IVehicleRow[] =>
  vehiclesList.map((vehicle: IVehicle) => ({
    brand: vehicle.brand?.name,
    model: vehicle.model,
    platform: vehicle.platform,
    phase: vehicle.phase,
    name: vehicle.brand?.fullName,
    id: vehicle.id,
    riskLevel: <Badge badgeText={ERiskLevels[vehicle.riskLevel]} badgeType={EBadgeTypes[vehicle.riskLevel]} />,
    complianceLevel: <CircleChart percentage={vehicle.complianceLevel} />,
    raProgress: <CircleChart percentage={vehicle.raProgress} />,
    lastUpdate: <DateLabel date={vehicle.lastUpdate} />,
    actions: (
      <TableActions
        tableType={ETableTypes.vehicles}
        id={vehicle.id}
        brand={vehicle.brand?.name}
        model={vehicle.model}
      />
    ),
    development: vehicle?.development,
    testing: vehicle?.testing,
    compliancy: vehicle?.compliancy,
    production: vehicle?.production,
    logo: vehicle.brand?.logo,
    photo: vehicle.photo,
  }));

export const convertFunctionsToRows = (functionsList: IFunctions[]): IFunctionsRow[] =>
  functionsList.map((functionItem) => ({
    model: functionItem.model,
    platform: functionItem.platform,
    domain: convertArrayToString(functionItem.domains),
    ecu: functionItem.ecu?.name,
    name: functionItem.name,
    supplier: functionItem.supplier,
    level: <CircleChart percentage={functionItem.complianceLevel} />,
    version: functionItem.version,
    cluster: functionItem.cluster,
    connectivity: functionItem.connectivity,
    actions: <TableActions tableType={ETableTypes.domains} />,
  }));

export const convertDataToRows = (dataList: IData[]): IDataRow[] =>
  dataList.map((data) => ({
    model: data.model,
    platform: data.platform,
    domain: convertArrayToString(data.domains),
    ecu: data.ecu?.name,
    function: data.functions.name,
    name: data.name,
    actions: <TableActions tableType={ETableTypes.data} />,
  }));

export const convertConceptThreatsToRows = (threatsList: IThreat[]): IThreatRow[] =>
  threatsList.map((threat) => ({
    name: threat.name,
    category: threat.category,
    group: threat.details?.group,
    calculatedAttackFeasibility: threat.details?.calculatedAttackFeasibility,
    classificationGroup: threat.details?.classificationGroup,
    securityObjective: threat.details?.securityObjective,
    subRows: threat.controls ? threat.controls.map((control) => ({ control })) : [],
  }));

export const convertDetailedFindingsColumnsToRows = (detailedFindingsList: IDetailedFinding[]): IDetailedFindingRow[] =>
  detailedFindingsList.map((finding) => ({
    id: finding.id,
    topic: finding.topic || '-',
    status: finding.status || '-',
    type: finding.type || '-',
    purpose: finding.purpose || '-',
    description: finding.description || '-',
    threat: finding.threat || '-',
    recommendations: finding.recommendations || '-',
    expertise: finding.expertise || '-',
    access: finding.access || '-',
    time: finding.time || '-',
    equipmentRepetition: finding.equipmentRepetition || '-',
    targetRepetition: finding.targetRepetition || '-',
    sumRepetition: finding.sumRepetition || '-',
    attackDifficultyFinalScope: finding.attackDifficultyFinalScope || '-',
    cve: finding.cve || '-',
  }));

export const convertMainFindingsToRows = (mainFindingsList: IMainFinding[]): IMainFindingRow[] =>
  mainFindingsList.map((finding) => ({
    id: finding.id,
    topic: finding.topic || '-',
    relatedRisk: finding.relatedRisk || '-',
    threat: finding.threat || '-',
    recommendations: finding.recommendations || '-',
    attackFeasibility: finding.attackFeasibility || '-',
    damagePotential: finding.damagePotential || '-',
    comments: finding.comments || '-',
    ticketNumber: finding.ticketNumber || '-',
  }));

export const convertConceptsToRows = (conceptsList: ISecurityConcept[]): IConceptRow[] =>
  conceptsList.map((concept) => ({
    name: concept.name,
    description: !concept.descriptions ? '-' : <ListCell list={concept.descriptions} />,
    subRows: concept.subRequirements.map((subRequirement) => ({
      subRequirement,
    })),
  }));

export const convertThreatsToRows = (threatsList: IThreat[]): IThreatListRow[] =>
  threatsList?.map((threat) => ({
    name: <PropertyWithSeparator value={threat.category} name={threat.name} />,
    actions: <TableActions tableType={ETableTypes.threats} />,
    details: threat.details,
  }));

export const convertThreatsToRows2 = (threatsList: IThreat[]): IThreatListRow[] =>
  threatsList?.map((threat) => ({
    name: <PropertyWithSeparator value={threat.category} name={threat.name} />,
    actions: <TableActions tableType={ETableTypes.threats} />,
    details: threat.details,
  }));

export const convertControlsToRows = (controlList: IControlGroups[]): IControlsRow[] =>
  controlList.map((group) => ({
    name: group.name,
    actions: <TableActions tableType={ETableTypes.controlGroups} />,
    subRows: group.controls.map((control) => ({ control })) || [],
  }));

export const convertFeedsToRows = (feedsList: IVehicleFeed[]): IFeedRow[] =>
  feedsList.map((feed) => ({
    brand: feed.brand?.name,
    model: feed.model,
    platform: feed.platform,
    riskLevel: <RiskLevelBadgeWithTooltip riskLevel={feed.riskLevel} riskLevelProgress={feed.riskLevelProgress} />,
    status: <TableActions tableType={ETableTypes.feeds} />,
    ECUs: feed.ECUs,
  }));

export const convertToRows = {
  [ETableTypes.domains]: convertDomainsToRows,
  [ETableTypes.ECUs]: convertECUsToRows,
  [ETableTypes.functions]: convertFunctionsToRows,
  [ETableTypes.data]: convertDataToRows,
  [ETableTypes.vehicles]: convertVehiclesToRows,
  [ETableTypes.conceptThreats]: convertConceptThreatsToRows,
  [ETableTypes.threats]: convertThreatsToRows,
  [ETableTypes.threatsOem]: convertThreatsToRows,
  [ETableTypes.mainFindings]: convertMainFindingsToRows,
  [ETableTypes.detailedFindings]: convertDetailedFindingsColumnsToRows,
  [ETableTypes.securityConcepts]: convertConceptsToRows,
  [ETableTypes.controlGroups]: convertControlsToRows,
  [ETableTypes.controlGroupsOem]: convertControlsToRows,
  [ETableTypes.feeds]: convertFeedsToRows,
};

export const convertDomainToProperties = ({
  name,
  domainUsage,
  onlineConnectivity,
  communication,
}: Partial<IDomain>): IPropertiesData => ({
  name,
  domainUsage,
  onlineConnectivity,
  communication: communication?.join(', '),
});

export const convertECUToProperties = ({
  name,
  supplier,
  safetyCriticalityLevel,
  operationSystem,
  firmwareVersion,
  onlineConnectivity,
  riskLevel,
  complianceLevel,
  domains,
  relativeECUs,
}: Partial<IECU>): IPropertiesData => ({
  name,
  supplier: supplier?.name,
  safetyCriticalityLevel,
  operationSystem,
  firmwareVersion,
  onlineConnectivity,
  riskLevel: ERiskLevels[riskLevel as unknown as keyof typeof ERiskLevels],
  complianceLevel,
  domains: convertArrayToString(domains),
  connectedECUs: convertArrayToString(relativeECUs),
});

export const convertPrimitiveValueToOption = <T,>(data: T): IOption<T> => ({ label: data, value: data });

export const convertsResponseDataToOptions = (data: IDataForOptions[]): IOption[] =>
  data.map(({ name, id }) => ({ label: name, value: id }));

export const convertUsersToOptions = (users: IAuthor[]): IOption[] =>
  users.map(({ name, id }) => ({ label: name, value: id }));

export const convertListToOptions = <T,>(list: T[]): IOption<T>[] => list.map(convertPrimitiveValueToOption);

export const convertResponseDataToOptions = (data: IDataForOptions[]): IOption[] =>
  data.map(({ name, id }) => ({ label: name, value: id }));

export const convertVehicleFormValuesToPostData = (vehicle: IVehicleFormValues): IPostedVehicle => ({
  brandId: vehicle.brand?.value,
  phase: vehicle.phase?.value,
  model: vehicle.model,
  platform: vehicle.platform,
  regulation: vehicle.regulation?.value,
  development: vehicle.development,
  testing: vehicle.testing,
  compliancy: vehicle.compliancy,
  production: vehicle.production,
  photo: vehicle?.photo,
  haveGateway: vehicle.haveGateway,
  gateway: vehicle.haveGateway
    ? {
        name: vehicle.gateway?.name,
        operationSystem: vehicle.gateway?.operationSystem,
        firmwareVersion: vehicle.gateway?.firmwareVersion,
        safetyCriticalityLevel: vehicle.gateway?.safetyCriticalityLevel?.value,
        onlineConnectivity: vehicle.gateway?.connectivity ? 'Online' : 'Offline',
      }
    : null,
});

export const convertFormNamesToEntitiesFields = (values: FormikValues): FormikValues =>
  Object.entries(values).reduce((acc: TList<IOption>, [key, value]) => {
    const newKey = key.split('-')[1];
    acc[newKey] = value;
    return acc;
  }, {});

export const convertCommunicatedElementsInfoToPostData = (values: IOptionsList[]): ICommunication[] =>
  Boolean(values) &&
  values.map(({ id, communication }: IOptionsList) => ({ id: id.value, communication: communication.value }));

export const convertECUFormValuesToPostData = (values: IECUFormValues): IPostedECU => ({
  name: values.name,
  operationSystem: values.operationSystem,
  onlineConnectivity: values.onlineConnectivity ? 'Online' : 'Offline',
  firmwareVersion: values.firmwareVersion,
  type: getECUType(values),
  isGateway: values.isGateway,
  isSwitch: values.isSwitch,
  supplierId: values.supplier?.value,
  hostVMorDocker: !values.isRegular ? values.hostVMorDocker : null,
  runVMorDocker: !values.isRegular ? values.runVMorDocker : null,
  hostECUId: !values.isRegular ? values.hostECU.value : null,
  domains: convertCommunicatedElementsInfoToPostData(values.domains),
  haveDirectCommunication: values.haveDirectCommunication,
  directCommunication: values.haveDirectCommunication
    ? (convertOptionsToDataArray(values.directCommunication, 'value') as EDirectCommunication[])
    : null,
  updateProcess: values.updateProcess,
  managingOrUsing: values.updateProcess ? values.managingOrUsing : null,
  storeConfidentialData: values.storeConfidentialData,
  useCryptographicTechnologies: values.useCryptographicTechnologies,
  indirectCommunicationChannel: values.indirectCommunicationChannel,
  connectedECUs: values.indirectCommunicationChannel
    ? convertCommunicatedElementsInfoToPostData(values.connectedECUs)
    : null,
});

export const convertSecurityConceptsToTabs = (concepts: ISecurityConcept[]): ISecurityDevelopmentTab[] =>
  concepts.map((concept) => ({
    name: concept.name,
    params: { conceptId: concept.id },
    type: ETableTypes.conceptThreats,
  }));

export const convertRequirementsToTabs = (requirement: IRequirement[]): ISecurityDevelopmentTab[] =>
  requirement.map((requirement) => ({
    name: requirement.reqId,
    params: {
      requirementId: requirement.id,
    },
    type: ETableTypes.securityConcepts,
  }));

export const convertTestsToTabs = (tests: IPenetrationTest[]): INamedObject[] =>
  tests.map((test) => ({
    name: test.name,
  }));

export const convertAlertsToTabs = (alerts: IAlert[]): INamedObject[] =>
  alerts.map((alert) => ({
    name: alert.name,
  }));

export const convertThreatDetails = (threat: IThreat) =>
  Object.keys(threat).map(() => ({
    calculatedAttackFeasibility: 'Calculated Attack Feasibility',
    classificationGroup: 'Threat Classification Group',
    securityObjective: 'Security Objective',
    technologies: 'Technologies',
    dataECUThreat: 'Data ECU Threat',
    elapsedTime: 'Elapsed Time',
    expertise: 'Expertise',
    knowledge: 'Knowledge',
    equipment: 'Equipment',
    windowsOfOpportunity: 'Windows Of Opportunity(Access)',
  }));
