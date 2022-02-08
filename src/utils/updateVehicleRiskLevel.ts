import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';

interface IData {
  riskLevel: string;
  id: string;
  raProgress: number;
  complianceLevel: number;
}

export const updateVehicleRiskLevel = async (data: IData) => {
  const vehicleRiskLevel = await HTTPService.put(`${API_PATHS.vehicles}/${data.id}`, { ...data });

  return vehicleRiskLevel.data;
};
