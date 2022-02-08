import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getCurrentVehicle = async (id: string) => {
  const currentVehicle = await HTTPService.get(`${API_PATHS.vehicles}/${id}`);

  return currentVehicle.data;
};
