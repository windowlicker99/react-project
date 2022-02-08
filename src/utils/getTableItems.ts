import { API_PATHS } from '@constants/paths';
import { ETableTypes, IParams } from '@interfaces/interfaces';
import HTTPService from '@services/HTTPService';
import { TRows } from '@interfaces/types';
import { convertToRows } from '@utils/converters';

const getRows = async (type: ETableTypes, params: IParams) => {
  const response = await HTTPService.get(API_PATHS[type], params).then((resp) => resp.data);
  const rowsList = convertToRows[type](response);
  return rowsList;
};

export const getTableItems = async (type: ETableTypes, params: IParams): Promise<TRows> => {
  const data = await getRows(type, params);
  return data || [];
};

export const getSearchResults = async (type: ETableTypes, searchText: string): Promise<TRows> => {
  const response = await HTTPService.get(`${API_PATHS[type]}/search?name=${searchText}`).then((resp) => resp.data);

  const data = convertToRows[type](response);
  return data || [];
};
