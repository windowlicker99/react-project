import { API_PATHS } from '@constants/paths';
import HTTPService from '@services/HTTPService';
import { IPostedECU } from '@interfaces/interfaces';

export const addNewECU = async (ECU: IPostedECU): Promise<number> => {
  const response = await HTTPService.post(API_PATHS.ecus, ECU);

  return response.data;
};
