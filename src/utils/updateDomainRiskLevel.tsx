import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';

interface IData {
  id: string;
  riskLevel: string;
}

export const updateDomainRiskLevel = async (data: IData) => {
  const domainRiskLevel = await HTTPService.put(`${API_PATHS.domains}`, { ...data });

  return domainRiskLevel.data;
};
