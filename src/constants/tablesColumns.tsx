import React from 'react';
import { CellValue, Column } from 'react-table';
import { ExpandAllBtn } from '@components/common/ExpandAllBtn';
import { Btn } from '@components/common/form-controls/Btn';
import { ETableTypes, IColumn, IElementsTabsColumnsList, IHeader } from '@interfaces/interfaces';
import classNames from 'classnames';

const vehicleInfoTableColumns: IColumn[] = [
  {
    Header: 'Model',
    accessor: 'model', // accessor is the "key" in the data
  },
  {
    Header: 'Platform',
    accessor: 'platform',
  },
];

const domainInfoTableColumns: IColumn[] = [
  ...vehicleInfoTableColumns,
  {
    Header: 'Domain',
    accessor: 'domain',
  },
];

export const DomainsTableColumns: IColumn[] = [
  ...vehicleInfoTableColumns,
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Domain Usage',
    accessor: 'usage',
  },
  {
    Header: 'Communication',
    accessor: 'communication',
  },
  {
    Header: 'Online Connectivity',
    accessor: 'connectivity',
  },
  {
    Header: 'Author',
    accessor: 'author',
  },
  {
    Header: 'Last Update',
    accessor: 'update',
  },
  {
    Header: 'Color',
    accessor: 'color',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

export const ECUsTableColumns: IColumn[] = [
  ...domainInfoTableColumns,
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Supplier',
    accessor: 'supplier',
  },
  {
    Header: 'Compliance Level',
    accessor: 'complianceLevel',
  },
  {
    Header: 'Operation System',
    accessor: 'operationSystem',
  },
  {
    Header: 'Firmware Version',
    accessor: 'firmwareVersion',
  },
  {
    Header: 'Online Connectivity',
    accessor: 'connectivity',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

export const dropdownColumnWithExpandAll: Column[] = [
  {
    Header: ({ toggleAllRowsExpanded, expandedDepth }: IHeader) => (
      <ExpandAllBtn isExpanded={Boolean(expandedDepth)} toggleAllRowsExpanded={toggleAllRowsExpanded} />
    ),
    id: 'expander',
    Cell: ({ row }: { row: CellValue }) => (
      <span {...row.getToggleRowExpandedProps()}>
        <Btn
          btnStatus={classNames('btn-xs-primary mr-10', { active: row.isExpanded })}
          btnIcon={classNames('icon-arrow-border-down', { active: row.isExpanded })}
        />
      </span>
    ),
  },
];

export const dropdownColumn: Column[] = [
  {
    Header: (): null => null,
    id: 'expander',
    Cell: ({ row }: { row: CellValue }) => (
      <span {...row.getToggleRowExpandedProps()}>
        <Btn
          btnStatus={classNames('btn-xs-primary', { active: row.isExpanded })}
          btnIcon={classNames('icon-arrow-border-down', { active: row.isExpanded })}
        />
      </span>
    ),
  },
];

export const vehicleTableInnerColumns: IColumn[] = [
  {
    Header: 'photo',
    accessor: 'photo',
  },
  {
    Header: 'logo',
    accessor: 'logo',
  },
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'production',
    accessor: 'production',
  },
  {
    Header: 'development',
    accessor: 'development',
  },
  {
    Header: 'testing',
    accessor: 'testing',
  },
  {
    Header: 'compliancy',
    accessor: 'compliancy',
  },
  {
    Header: 'id',
    accessor: 'id',
  },
];

export const threatsTableInnerColumns: IColumn[] = [
  {
    Header: 'details',
    accessor: 'details',
  },
];

export const vehiclesTableCustomizedColumns: IColumn[] = [
  {
    Header: 'BRAND',
    accessor: 'brand',
  },
  {
    Header: 'MODEL',
    accessor: 'model',
  },
  {
    Header: 'PLATFORM',
    accessor: 'platform',
  },
  {
    Header: 'CURRENT PHASE',
    accessor: 'phase',
  },
  {
    Header: 'RISK LEVEL',
    accessor: 'riskLevel',
  },
  {
    Header: 'COMPLIANCE LEVEL',
    accessor: 'complianceLevel',
  },
  {
    Header: 'RA PROGRESS',
    accessor: 'raProgress',
  },
  {
    Header: 'LAST UPDATE',
    accessor: 'lastUpdate',
  },
  {
    Header: 'ACTIONS',
    accessor: 'actions',
  },
];

export const FunctionsTableColumns: IColumn[] = [
  ...vehicleInfoTableColumns,
  {
    Header: 'Domain',
    accessor: 'domain',
  },
  {
    Header: 'ECU',
    accessor: 'ecu',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Supplier',
    accessor: 'supplier',
  },
  {
    Header: 'Compliance Level',
    accessor: 'level',
  },
  {
    Header: 'Version',
    accessor: 'version',
  },
  {
    Header: 'Function Cluster',
    accessor: 'cluster',
  },
  {
    Header: 'Online Connectivity',
    accessor: 'connectivity',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

export const DataTableColumns: IColumn[] = [
  ...vehicleInfoTableColumns,
  {
    Header: 'Domain',
    accessor: 'domain',
  },
  {
    Header: 'ECU',
    accessor: 'ecu',
  },
  {
    Header: 'Function',
    accessor: 'function',
  },
  {
    Header: 'Signal Name',
    accessor: 'name',
  },
  {
    Header: 'Actions',
    accessor: 'actions',
  },
];

export const ThreatsColumns: IColumn[] = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Threat Category (UNECE)',
    accessor: 'category',
  },
  {
    Header: 'Calculated Attack Feasibility',
    accessor: 'calculatedAttackFeasibility',
  },
  {
    Header: 'Element Classification Groups',
    accessor: 'classificationGroup',
  },
  {
    Header: 'Security Objective',
    accessor: 'securityObjective',
  },
  {
    Header: 'control',
    accessor: 'control',
  },
];

export const ConceptsColumns: IColumn[] = [
  {
    Header: '',
    accessor: 'name',
  },
  {
    Header: '',
    accessor: 'description',
  },
  {
    Header: '',
    accessor: 'subRequirement',
  },
];

export const ThreatsListColumns: IColumn[] = [
  {
    Header: '',
    accessor: 'name',
  },
  {
    Header: '',
    accessor: 'actions',
  },
  {
    Header: '',
    accessor: 'details',
  },
];

export const MainFindingsColumns: IColumn[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Topic',
    accessor: 'topic',
  },
  {
    Header: 'Related Risk (ID)',
    accessor: 'relatedRisk',
  },
  {
    Header: 'Threat',
    accessor: 'threat',
  },
  {
    Header: 'Recommendations',
    accessor: 'recommendations',
  },
  {
    Header: 'Attack Feasibility',
    accessor: 'attackFeasibility',
  },
  {
    Header: 'Damage Potential (Impact)',
    accessor: 'damagePotential',
  },
  {
    Header: 'Comments',
    accessor: 'comments',
  },
  {
    Header: 'Ticket Number',
    accessor: 'ticketNumber',
  },
];

export const DetailedFindingsColumns: IColumn[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Topic',
    accessor: 'topic',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Threat',
    accessor: 'threat',
  },
  {
    Header: 'Recommendations',
    accessor: 'recommendations',
  },
  {
    Header: 'Expertise',
    accessor: 'expertise',
  },
  {
    Header: 'Access',
    accessor: 'access',
  },
  {
    Header: 'Time',
    accessor: 'time',
  },
  {
    Header: 'Equipment-Repetition',
    accessor: 'equipmentRepetition',
  },
  {
    Header: 'Knowledge of Target - Repetition',
    accessor: 'targetRepetition',
  },
  {
    Header: 'Sum-Repetition',
    accessor: 'sumRepetition',
  },
  {
    Header: 'Attack Difficulty Final Scope',
    accessor: 'attackDifficultyFinalScope',
  },
  {
    Header: 'CVE',
    accessor: 'cve',
  },
];

export const ControlsColumns: IColumn[] = [
  {
    Header: '',
    accessor: 'name',
  },
  {
    Header: '',
    accessor: 'actions',
  },
  {
    Header: 'control',
    accessor: 'control',
  },
];

export const FeedsColumns: IColumn[] = [
  {
    Header: 'Brand',
    accessor: 'brand',
  },
  {
    Header: 'Model',
    accessor: 'model',
  },
  {
    Header: 'Platform',
    accessor: 'platform',
  },
  {
    Header: 'Risk Level',
    accessor: 'riskLevel',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: '',
    accessor: 'ECUs',
  },
];

export const tabsColumnsList: IElementsTabsColumnsList = {
  [ETableTypes.domains]: DomainsTableColumns,
  [ETableTypes.ECUs]: ECUsTableColumns,
  [ETableTypes.functions]: FunctionsTableColumns,
  [ETableTypes.data]: DataTableColumns,
  [ETableTypes.vehicles]: vehiclesTableCustomizedColumns,
  [ETableTypes.conceptThreats]: ThreatsColumns,
  [ETableTypes.securityConcepts]: ConceptsColumns,
  [ETableTypes.threats]: ThreatsListColumns,
  [ETableTypes.threatsOem]: ThreatsListColumns,
  [ETableTypes.controlGroupsOem]: ControlsColumns,
  [ETableTypes.mainFindings]: MainFindingsColumns,
  [ETableTypes.detailedFindings]: DetailedFindingsColumns,
  [ETableTypes.controlGroups]: ControlsColumns,
  [ETableTypes.feeds]: FeedsColumns,
};
