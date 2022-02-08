import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getBrands = async () => {
  const brands = await HTTPService.get(API_PATHS.brands);

  return brands.data;
};
