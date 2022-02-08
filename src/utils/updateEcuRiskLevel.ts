import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';

interface IData {
  riskLevel: string;
  id: string;
  complianceLevel: number;
}

export const updateEcuRiskLevel = async (data: IData) => {
  const ecuRiskLevel = await HTTPService.put(`${API_PATHS.ecus}/${data.id}`, { ...data });

  return ecuRiskLevel.data;
};
