import { FormikInputSwitch } from '@components/common/form-controls/FormikInputSwitch';
import { FormikSwitchInfo } from '@components/common/form-controls/FormikSwitchInfo';
import { Input } from '@components/common/form-controls/Input';
import { FormikRadiobutton } from '@components/common/form-controls/FormikRadiobutton';
import { FormikSelectComponent } from '@components/common/form-controls/SelectComponent';
import {
  EConnectivity,
  EPhase,
  ERegulations,
  ESafetyCriticalityLevel,
  EDirectCommunication,
  EUpdateProcessRadio,
  EInitiatePrivacyLawImpact,
  EInitiateSafetyImpact,
  EInitiateFinancialImpact,
  EInitiateOperationalImpact,
} from '@interfaces/enums';
import { IDateField, IFieldsList } from '@interfaces/interfaces';
import { TList } from '@interfaces/types';
import { backgroundColors } from './color';

export const loginFormElements = {
  title: 'Login to start',
  fields: [
    {
      name: 'name',
      label: 'Username',
      element: 'input',
      type: 'text',
      initialValue: '',
      maxLength: 15,
      placeholder: 'Enter Username',
    },
    {
      name: 'password',
      label: 'Password',
      element: 'input',
      type: 'password',
      initialValue: '',
      maxLength: 50,
      placeholder: 'Enter Password',
    },
  ],
  button: {
    text: 'Log In',
  },
  forgotPasswordText: 'Forgot Password?',
};

export const domainConnectivity = [
  { value: EConnectivity.Ethernet, label: EConnectivity.Ethernet },
  { value: EConnectivity.CAN, label: EConnectivity.CAN },
  { value: EConnectivity.LIN, label: EConnectivity.LIN },
];

export const safetyImpactInitiateOptions = [
  { value: EInitiateSafetyImpact.Severe, label: EInitiateSafetyImpact.Severe },
  { value: EInitiateSafetyImpact.Major, label: EInitiateSafetyImpact.Major },
  { value: EInitiateSafetyImpact.Moderate, label: EInitiateSafetyImpact.Moderate },
  { value: EInitiateSafetyImpact.Negligible, label: EInitiateSafetyImpact.Negligible },
  { value: EInitiateSafetyImpact.None, label: EInitiateSafetyImpact.None },
];

export const financialImpactInitiateOptions = [
  { value: EInitiateFinancialImpact.Severe, label: EInitiateFinancialImpact.Severe },
  { value: EInitiateFinancialImpact.Major, label: EInitiateFinancialImpact.Major },
  { value: EInitiateFinancialImpact.Moderate, label: EInitiateFinancialImpact.Moderate },
  { value: EInitiateFinancialImpact.Negligible, label: EInitiateFinancialImpact.Negligible },
  { value: EInitiateFinancialImpact.None, label: EInitiateFinancialImpact.None },
];

export const operationalImpactInitiateOptions = [
  { value: EInitiateOperationalImpact.Severe, label: EInitiateOperationalImpact.Severe },
  { value: EInitiateOperationalImpact.Major, label: EInitiateOperationalImpact.Major },
  { value: EInitiateOperationalImpact.Moderate, label: EInitiateOperationalImpact.Moderate },
  { value: EInitiateOperationalImpact.Negligible, label: EInitiateOperationalImpact.Negligible },
  { value: EInitiateOperationalImpact.None, label: EInitiateOperationalImpact.None },
];

export const privacyLawImpactInitiateOptions = [
  { value: EInitiatePrivacyLawImpact.Severe, label: EInitiatePrivacyLawImpact.Severe },
  { value: EInitiatePrivacyLawImpact.Major, label: EInitiatePrivacyLawImpact.Major },
  { value: EInitiatePrivacyLawImpact.Moderate, label: EInitiatePrivacyLawImpact.Moderate },
  { value: EInitiatePrivacyLawImpact.Negligible, label: EInitiatePrivacyLawImpact.Negligible },
  { value: EInitiatePrivacyLawImpact.None, label: EInitiatePrivacyLawImpact.None },
];

export const domainCreationElements = {
  name: {
    name: 'name',
    label: 'Domain Name',
    initialValue: '',
    placeholder: 'Enter Domain Name',
    maxLength: 25,
  },
  usage: {
    name: 'domainUsage',
    label: 'Domain Usage',
    initialValue: '',
    placeholder: 'Enter Domain Usage',
    maxLength: 25,
  },
  connectivity: {
    name: 'connectivity',
    label: 'Online Connectivity',
    initialValue: false,
    placeholder: 'Online',
  },
  communication: {
    label: 'Communication',
    name: 'communication',
    initialValue: '',
    isMulti: true,
    options: domainConnectivity,
    placeholder: 'Communication',
  },
  color: {
    label: 'Domain Color',
    name: 'color',
    initialValue: Object.keys(backgroundColors)[0],
    values: Object.keys(backgroundColors),
  },
};

const phaseOptions = [
  { value: EPhase.development, label: EPhase.development },
  { value: EPhase.testing, label: EPhase.testing },
  { value: EPhase.compliancy, label: EPhase.compliancy },
  { value: EPhase.production, label: EPhase.production },
];

const regulationOptions = [{ value: ERegulations.wp29, label: ERegulations.wp29 }];

export const vehicleCreationElements = {
  photo: {
    name: 'photo',
    label: '',
    initialValue: '',
  },
  brand: {
    label: 'Brand',
    name: 'brand',
    initialValue: '',
    placeholder: 'Brand',
    component: FormikSelectComponent,
    isSelect: true,
  },
  model: {
    label: 'Model',
    name: 'model',
    initialValue: '',
    placeholder: 'Model',
    component: Input,
    isSelect: false,
    maxLength: 25,
  },
  platform: {
    label: 'Platform',
    name: 'platform',
    initialValue: '',
    placeholder: 'Platform',
    component: Input,
    isSelect: false,
    maxLength: 25,
  },
  phase: {
    label: 'Phase',
    name: 'phase',
    initialValue: '',
    placeholder: 'Phase',
    options: phaseOptions,
    component: FormikSelectComponent,
    isSelect: true,
  },
  regulation: {
    label: 'Regulation',
    name: 'regulation',
    initialValue: '',
    placeholder: 'Regulation',
    options: regulationOptions,
    component: FormikSelectComponent,
    isSelect: true,
  },
  haveGateway: {
    name: 'haveGateway',
    label: 'Does the vehicle have Gateway?',
    initialValue: false,
  },
};

const safetyCriticalityLevelOptions = [
  { label: ESafetyCriticalityLevel.none, value: ESafetyCriticalityLevel.none },
  { label: ESafetyCriticalityLevel.asilA, value: ESafetyCriticalityLevel.asilA },
  { label: ESafetyCriticalityLevel.asilB, value: ESafetyCriticalityLevel.asilB },
  { label: ESafetyCriticalityLevel.asilC, value: ESafetyCriticalityLevel.asilC },
  { label: ESafetyCriticalityLevel.asilD, value: ESafetyCriticalityLevel.asilD },
];

export const gatewayInfo = {
  name: {
    name: 'name',
    label: 'Gateway Name',
    initialValue: '',
    placeholder: 'Enter Gateway Name',
    component: Input,
    isSelect: false,
    maxLength: 25,
  },
  safetyCriticalityLevel: {
    name: 'safetyCriticalityLevel',
    label: 'Safety Criticality Level',
    placeholder: 'Choose Safety Criticality Level',
    options: safetyCriticalityLevelOptions,
    initialValue: '',
    component: FormikSelectComponent,
    isSelect: true,
  },
  operationSystem: {
    name: 'operationSystem',
    label: 'Operation System ',
    initialValue: '',
    placeholder: 'Enter Operation System ',
    component: Input,
    isSelect: false,
    maxLength: 25,
  },
  firmwareVersion: {
    label: 'Firmware Version',
    name: 'firmwareVersion',
    initialValue: '',
    placeholder: 'Enter Firmware Version',
    component: Input,
    isSelect: false,
    maxLength: 25,
  },
  connectivity: {
    name: 'connectivity',
    label: 'Online Connectivity',
    initialValue: true,
    placeholder: 'Online',
    component: FormikInputSwitch,
    isSelect: false,
    disabled: true,
  },
};
const directCommunicationOptions = [
  { label: EDirectCommunication.WiFi, value: EDirectCommunication.WiFi },
  { label: EDirectCommunication.bluetooth, value: EDirectCommunication.bluetooth },
  { label: EDirectCommunication.NFC, value: EDirectCommunication.NFC },
  { label: EDirectCommunication.BLE, value: EDirectCommunication.BLE },
  { label: EDirectCommunication.GPS, value: EDirectCommunication.GPS },
  { label: EDirectCommunication.cellularConnection, value: EDirectCommunication.cellularConnection },
  { label: EDirectCommunication.V2X, value: EDirectCommunication.V2X },
];

export const vehicleCreationDates: TList<IDateField> = {
  development: {
    name: 'development',
    label: 'Development',
    formLabel: 'End Date',
    initialValue: '',
  },
  testing: {
    name: 'testing',
    label: 'Testing',
    formLabel: 'End Date',
    initialValue: '',
    minDate: 'development',
  },
  compliancy: {
    name: 'compliancy',
    label: 'Compliancy',
    formLabel: 'End Date',
    initialValue: '',
    minDate: 'testing',
  },
  production: {
    name: 'production',
    label: 'Production',
    formLabel: 'End Date',
    initialValue: '',
    minDate: 'compliancy',
  },
};

export const ECUCreation: IFieldsList = {
  name: {
    name: 'name',
    label: 'ECU Name',
    initialValue: '',
    placeholder: 'Enter ECU Name',
    component: Input,
    maxLength: 25,
  },
  operationSystem: {
    name: 'operationSystem',
    label: 'Operation System ',
    initialValue: '',
    placeholder: 'Enter Operation System ',
    component: Input,
    maxLength: 25,
  },
  connectivity: {
    name: 'onlineConnectivity',
    label: 'Online Connectivity',
    initialValue: true,
    placeholder: 'Online',
    component: FormikInputSwitch,
    disabled: true,
  },
  firmwareVersion: {
    label: 'Firmware Version',
    name: 'firmwareVersion',
    initialValue: '',
    placeholder: 'Enter Firmware Version',
    component: Input,
    maxLength: 25,
  },
  supplier: {
    label: 'Supplier',
    name: 'supplier',
    initialValue: '',
    placeholder: 'Supplier',
  },
  isRegular: {
    name: 'isRegular',
    label: 'Is the ECU being Regular?',
    initialValue: true,
    component: FormikSwitchInfo,
  },
  isGateway: {
    name: 'isGateway',
    label: 'Does the ECU perform as Gateway?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  isSwitch: {
    name: 'isSwitch',
    label: 'Does the ECU perform as Ethernet Switch?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  hostVMorDocker: {
    name: 'hostVMorDocker',
    label: 'Does the ECU host Virtual Machines/ Dockers?',
    initialValue: true,
    component: FormikSwitchInfo,
  },
  runVMorDocker: {
    name: 'runVMorDocker',
    label: 'Is the ECU running as Virtual Machine / Docker?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  hostECU: {
    name: 'hostECU',
    placeholder: 'Choose ECU',
    label: 'What is the Host ECU?',
    initialValue: '',
  },
  domains: {
    name: 'domains',
    label: '',
    defaultValue: { id: {}, communication: {} },
    initialValue: [{ id: {}, communication: {} }],
    subFields: {
      domain: {
        name: 'id',
        placeholder: 'Choose Domain',
        label: 'Hosted Domain',
        initialValue: '',
      },
      communication: {
        name: 'communication',
        placeholder: 'Choose Communication',
        label: 'Communication',
        initialValue: '',
        options: domainConnectivity,
      },
    },
  },
  haveDirectCommunication: {
    name: 'haveDirectCommunication',
    label: '“Does the ECU have a direct communication channel to the outside world?“ ',
    initialValue: true,
    placeholder: 'Enter ECU Name',
    component: FormikSwitchInfo,
  },
  directCommunication: {
    name: 'directCommunication',
    label: '',
    initialValue: [],
    placeholder: 'Communication',
    isMulti: true,
    options: directCommunicationOptions,
  },
  updateProcess: {
    name: 'updateProcess',
    label: 'Is the ECU related to Over-The-Air update process on the vehicle?',
    initialValue: true,
    component: FormikSwitchInfo,
  },
  managingOrUsing: {
    name: 'managingOrUsing',
    label: '',
    values: [EUpdateProcessRadio.managing, EUpdateProcessRadio.using],
    initialValue: EUpdateProcessRadio.managing,
    component: FormikRadiobutton,
  },
  storeConfidentialData: {
    name: 'storeConfidentialData',
    label: 'Does the ECU store or process confidential data?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  useCryptographicTechnologies: {
    name: 'useCryptographicTechnologies',
    label: 'Does the ECU use cryptographic technologies?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  indirectCommunicationChannel: {
    name: 'indirectCommunicationChannel',
    label: 'Does the ECU have an indirect communication channel to the outside world via other ECU?',
    initialValue: false,
    component: FormikSwitchInfo,
  },
  connectedECUs: {
    name: 'connectedECUs',
    label: '',
    defaultValue: { id: {}, communication: {} },
    initialValue: [{ id: {}, communication: {} }],
    subFields: {
      ECU: {
        name: 'id',
        placeholder: 'Choose ECU',
        label: 'ECU',
        initialValue: '',
      },
      communication: {
        name: 'communication',
        options: domainConnectivity,
        placeholder: 'Choose Communication',
        label: 'Communication',
        initialValue: '',
      },
    },
  },
};

export const setDamagePotential = {
  safetyImpact: {
    formLabel: 'Safety Impact',
    name: 'safetyImpact',
    label: 'Safety Impact',
    initialValue: '',
    options: safetyImpactInitiateOptions,
    placeholder: '',
  },
  financialImpact: {
    formLabel: 'Financial Impact',
    name: 'financialImpact',
    label: 'Financial Impact',
    initialValue: '',
    options: financialImpactInitiateOptions,
    placeholder: '',
  },
  operationalSystem: {
    formLabel: 'Operational Impact',
    name: 'operationalSystem',
    label: 'Operational Impact',
    initialValue: '',
    options: operationalImpactInitiateOptions,
    placeholder: '',
  },
  privacyLawImpact: {
    formLabel: 'Privacy/Law Impact',
    label: 'Privacy/Law Impact',
    name: 'privacyLawImpact',
    initialValue: '',
    options: privacyLawImpactInitiateOptions,
    placeholder: '',
  },
};

export const initiateRiskElements = {
  Confidentiality: { setDamagePotential },
  Integrity: { setDamagePotential },
  Availability: { setDamagePotential },
  Authenticity: { setDamagePotential },
};

export const securityConceptControlForm: IFieldsList = {
  approved: {
    name: 'approved',
    initialValue: 'Not Approved',
    label: '',
    values: ['Approved', 'Not Approved'],
    component: FormikRadiobutton,
  },
  implemented: {
    name: 'implemented',
    initialValue: 'Not Implemented',
    label: '',
    values: ['Implemented', 'Not Implemented'],
    component: FormikRadiobutton,
  },
  comment: {
    name: 'comment',
    initialValue: '',
    label: '',
    placeholder: 'Add a message',
  },
};

export const subRequirementForm: IFieldsList = {
  approved: {
    name: 'approved',
    initialValue: 'Not Approved',
    label: '',
    values: ['Approved', 'Not Approved'],
    component: FormikRadiobutton,
  },
  implemented: {
    name: 'implemented',
    initialValue: 'Not Implemented',
    label: '',
    values: ['Implemented', 'Not Implemented'],
    component: FormikRadiobutton,
  },
  comment: {
    name: 'comment',
    initialValue: '',
    label: '',
    placeholder: 'Add OEM Comments',
  },
  supplierComment: {
    name: 'supplierComment',
    initialValue: '',
    label: '',
    placeholder: 'Add Supplier Comments',
  },
};

export const feedFormElements: IFieldsList = {
  vulnerability: {
    name: 'vulnerability',
    label: 'Vulnerability may affect the vehicle cyber security level?',
    initialValue: true,
  },
  OTA: {
    name: 'OTA',
    label: 'OTA scheduled?',
    initialValue: false,
  },
  recall: {
    name: 'recall',
    label: 'Recall scheduled?',
    initialValue: false,
  },
  maintenance: {
    name: 'maintenance',
    label: 'Maintenance scheduled?',
    initialValue: false,
  },
};
