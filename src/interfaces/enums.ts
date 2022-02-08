export enum ERiskLevels {
  veryLow = 'Very Low',
  low = 'Low',
  medium = 'Medium',
  moderate = 'Moderate',
  high = 'High',
  veryHigh = 'Very High',
  noData = 'No Data',
}

export enum EBadgeTypes {
  veryLow = 'success',
  low = 'primary',
  medium = 'warning',
  moderate = 'warning',
  high = 'warning-danger',
  veryHigh = 'danger',
  noData = 'default',
}

export enum ETicketsTypes {
  completment = 'completment',
  riskAssessment = 'riskAssessment',
  implementation = 'implementation',
}

export enum EAside {
  gateway = 'gateways',
  domain = 'domains',
  ecu = 'ecus',
  ECUasGateway = 'ECUasGateway',
  subEcu = 'subEcu',
}

export enum EAsideActualElement {
  gateways = 'gateways',
  domains = 'domains',
  ecus = 'ecus',
  ECUasGateway = 'ecus',
  subEcu = 'ecus',
}

export enum EConnectivity {
  Ethernet = 'Ethernet',
  CAN = 'CAN',
  LIN = 'LIN',
}

export enum EUpdateProcessRadio {
  managing = 'managing',
  using = 'using',
}

export enum EDirectCommunication {
  WiFi = 'Wi-Fi',
  bluetooth = 'Bluetooth',
  NFC = 'NFC',
  BLE = 'BLE',
  GPS = 'GPS/GNSS',
  cellularConnection = 'Cellular Connection',
  V2X = 'V2X',
}

export enum EElementCreationTabs {
  create = 'Create New',
  choose = 'Choose from Collection',
}

export enum EInitiatePrivacyLawImpact {
  Severe = 'Severe | The privacy damage leads to significant or even irreversible impact to the road user',
  Major = 'Major | The privacy damage leads to serious impact to the road user',
  Moderate = 'Moderate | The privacy damage leads to significant inconveniences to the road user ',
  Negligible = 'Negligible | The privacy damage leads to no effect or can create few inconveniencies to the road user',
  None = 'No privacy / law impact',
}

export enum EInitiateOperationalImpact {
  Severe = 'Severe | The operational damage leads to a vehicle not working, from non-intended operation up to the vehicle being non-operational',
  Major = 'Major | The operational damage leads to the loss of a vehicle function',
  Moderate = 'Moderate | The operational damage leads to partial degradation of a vehicle function or performance',
  Negligible = 'Negligible | The operational damage leads to no effect or indiscernible degradation of a vehicle function or performance',
  None = 'No operational impact',
}

export enum EInitiateFinancialImpact {
  Severe = 'Severe | The financial damage leads to catastrophic consequences which the affected stakeholder might not overcome',
  Major = 'Major | The financial damage leads to substantial consequences which the affected stakeholder will be able to overcome',
  Moderate = 'Moderate | The financial damage leads to inconvenient consequences which the affected stakeholder will be able to overcome with limited resources',
  Negligible = 'Negligible | The financial damage leads to no effect, negligible consequences or is irrelevant to the stakeholder',
  None = 'No financial impact',
}

export enum EInitiateSafetyImpact {
  Severe = 'Severe | Life-threatening injuries (survival uncertain), fatal injuries ',
  Major = 'Major | Severe and life-threatening injuries (survival probable)',
  Moderate = 'Moderate | Light and moderate injuries',
  Negligible = 'Negligible | No injuries',
  None = 'No safety impact',
}

export enum EController {
  id = 'id',
  name = 'name',
  safetyCriticalityLevel = 'safetyCriticalityLevel',
  firmwareVersion = 'firmwareVersion',
  onlineConnectivity = 'onlineConnectivity',
  vehicleId = 'vehicleId',
  operationSystem = 'operationSystem',
}

export enum EDomain {
  id = 'id',
  model = 'model',
  platform = 'platform',
  name = 'name',
  domainUsage = 'domainUsage',
  communication = 'communication',
  onlineConnectivity = 'onlineConnectivity',
  color = 'color',
}

export enum EECU {
  id = 'id',
  name = 'name',
  type = 'type',
  complianceLevel = 'complianceLevel',
  riskLevel = 'riskLevel',
  operationSystem = 'operationSystem',
  firmwareVersion = 'firmwareVersion',
  onlineConnectivity = 'onlineConnectivity',
  assignedTo = 'assignedTo',
  supplier = 'supplier',
  safetyCriticalityLevel = 'safetyCriticalityLevel',
  domain = 'domains',
  connectedECUs = 'connectedECUs',
}

export enum EApproved {
  approved = 'Approved',
  notApproved = 'Not Approved',
}

export enum EImplemented {
  implemented = 'Implemented',
  notImplemented = 'Not Implemented',
}

export enum EPhaseStatus {
  active = 'active',
  inProgress = 'in-progress',
}

export enum EPhase {
  development = 'Development',
  testing = 'Testing',
  compliancy = 'Compliancy',
  production = 'Production',
}

export enum ERegulations {
  wp29 = 'UNECE WP.29',
}

export enum ESafetyCriticalityLevel {
  none = 'None',
  asilA = 'ASIL A',
  asilB = 'ASIL B',
  asilC = 'ASIL C',
  asilD = 'ASIL D',
}

export enum EECUTypes {
  gateway = 'Gateway',
  ethernetSwitch = 'Ethernet Switch',
  hostECU = 'Host',
  VM = 'VM',
  regular = 'Regular',
}

export enum EProgressBarTypes {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum ESecurityTypes {
  concept = 'concept',
  requirements = 'requirements',
  penetrationTests = 'penetrationTests',
}
export enum EThreatsControlsPath {
  threats = 'threats',
  controls = 'controls',
}

export enum EFindings {
  main = 'Main Findings',
  detailed = 'Detailed Findings',
}

export enum EThreatTabs {
  UNECE = 'UNECE',
  OEM = 'OEM',
}

export enum ETicketStatus {
  open = 'open',
  progress = 'progress',
  closed = 'closed',
  deleted = 'deleted',
}

export enum EExpertise {
  layman = 'Layman',
  proficient = 'Proficient',
  expert = 'Expert',
  multipleExperts = 'Multiple Experts',
}

export enum EAccess {
  unlimited = 'Unlimited',
  easy = 'Easy',
  moderate = 'Moderate',
  difficult = 'Difficult',
  multipleExperts = 'Multiple Experts',
}

export enum EEquipment {
  standard = 'Standard',
  specialized = 'Specialized',
  bespoke = 'Bespoke',
  multipleBespoke = 'Multiple bespoke',
}

export enum EAttackDifficultyFinalScope {
  veryHigh = 'Very High / Basic Attack',
  high = 'High / Enhanced-Basic Attack',
  medium = 'Medium / Moderate Attack',
  low = 'Low / Difficult Attack',
  veryLow = 'Very Low / Beyond Difficult Attack',
}

export enum EComponentStatuses {
  large = 'large',
  usual = 'usual',
}

export enum EBadgeText {
  primary = 'Low',
  danger = 'Very High',
  success = 'Very Low',
  warning = 'Moderate',
}

export enum EIRASteps {
  step1 = 1,
  step2 = 2,
  step3 = 3,
  step4 = 4,
  step5 = 5,
  step6 = 6,
}

export enum EGatewayTypes {
  gateway = 'gateway',
  ecu = 'ECUasGateway',
}
