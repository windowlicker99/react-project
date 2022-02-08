import { API_PATHS } from '@constants/paths';
import { IPostedVehicle } from '@interfaces/interfaces';
import HTTPService from '@services/HTTPService';

export const createVehicle = async (vehicle: IPostedVehicle) => {
  const response = await HTTPService.post(API_PATHS.vehicles, vehicle);

  return response;
};
