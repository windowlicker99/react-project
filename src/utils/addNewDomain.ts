import { API_PATHS } from '@constants/paths';
import HTTPService from '@services/HTTPService';
import { IPostDomain } from '@interfaces/interfaces';

export const addNewDomain = async (domain: IPostDomain): Promise<number> => {
  const response = await HTTPService.post(API_PATHS.domains, domain);

  return response.data;
};
