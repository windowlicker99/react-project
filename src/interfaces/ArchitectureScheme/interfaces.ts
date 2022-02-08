import { NodeModel, ISelectionChangeEventArgs } from '@syncfusion/ej2-diagrams';
import { ICurrentElement, IDomain, IECUBasicFields } from '../interfaces';
import { TDiagramEventElement } from './types';

export interface IArchitectureSchemeDomain {
  id: string;
  name: string;
  color: string;
  ECUs?: IArchitectureSchemeECU[];
}

export interface IArchitectureSchemeECU {
  id: string;
  title: string;
  color: string;
  isGateway?: boolean;
  connectedECUs?: IArchitectureSchemeECU[];
  relativeECUs?: IArchitectureSchemeECU[];
}

export interface IArchitectureSchemeECUasGateway extends IArchitectureECU {
  domainNodes: NodeModel[];
}

export interface IArchitecturePointsRange {
  min: number;
  max: number;
}

export interface IDiagramTooltip {
  background?: string;
  color?: string;
  text: string;
}

export interface IDiagramRelative {
  color: string;
}

export interface IElementAddInfo {
  element: ICurrentElement;
  tooltip?: IDiagramTooltip;
  relative?: IDiagramRelative;
}

export interface IDiagramClickEventArgs {
  element: TDiagramEventElement;
  actualObject?: TDiagramEventElement;
}

export interface ISelectionChangeArgs extends ISelectionChangeEventArgs {
  newValue: TDiagramEventElement[];
  oldValue: TDiagramEventElement[];
}

export interface IArchitectureECU extends IECUBasicFields {
  id: string;
  vehicleId: string;
  ticketId?: string | number;
  connectedECUs: IArchitectureECU[];
  connectedVMs?: IArchitectureECU[];
  relativeECUs?: IArchitectureECU[];
  color?: string;
  domain?: { id: string };
}
export interface IArchitectureDomain extends Partial<IDomain> {
  ECUs: IArchitectureECU[];
}
