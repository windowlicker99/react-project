import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getTickets = async () => {
  const ticketsList = await HTTPService.get(API_PATHS.tickets);

  return ticketsList.data;
};

export const getVehicleTickets = async (vehicleId: string) => {
  const tickets = await HTTPService.get(`${API_PATHS.vehicles}/${vehicleId}${API_PATHS.tickets}`);

  return tickets.data;
};
