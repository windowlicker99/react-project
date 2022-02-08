import { gatewayNodeColors } from '@constants/color';
import { IDiagramTooltip } from '@interfaces/ArchitectureScheme/interfaces';

export const createDiagramTooltip = ({
  text,
  color = gatewayNodeColors.color,
  background = gatewayNodeColors.background,
}: IDiagramTooltip): string => {
  if (!text) {
    return '';
  }
  return `<div class="tooltip-architecture" id="tooltip" style="background-color:${background};border-color: ${color};">
  <span class="tooltip-architecture-arrow" style="border-bottom-color:${color};" ></span>
  ${text}
  </div>`;
};
