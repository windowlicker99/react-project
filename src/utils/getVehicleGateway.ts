import { API_PATHS } from '@constants/paths';
import { IGatewayResponse } from '@interfaces/interfaces';

import HTTPService from '@services/HTTPService';

export const getVehicleGateway = async (vehicleId: string): Promise<IGatewayResponse> => {
  const controller = await HTTPService.get(`${API_PATHS.gatewayForVehicle}/${vehicleId}`);

  return controller.data;
};
