import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getAuthorVehicles = async () => {
  const domains = await HTTPService.get(API_PATHS.domains);

  return domains.data;
};
