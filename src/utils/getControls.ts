import { API_PATHS } from '@constants/paths';

import HTTPService from '@services/HTTPService';

export const getControls = async () => {
  const controlsList = await HTTPService.get(API_PATHS.controls);

  return controlsList.data;
};
