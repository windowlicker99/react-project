import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getRelatedThreats = async (id: number) => {
  const getRelatedThreats = await HTTPService.get(`${API_PATHS.controlThreats}?controlId=${id}`);

  return getRelatedThreats.data;
};
