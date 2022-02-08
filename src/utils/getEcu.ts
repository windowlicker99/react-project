import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getEcu = async () => {
  const ecuList = await HTTPService.get(API_PATHS.ecus);

  return ecuList.data;
};
