import { ReactElement, ReactNode } from 'react';
import { Column } from 'react-table';
import {
  EApproved,
  EAside,
  EController,
  EDomain,
  EPhase,
  ERegulations,
  EDirectCommunication,
  EECUTypes,
  EImplemented,
  ERiskLevels,
  EUpdateProcessRadio,
  ETicketsTypes,
  EExpertise,
  EAccess,
  EEquipment,
  EAttackDifficultyFinalScope,
  EPhaseStatus,
  EGatewayTypes,
} from './enums';
import { TOnlineConnectivity, TList } from './types';

export enum ETableTypes {
  domains = 'domains',
  ECUs = 'ecus',
  functions = 'functions',
  data = 'data',
  vehicles = 'vehicles',
  conceptThreats = 'conceptThreats',
  threats = 'threats',
  mainFindings = 'mainFindings',
  detailedFindings = 'detailedFindings',
  // conceptThreats = 'threats',
  securityConcepts = 'securityConcepts',
  controlGroups = 'controlGroups',
  feeds = 'feeds',
  threatsOem = 'threatsOem',
  controlGroupsOem = 'controlGroupsOem',
}

export interface IBrand {
  id?: string;
  name: string;
  fullName: string;
  logo: string;
}

export interface IGateway {
  id: string;
  name: string;
  safetyCriticalityLevel: string;
  firmwareVersion: string;
  onlineConnectivity: TOnlineConnectivity;
  operationSystem: string;
  vehicleId?: string;
}

export interface IVehicleBasicFields {
  model: string;
  platform: string;
}

export interface IVehicle extends IVehicleBasicFields {
  id: string;
  manufacturer: string;
  name: string;
  riskLevel: keyof typeof ERiskLevels;
  raProgress: number;
  brand: IBrand;
  complianceLevel: number;
  lastUpdate: string;
  logo: string;
  photo: string;
  phase: EPhase;
  regulation: ERegulations;
  development: string;
  testing: string;
  compliancy: string;
  production: string;
}

export interface IVehicleFormValues {
  photo: File;
  brand: IOption;
  model: string;
  platform: string;
  phase: IOption;
  regulation: IOption;
  haveGateway: boolean;
  gateway?: IGatewayFormValues;
  development: Date;
  compliancy: Date;
  testing: Date;
  production: Date;
}

export interface IGatewayFormValues {
  name: string;
  safetyCriticalityLevel: IOption;
  operationSystem: string;
  firmwareVersion: string;
  connectivity: boolean;
}

export interface IPostedVehicle extends IVehicleBasicFields {
  brandId: string;
  photo: File;
  gateway?: Partial<IGateway>;
  development: Date;
  testing: Date;
  compliancy: Date;
  production: Date;
  phase: string;
  regulation: string;
  haveGateway: boolean;
}

export interface IAuthor {
  id: string;
  name: string;
  password: string;
  avatar: string;
}

export interface IPostDomain {
  vehicleId: string;
  name: string;
  domainUsage: string;
  communication: string[];
  onlineConnectivity: TOnlineConnectivity;
  color: string;
  background: string;
  authorId: string;
}

export interface IGatewayResponse {
  type: EGatewayTypes;
  gateway: IGateway | IECUasGateway;
}

export interface IDomain {
  id: string;
  model: string;
  platform: string;
  name: string;
  domainUsage: string;
  communication: string[];
  onlineConnectivity: TOnlineConnectivity;
  riskLevel?: ERiskLevels;
  author: IAuthor;
  color: string;
  background: string;
  lastUpdate: string;
}

export interface ISupplier {
  id: string;
  name: string;
}

export interface ICommunication {
  id: string;
  communication: string;
}

export interface IECUBasicFields {
  name: string;
  complianceLevel?: number;
  operationSystem?: string;
  firmwareVersion?: string;
  onlineConnectivity: TOnlineConnectivity;
  hostVMorDocker: string | boolean;
  runVMorDocker: string | boolean;
  haveDirectCommunication?: boolean;
  updateProcess?: boolean;
  managingOrUsing?: EUpdateProcessRadio;
  storeConfidentialData?: boolean;
  useCryptographicTechnologies?: boolean;
  indirectCommunicationChannel?: boolean;
  hostECUId?: string;
  isGateway?: boolean;
  isSwitch?: boolean;
}

export interface IECUBasicInfoField {
  type: EECUTypes;
  directCommunication?: EDirectCommunication[];
}

export interface IECUFormValues extends IECUBasicFields {
  supplierId: string;
  hostECU: IOption;
  isRegular: boolean;
  supplier: IOption;
  domains: IOptionsList[];
  directCommunication: IOption[];
  connectedECUs: IOptionsList[];
}

export interface IPostedECU extends IECUBasicFields, IECUBasicInfoField {
  supplierId: string;
  domains?: ICommunication[];
  connectedECUs?: ICommunication[];
}

export interface ITicket {
  name: string;
  userId: string;
  vehicleId: string;
  elementType: string;
  elementName: string;
  elementId?: string;
  message?: string;
  user?: IAuthor;
  vehicle?: IVehicle;
  status: string;
  type: ETicketsTypes;
  created: string;
  updated: string;
}

export interface IECU extends IECUBasicFields, IECUBasicInfoField {
  id: string;
  vehicle: IVehicle;
  domains: IDomain[];
  supplier: ISupplier;
  complianceLevel: number;
  ticket: ITicket;
  safetyCriticalityLevel: string;
  riskLevel: ERiskLevels;
  connectedECUs: IECU[];
  relativeECUs?: IECU[];
  connectedVMs?: IECU[];
  vehicleId: string;
}

export interface IECUasGateway extends IECU {
  color?: string;
  background?: string;
}

export interface IFunctions {
  id: string;
  model: string;
  platform: string;
  domains: IDomain[];
  ecu: IECU;
  name: string;
  supplier: string;
  complianceLevel: number;
  version: string;
  cluster: string;
  connectivity: string;
}

export interface IData {
  id: string;
  model: string;
  platform: string;
  domains: IDomain[];
  ecu: IECU;
  functions: IFunctions;
  name: string;
}

export interface IPropertiesData {
  [key: string]: string | number;
}

export interface IColumn {
  Header: string;
  accessor: string;
  name?: string;
}

export interface IFilter {
  name: string;
  label: string;
}

export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface ILoginData {
  name: string;
  password: string;
}

export interface IElementsTab {
  name: string;
  columns: Column[];
  type: ETableTypes;
}

export interface IElementsTabsColumnsList {
  [key: string]: IColumn[];
}

export interface IVehicleRow {
  brand: string;
  model: string;
  platform: string;
  phase: EPhase;
  riskLevel: ReactElement;
  complianceLevel: ReactElement;
  raProgress: ReactElement;
  lastUpdate: ReactElement;
  actions: ReactElement;
  logo: string;
  photo: string;
  name: string;
}

export interface IDomainRow {
  model: string;
  platform: string;
  name: string;
  usage: string;
  communication: string;
  connectivity: string;
  author: ReactElement;
  update: ReactElement;
  color: ReactElement;
  actions: ReactElement;
}

export interface IECURow {
  name: string;
  type: string;
  model: string;
  platform: string;
  domain: string;
  supplier: string;
  complianceLevel: ReactElement;
  operationSystem: string;
  firmwareVersion: string;
  connectivity: string;
  actions: ReactElement;
}

export interface IFunctionsRow {
  model: string;
  platform: string;
  domain: string;
  ecu: string;
  name: string;
  supplier: string;
  level: ReactElement;
  version: string;
  cluster: string;
  connectivity: string;
  actions: ReactElement;
}

export interface IDataRow {
  model: string;
  platform: string;
  domain: string;
  ecu: string;
  function: string;
  name: string;
}

export interface IThreatRow {
  name: string;
  category: string;
  calculatedAttackFeasibility: string | number;
  classificationGroup: string;
  securityObjective: string;
  subRows?: { control: IControl }[];
}

export interface IThreatListRow {
  name: ReactElement;
  actions: ReactElement;
}

export interface IVehicleFeed {
  brand: IBrand;
  model: string;
  platform: string;
  riskLevel: keyof typeof ERiskLevels;
  ECUs: IECU;
  riskLevelProgress: IRiskLevelProgressData[];
}

export interface IFeedRow {
  brand: string;
  model: string;
  platform: string;
  riskLevel: ReactElement;
  status: ReactElement;
  ECUs: IECU;
}

export interface IMainFindingRow {
  id: string;
  topic: string;
  relatedRisk: string;
  threat: string;
  recommendations: string;
  attackFeasibility: string;
  damagePotential: string;
  comments: string;
  ticketNumber: string;
}

export interface IDetailedFindingRow {
  id: string;
  topic: string;
  status: string;
  type: string;
  purpose: string;
  description: string;
  threat: string;
  recommendations: string;
  expertise: string;
  access: string;
  time: string;
  equipmentRepetition: string;
  targetRepetition: string;
  sumRepetition: string;
  attackDifficultyFinalScope: string;
  cve: string;
}

export interface IConceptRow {
  name: string;
  description: ReactElement | string;
  subRows: { subRequirement: IRequirement }[];
}

export interface IControlsRow {
  name: string;
  actions: ReactElement;
  subRows: { control: IControl }[];
}

export interface IControlGroups {
  name: string;
  controls: IControl[];
}

export interface IOption<T = string> {
  label: T;
  value: T;
  isDisabled?: boolean;
}

export interface IField {
  label: string;
  formLabel?: string;
  placeholder?: string;
  defaultValue?: TList<Partial<IOption>>;
  initialValue?: string | boolean | TList<Partial<IOption>>[];
  values?: string[];
  name: string;
  component?: ReactNode;
  options?: IOption[];
  isMulti?: boolean;
  isSelect?: boolean;
  disabled?: boolean;
  maxLength?: number;
  subFields?: {
    [key: string]: IField;
  };
}

export interface IDateField extends IField {
  minDate?: string;
}

export interface IFieldsList {
  [key: string]: IField;
}

export interface ICurrentElement {
  type: EAside;
  id: string;
}

export interface IProperties {
  name: string;
  value?: string;
}

export interface IControllerProperties extends IProperties {
  accessor: EController;
}

export interface IDomainProperties extends IProperties {
  name: string;
  value?: string;
  accessor: EDomain;
}

export interface IOptionsList {
  [key: string]: IOption;
}

export interface ISecurityConcept {
  id: string;
  name: string;
  descriptions?: string[];
  subRequirements?: IRequirement[];
}

export interface IRequirement {
  id: string;
  reqId: string;
  name?: string;
  type?: string;
  description?: string;
}

export interface IPenetrationTest {
  id: string;
  name: string;
}

export interface IAlert {
  id: string;
  name: string;
  planned: Date;
  started: Date;
  url: string;
  vehicleIds: string[];
}

export interface IParams {
  [key: string]: string;
}

export interface ISecurityDevelopmentTab {
  name: string;
  params: IParams;
  type: ETableTypes;
}

export interface IControl {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  checked: boolean;
  comment: string;
  details: IControlsDetails;
}

export enum EToggleTreatsTabTypes {
  UNECE = 'UNECE',
  OEM = 'OEM',
}

export interface IToggleTab {
  name: string;
  columns: Column[];
  type: EToggleTreatsTabTypes;
}

export interface IThreatsDetails {
  group: string;
  calculatedAttackFeasibility: string | number;
  classificationGroup: string;
  securityObjective: string;
  technologies: string;
  dataECUThreat: string;
  elapsedTime: string;
  expertise: string;
  knowledge: string;
  equipment: string;
  windowsOfOpportunityAccess: string;
  affectLevel?: string;
}

export interface IThreat {
  id: number;
  name: string;
  category: string;
  checked: true;
  comment: string;
  details: IThreatsDetails;
  controls: IControl[];
}

export interface IControlsDetails {
  relatedThreats: string;
  calculatedControlStrength: string;
  mitigationGroups: string[];
  affectLevel: string;
  elapsedTime: string;
  expertise: string;
  knowledge: string;
  equipment: string;
  windowsOfOpportunity: string;
}

export interface IHeader {
  expandedDepth: number;
  toggleAllRowsExpanded: (isExpanded: boolean) => void;
}

export interface ISecurityConceptControlValues {
  approved: EApproved;
  implemented: EImplemented;
  comment: string;
}

export interface IMainFinding {
  id: string;
  topic: string;
  relatedRisk: string;
  threat: string;
  recommendations: string;
  attackFeasibility: string;
  damagePotential: string;
  comments: string;
  ticketNumber: string;
}

export interface IDetailedFinding {
  id: string;
  topic: string;
  status: string;
  type: string;
  purpose: string;
  description: string;
  threat: string;
  recommendations: string;
  expertise: EExpertise;
  access: EAccess;
  time: string;
  equipmentRepetition: EEquipment;
  targetRepetition: string;
  sumRepetition: string;
  attackDifficultyFinalScope: EAttackDifficultyFinalScope;
  cve: string;
}

export interface ISubRequirementsValues {
  approved: EApproved;
  implemented: EImplemented;
  comment: string;
  supplierComment: string;
}

export interface IRiskLevelProgressData {
  id: string;
  riskLevel: keyof typeof ERiskLevels;
  date: string;
}
export interface IChartParams {
  height: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  value: number;
  text: string;
  className?: string;
}

export interface IProgressPoint {
  title: string;
  startDate?: string;
  date?: string;
  status?: EPhaseStatus;
}

export interface INamedObject {
  name: string;
}

export interface IIRAComment {
  text: string;
  authorId: string;
  date: string;
  authorName?: string;
}

export interface ICommentWithAuthor {
  comment: IIRAComment;
  checked: boolean;
  authorName: string;
}

export interface IComment {
  text: string;
  authorId: string;
  date: string;
}
