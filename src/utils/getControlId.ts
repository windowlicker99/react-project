import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';

import { TElement } from '@interfaces/types';

export const getControlId = async (id: string): Promise<TElement> => {
  const controls = await HTTPService.get(`${API_PATHS.controls}/${id}`);

  return controls.data;
};
