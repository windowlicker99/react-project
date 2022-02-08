import { API_PATHS } from '@constants/paths';
import HTTPService from '@services/HTTPService';

export const getSearch = async (type: keyof typeof API_PATHS, searchText: string) => {
  const response = await HTTPService.get(`${API_PATHS[type]}/search?name=${searchText}`);

  return response.data;
};
