import HTTPService from '@services/HTTPService';
import { API_PATHS } from '@constants/paths';
import { ICurrentElement } from '@interfaces/interfaces';
import { TElement } from '@interfaces/types';
import { EAsideActualElement } from '@/interfaces/enums';

export const getElement = async ({ type, id }: ICurrentElement): Promise<TElement> => {
  const path = EAsideActualElement[type];
  const domains = await HTTPService.get(`${API_PATHS[path]}/${id}`);

  return domains.data;
};
