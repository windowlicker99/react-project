import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getThreats = async () => {
  const threatsList = await HTTPService.get(API_PATHS.threats);

  return threatsList.data;
};
