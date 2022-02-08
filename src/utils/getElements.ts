import { API_PATHS } from '@constants/paths';
import { ETableTypes, IParams } from '@interfaces/interfaces';

import HTTPService from '@services/HTTPService';

export const getECUs = async (id: string) => {
  const ECUs = await HTTPService.get(`${API_PATHS[ETableTypes.ECUs]}?vehicleId=${id}`);

  return ECUs.data;
};

export const getDomains = async (id: string) => {
  const domains = await HTTPService.get(`${API_PATHS[ETableTypes.domains]}?vehicleId=${id}`);

  return domains.data;
};

export const getData = async (path: string, params: IParams = {}) => {
  const data = await HTTPService.get(`${path}`, params);

  return data.data;
};
