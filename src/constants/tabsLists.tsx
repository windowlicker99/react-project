import React from 'react';
import { ArchitecturePage } from '@components/pages/ArchitecturePage';
import { ElementsPage } from '@components/pages/ElementsPage';
import { NotificationsPage } from '@components/pages/NotificationsPage';
import { TicketsPage } from '@components/pages/TicketsPage';
import { VehiclePage } from '@components/pages/VehiclePage';
import { PageMock } from '@components/page-contents/PageMock';
import {
  DomainsTableColumns,
  FunctionsTableColumns,
  ECUsTableColumns,
  DataTableColumns,
} from '@constants/tablesColumns';
import { ETableTypes, EToggleTreatsTabTypes, IElementsTab, IToggleTab } from '@interfaces/interfaces';
import { CLIENT_PATHS } from '@constants/paths';
import { ThreatsPage } from '@/components/pages/ThreatsPage';
import { EElementCreationTabs, EFindings, ESecurityTypes, EThreatTabs } from '@/interfaces/enums';
import { SecurityConcepts } from '@/components/page-contents/SecurityConcepts';
import { SecurityRequirements } from '@/components/page-contents/SecurityRequirements';
import { PenetrationTests } from '@/components/page-contents/PenetrationTests';
import { ControlsPage } from '@/components/pages/ControlsPage';
import { ExternalFeedsPage } from '@/components/pages/ExternalFeedsPage';

export const sidebarTabsList = [
  {
    href: CLIENT_PATHS.vehicle,
    dataTab: 'vehicle',
    iconClass: 'icon-vehicle',
    title: 'Vehicle Types',
    component: VehiclePage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.architecture,
    dataTab: 'architecture',
    iconClass: 'icon-architecture',
    title: 'Architecture',
    component: ArchitecturePage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.elements,
    dataTab: 'elements',
    iconClass: 'icon-elements',
    title: 'Elements',
    component: ElementsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.suppliers,
    dataTab: 'suppliers',
    iconClass: 'icon-user',
    title: 'Suppliers',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.tickets,
    dataTab: 'tickets',
    iconClass: 'icon-tickets',
    title: 'Tickets',
    component: TicketsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.services,
    iconClass: 'icon-services',
    title: 'Services',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.threats,
    iconClass: 'icon-threats',
    title: 'Threats',
    component: ThreatsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.controls,
    iconClass: 'icon-controls',
    title: 'Controls',
    component: ControlsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.certification,
    iconClass: 'icon-certification',
    title: 'Certification',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.reports,
    iconClass: 'icon-reports',
    title: 'Reports',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.documents,
    iconClass: 'icon-documents',
    title: 'Documents',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.notifications,
    iconClass: 'icon-notifications',
    title: 'Notifications',
    component: NotificationsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.feeds,
    iconClass: 'icon-feeds',
    title: 'External Feeds',
    component: ExternalFeedsPage,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.configurations,
    iconClass: 'icon-сonfigurations',
    title: 'Configurations',
    component: PageMock,
  },
  {
    role: 'button',
    dataBsToggle: 'collapse',
    href: CLIENT_PATHS.settings,
    iconClass: 'icon-settings',
    title: 'Settings',
    component: PageMock,
  },
];

export const elementsTabsList: IElementsTab[] = [
  {
    name: 'Domains',
    columns: DomainsTableColumns,
    type: ETableTypes.domains,
  },
  {
    name: 'ECUs',
    columns: ECUsTableColumns,
    type: ETableTypes.ECUs,
  },
  {
    name: 'Functions',
    columns: FunctionsTableColumns,
    type: ETableTypes.functions,
  },
  {
    name: 'Data',
    columns: DataTableColumns,
    type: ETableTypes.data,
  },
];

export const threatsToggleTabs: IToggleTab[] = [
  {
    name: 'UNECE',
    columns: DomainsTableColumns,
    type: EToggleTreatsTabTypes.UNECE,
  },
  {
    name: 'OEM',
    columns: ECUsTableColumns,
    type: EToggleTreatsTabTypes.OEM,
  },
];

export const securityDevelopmentTabsList = [
  {
    name: 'Security Concepts',
    type: ESecurityTypes.concept,
    component: <SecurityConcepts />,
  },
  {
    name: 'Security Requirements',
    type: ESecurityTypes.requirements,
    component: <SecurityRequirements />,
  },
  {
    name: 'Penetration Tests',
    type: ESecurityTypes.penetrationTests,
    component: <PenetrationTests />,
  },
];

export const elementDetailsTabs = [EElementCreationTabs.create, EElementCreationTabs.choose];

export const findingsTabs = [
  {
    name: EFindings.main,
    params: {},
    type: ETableTypes.mainFindings,
  },
  {
    name: EFindings.detailed,
    params: {},
    type: ETableTypes.detailedFindings,
  },
];

export const threatsTabs = [
  {
    name: EThreatTabs.UNECE,
    params: {},
    type: ETableTypes.threats,
  },
  {
    name: EThreatTabs.OEM,
    params: {},
    type: ETableTypes.threatsOem,
  },
];

export const controlsTabs = [
  {
    name: EThreatTabs.UNECE,
    params: {},
    type: ETableTypes.controlGroups,
  },
  {
    name: EThreatTabs.OEM,
    params: {},
    type: ETableTypes.controlGroupsOem,
  },
];
