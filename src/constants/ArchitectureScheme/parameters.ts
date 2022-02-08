import { ConnectorConstraints, NodeConstraints, SelectorConstraints } from '@syncfusion/ej2-diagrams';
import { AnimationModel } from '@syncfusion/ej2-popups';
import { EElementPropName } from '@interfaces/ArchitectureScheme/enums';

export const selectedItemsSettings = {
  constraints: ~SelectorConstraints.ConnectorTargetThumb & ~SelectorConstraints.ConnectorSourceThumb,
};

export const baseNodeParams = {
  constraints:
    (NodeConstraints.Default &
      ~NodeConstraints.Rotate &
      ~NodeConstraints.Drag &
      ~NodeConstraints.Resize &
      ~NodeConstraints.Delete) |
    NodeConstraints.HideThumbs,
  data: EElementPropName.node,
};

export const baseConnectorParams = {
  constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag & ~ConnectorConstraints.Delete,
  data: EElementPropName.connector,
};

export const disabledConnectorParameters = {
  constraints:
    (ConnectorConstraints.Default & ~ConnectorConstraints.Select & ConnectorConstraints.Interaction) |
    ConnectorConstraints.ReadOnly,
};

export const tooltipAnimationParams: AnimationModel = {
  open: { effect: 'FadeZoomIn', delay: 1000 },
  close: { effect: 'FadeZoomOut', delay: 0 },
};
