import { API_PATHS } from '@/constants/paths';
import { IArchitectureDomain } from '@/interfaces/ArchitectureScheme/interfaces';
import HTTPService from '@/services/HTTPService';

export const getSchemeData = async (vehicleId: string): Promise<IArchitectureDomain[]> => {
  try {
    const { data } = await HTTPService.get(`${API_PATHS.vehicleScheme}/${vehicleId}`);
    return data;
  } catch {
    return [];
  }
};
