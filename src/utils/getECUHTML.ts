import { IArchitectureECU } from '@interfaces/ArchitectureScheme/interfaces';

export const getECUHTML = (ECU: IArchitectureECU, color: string, background: string): string => {
  const title = `${ECU.name}${
    ECU.isGateway
      ? `<p style="margin:5px 0 10px;font-weight:400;font-size:12px;color:${color};line-height:13px;">Gateway</p>`
      : ''
  }`;

  const VMs = ECU.connectedVMs
    ?.map(
      (connectedVM) => `
      <div style="
              background-color: white;
              width: 100%;
              border: 2px solid ${color};
              border-radius: 5px;
              margin-top: 5px;
              padding: 5px;
              font-size: 20px;
              font-weight: 500;
              height: 30px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            ">
        ${connectedVM.name}
      </div>
    `
    )
    .join('');

  if (ECU.connectedVMs?.length) {
    return `<div style="
                      background: ${background};
                      border-radius: 5px;
                      width: 100%;
                      min-height: 100%;
                      border: 2px solid ${color};
                
                      padding: 10px;
                      line-height: 15px;
                      font-size: 20px;
                      font-weight: 500;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    "
              >
                ${title}
                ${VMs}
              </div>`;
  }

  return `<div class="architecture-schema-domain" style="
                    background:${background};
                    border-color:${color};
                  "
            >
              ${title}
            </div>`;
};
