import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getEcusForVehicle = async (id: string) => {
  const ecus = await HTTPService.get(`${API_PATHS.ecusForVehicle}/${id}`);

  return ecus.data;
};
