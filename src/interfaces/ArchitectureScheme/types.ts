import { Connector, Node } from '@syncfusion/ej2-diagrams';
import { EElementPropName } from './enums';
import { IElementAddInfo } from './interfaces';

export type TDiagramEventElement = (Node | Connector) & { addInfo: IElementAddInfo; data: EElementPropName };
