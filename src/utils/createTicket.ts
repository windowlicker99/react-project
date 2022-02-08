import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';
import { TElement, TPutData } from '@interfaces/types';
import { ETicketStatus } from '@interfaces/enums';

export const createTicket = async (data: TPutData): Promise<TElement> => {
  const ticket = await HTTPService.post(API_PATHS.tickets, { status: ETicketStatus.open, ...data });

  return ticket.data;
};
