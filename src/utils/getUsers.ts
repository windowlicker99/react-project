import { API_PATHS } from '@constants/paths';
import { IAuthor } from '@interfaces/interfaces';

import HTTPService from '@services/HTTPService';

export const getUsers = async (): Promise<IAuthor[]> => {
  const users = await HTTPService.get(API_PATHS.users);
  return users.data;
};

export const getUserById = async (id: string): Promise<IAuthor> => {
  const domains = await HTTPService.get(`${API_PATHS.users}/${id}`);
  return domains.data;
};
