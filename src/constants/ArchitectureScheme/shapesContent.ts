import { IArchitectureSchemeDomain, IArchitectureSchemeECU } from '@/interfaces/ArchitectureScheme/interfaces';

export const gatewayShapeContent = `<div style="width:100%;height:100%;background:white;border:2px solid #4f98ff;border-radius:5px;display:flex;align-items:center;justify-content:space-around;font-weight:600;">Gateway</div>`;

export const createECUasGateway = (
  { isGateway, color, title }: IArchitectureSchemeECU,
  domain: IArchitectureSchemeDomain
): string => {
  if (!isGateway) {
    return `<div style="background:${color};border-radius:5px;width:100%;height:100%;border:2px solid ${domain.color};display:flex;align-items:center;justify-content:center;color:${domain.color};">${title}</div>`;
  }
  return `<div style="background:${color};border-radius:5px;width:100%;height:100%;border:2px solid ${domain.color};color:${domain.color};"><div>${title}</div><div style="width:100%;height:100%;background:white;border:2px solid #4f98ff;border-radius:5px;display:flex;align-items:center;justify-content:space-around;font-weight:600;">Gateway</div></div>`;
};
