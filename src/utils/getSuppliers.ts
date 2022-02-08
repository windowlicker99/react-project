import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getSuppliers = async () => {
  const suppliers = await HTTPService.get(API_PATHS.suppliers);

  return suppliers.data;
};
